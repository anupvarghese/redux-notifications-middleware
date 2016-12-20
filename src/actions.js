import C from './constants';

const showNotification = ({
  notificationPayload,
  notificationDelay = 1000,
  id,
  notificationType,
}) => ({
  type: C.SHOW_NOTIFICATION,
  notificationPayload,
  notificationDelay,
  notificationType,
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
