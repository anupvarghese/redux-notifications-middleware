import C from './constants';

const showNotification = ({
  notificationPayload,
  notificationDelay = 1000,
  permalink = null,
  id,
  notificationType,
}) => ({
  type: C.SHOW_NOTIFICATION,
  notificationPayload,
  notificationDelay,
  notificationType,
  permalink,
  id,
});

const hideNotification = id => ({
  type: C.HIDE_NOTIFICATION,
  id,
});

const removeNotification = id => ({
  type: C.REMOVE_NOTIFICATION,
  id,
});

export {
  showNotification,
  hideNotification,
  removeNotification,
};
