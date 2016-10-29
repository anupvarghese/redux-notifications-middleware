import { expect } from 'chai';
import sinon from 'sinon';
import notifyMiddleware from '../src';
import createMockStore from './mockstore/create_mock_store';
import { showNotification, hideNotification } from '../src/actions';

describe('Notification middleware test', () => {
  let mockStore;
  let clock;
  let id;
  const events = ['TESTING_NOTIFICATION'];
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2015, 10, 1).getTime());
    id = new Date().getTime();
    mockStore = mockDispatch =>
    createMockStore(
      [notifyMiddleware(events)],
      mockDispatch
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it('returns a function to handle next', () => {
    const mockDispatch = () => {};
    const nextHandler = notifyMiddleware()(mockDispatch);
    expect(typeof nextHandler).to.equal('function');
  });

  it('should dispatch NOTIFICATION action', () => {
    const originalAction = { type: 'TESTING_NOTIFICATION', payload: 'abc', delay: 1500 };
    const expectedActions = [
      showNotification({
        payload: 'abc',
        delay: 1500,
        id,
      }),
      originalAction,
      hideNotification(id),
    ];
    const mockDispatch = (action) => {
      const expectedAction = expectedActions.shift();
      expect(action).to.deep.equal(expectedAction);
      return action;
    };
    mockStore(mockDispatch).dispatch(originalAction);
    clock.tick(1510);
    expect(expectedActions.length).to.equal(0);
  });

  it('should dispatch NOTIFICATION action with default delay', () => {
    const originalAction = { type: 'TESTING_NOTIFICATION', payload: 'abc' };
    const expectedActions = [
      showNotification({
        payload: 'abc',
        id,
      }),
      originalAction,
      hideNotification(id),
    ];
    const mockDispatch = (action) => {
      const expectedAction = expectedActions.shift();
      expect(action).to.deep.equal(expectedAction);
      return action;
    };
    mockStore(mockDispatch).dispatch(originalAction);
    clock.tick(1510);
    expect(expectedActions.length).to.equal(0);
  });

  it('should not dispatch NOTIFICATION action', () => {
    const originalAction = { type: 'SOME_OTHER_ACTION', payload: 'abc', delay: 1500 };
    const mockDispatch = (action) => {
      expect(action).to.deep.equal(originalAction);
      return action;
    };
    mockStore(mockDispatch).dispatch(originalAction);
  });
});
