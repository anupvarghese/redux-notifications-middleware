import C from './constants';

const showNotification = ({ payload, delay, id }) => ({
  type: C.SHOW_NOTIFICATION,
  payload,
  delay,
  id,
});

const hideNotification = ({ id }) => ({
  type: C.HIDE_NOTIFICATION,
  id,
});

export {
  showNotification,
  hideNotification,
};
