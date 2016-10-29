import { expect } from 'chai';
import notifyMiddleware from '../src';
import { stub, spy } from 'sinon';

describe('Notification middleware test', () => {
  let dispatch;
  let next;
  let store;
  let notify;
  beforeEach(() => {
    dispatch = stub();
    next = stub();
    store = {
      dispatch
    };
  });
  it('should be a function', () => {
    expect(notify).to.be.function;
  });
  it('should dispatch NOTIFICATION action', (done) => {
    const events = ['TESTING_NOTIFICATION'];
    const action = { type: 'TESTING_NOTIFICATION', payload: 'abc', delay: 1500 };
    const expectedAction = { type: 'NOTIFICATION', payload: 'abc', delay: 1500 };
    const resp = notifyMiddleware(events)(store)(next)(action);
    expect(dispatch.callCount).to.equal(1);
    expect(dispatch.args[0][0]).to.deep.equal(expectedAction);
    expect(next.callCount).to.equal(0);
    done();
  });

  it('should not dispatch NOTIFICATION action', (done) => {
    const events = ['SOME_OTHER_ACTION'];
    const action = { type: 'TESTING_NOTIFICATION', payload: 'abc', delay: 1500 };
    const resp = notifyMiddleware(events)(store)(next)(action);
    expect(dispatch.callCount).to.equal(0);
    expect(next.callCount).to.equal(1)
    expect(next.args[0][0]).to.deep.equal(action);
    done();
  });
});