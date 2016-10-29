import { expect } from 'chai';
import { stub } from 'sinon';
import notifyMiddleware from '../src';

describe('Notification middleware test', () => {
  let dispatch;
  let next;
  let store;
  beforeEach(() => {
    dispatch = stub();
    next = stub();
    store = {
      dispatch,
    };
  });
  it('should dispatch NOTIFICATION action', (done) => {
    const events = ['TESTING_NOTIFICATION'];
    const action = { type: 'TESTING_NOTIFICATION', payload: 'abc', delay: 1500 };
    const expectedAction = { type: 'NOTIFICATION', payload: 'abc', delay: 1500 };
    notifyMiddleware(events)(store)(next)(action);
    expect(dispatch.callCount).to.equal(1);
    expect(dispatch.args[0][0]).to.deep.equal(expectedAction);
    expect(next.callCount).to.equal(0);
    done();
  });

  it('should not dispatch NOTIFICATION action', (done) => {
    const events = ['SOME_OTHER_ACTION'];
    const action = { type: 'TESTING_NOTIFICATION', payload: 'abc', delay: 1500 };
    notifyMiddleware(events)(store)(next)(action);
    expect(dispatch.callCount).to.equal(0);
    expect(next.callCount).to.equal(1);
    expect(next.args[0][0]).to.deep.equal(action);
    done();
  });
});
