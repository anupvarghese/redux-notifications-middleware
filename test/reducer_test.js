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
      hidden: 'show',
      notificationType: 'success',
    }];
    const action = Object.assign({}, expectedData[0], { type: C.SHOW_NOTIFICATION });
    expect(notificationReducer([], action)).to.deep.equal(expectedData);
  });

  it(`adds the new notification to the end of the array for ${C.SHOW_NOTIFICATION}`, () => {
    const expectedData = [{
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
      hidden: 'show',
      notificationType: 'success',
    }, {
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '4567',
      hidden: 'show',
      notificationType: 'success',
    }];
    const action = Object.assign({}, expectedData[1], { type: C.SHOW_NOTIFICATION });
    expect(notificationReducer([expectedData[0]], action)).to.deep.equal(expectedData);
  });

  describe(`for ${C.HIDE_NOTIFICATION}`, () => {
    const initialData = [{
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
      hidden: 'show',
      notificationType: 'success',
    }, {
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '4567',
      hidden: 'show',
      notificationType: 'success',
    }];
    it('returns state if notification is not found', () => {
      const expectedData = [{
        notificationPayload: 'Hi',
        notificationDelay: 2000,
        id: '1234',
        hidden: 'show',
        notificationType: 'success',
      }, {
        notificationPayload: 'Hi',
        notificationDelay: 2000,
        id: '4567',
        hidden: 'show',
        notificationType: 'success',
      }];
      const action = Object.assign({}, expectedData[0], { type: C.HIDE_NOTIFICATION, id: 'butts' });
      expect(notificationReducer(initialData, action)).to.deep.equal(expectedData);
    });

    it('sets hidden property to hide of the specified id', () => {
      const expectedData = [{
        notificationPayload: 'Hi',
        notificationDelay: 2000,
        id: '1234',
        hidden: 'hide',
        notificationType: 'success',
      }, {
        notificationPayload: 'Hi',
        notificationDelay: 2000,
        id: '4567',
        hidden: 'shown',
        notificationType: 'success',
      }];
      const action = Object.assign({}, expectedData[1], { type: C.HIDE_NOTIFICATION, id: '1234' });
      expect(notificationReducer(initialData, action)).to.deep.equal(expectedData);
    });
  });

  it(`should handle ${C.REMOVE_NOTIFICATION}`, () => {
    const initialData = [{
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
      notificationType: 'warning',
    }];
    expect(notificationReducer(initialData, { type: C.REMOVE_NOTIFICATION, id: '1234' })).to.deep.equal([]);
  });
});
