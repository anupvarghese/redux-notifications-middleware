import { showNotification, hideNotification, removeNotification } from './actions';

const notify = events => ({ dispatch }) => next => (action) => {
  if (events.indexOf(action.type) !== -1) {
    const {
      notificationPayload,
      notificationDelay = 1000,
      notificationType,
      isDownloadable = false,
      animationDelay = 150 } = action;
    const id = new Date().getTime();
    dispatch(showNotification({
      notificationPayload,
      notificationDelay,
      notificationType,
      isDownloadable,
      id,
    }));
    setTimeout(() => {
      dispatch(hideNotification(id));
      setTimeout(() => {
        dispatch(removeNotification(id));
      }, animationDelay);
    }, notificationDelay);
  }
  return next(action);
};

export default notify;
