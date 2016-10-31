import { expect } from 'chai';
import notificationReducer from '../src/reducer';
import C from '../src/constants';

describe('notifications reducer', () => {
  it('should return initial state', () => {
    expect(notificationReducer(undefined, {})).to.deep.equal([]);
  });

  it(`should handle ${C.SHOW_NOTIFICATION}`, () => {
    const expectedData = [{
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
    }];
    const action = Object.assign({}, expectedData[0], { type: C.SHOW_NOTIFICATION });
    expect(notificationReducer([], action)).to.deep.equal(expectedData);
  });

  it(`should handle ${C.HIDE_NOTIFICATION}`, () => {
    const initialData = [{
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
    }];
    expect(notificationReducer(initialData, { type: C.HIDE_NOTIFICATION, id: '1234' })).to.deep.equal([]);
  });
});
