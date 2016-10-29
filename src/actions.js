import C from './constants';

const showNotification = ({ payload, delay = 1000, id }) => ({
  type: C.SHOW_NOTIFICATION,
  payload,
  delay,
  id,
});

const hideNotification = id => ({
  type: C.HIDE_NOTIFICATION,
  id,
});

export {
  showNotification,
  hideNotification,
};
