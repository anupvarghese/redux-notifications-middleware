import { showNotification, hideNotification } from './actions';

const notify = events => ({ dispatch }) => next => (action) => {
  if (events.indexOf(action.type) !== -1) {
    const { notificationPayload, notificationDelay = 1000, notificationType } = action;
    const id = new Date().getTime();
    dispatch(showNotification({
      notificationPayload,
      notificationDelay,
      notificationType,
      id,
    }));
    setTimeout(() => {
      dispatch(hideNotification(id));
    }, notificationDelay);
  }
  return next(action);
};

export default notify;
