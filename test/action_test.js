import { expect } from 'chai';
import {
  showNotification,
  hideNotification,
} from '../src/actions';
import C from '../src/constants';

describe('notifications action', () => {
  it('should call showNotification', () => {
    const expectedData = {
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
      notificationType: 'success',
      type: C.SHOW_NOTIFICATION,
    };
    expect(showNotification({
      notificationPayload: 'Hi',
      notificationDelay: 2000,
      id: '1234',
      notificationType: 'success',
    })).to.deep.equal(expectedData);
  });

  it('should call showNotification with default delay', () => {
    const expectedData = {
      notificationPayload: 'Hi',
      notificationDelay: 1000,
      id: '1234',
      notificationType: 'success',
      type: C.SHOW_NOTIFICATION,
    };
    expect(showNotification({
      notificationPayload: 'Hi',
      id: '1234',
      notificationType: 'success',
    })).to.deep.equal(expectedData);
  });

  it('should call hideNotification', () => {
    const expectedData = {
      type: C.HIDE_NOTIFICATION,
      id: '123',
    };
    expect(hideNotification('123')).to.deep.equal(expectedData);
  });
});
