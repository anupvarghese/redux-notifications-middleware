import { expect } from 'chai';
import {
  showNotification,
  hideNotification,
} from '../src/actions';
import C from '../src/constants';

describe('notifications action', () => {
  it('should call showNotification', () => {
    const expectedData = {
      payload: 'Hi',
      delay: 2000,
      id: '1234',
      type: C.SHOW_NOTIFICATION,
    };
    expect(showNotification({
      payload: 'Hi',
      delay: 2000,
      id: '1234',
    })).to.deep.equal(expectedData);
  });

  it('should call showNotification with default delay', () => {
    const expectedData = {
      payload: 'Hi',
      delay: 1000,
      id: '1234',
      type: C.SHOW_NOTIFICATION,
    };
    expect(showNotification({
      payload: 'Hi',
      id: '1234',
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
