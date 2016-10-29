import { showNotification, hideNotification } from './actions';

const notify = events => ({ dispatch }) => next => (action) => {
  if (events.indexOf(action.type) !== -1) {
    const { payload, delay = 1000 } = action;
    const id = new Date().getTime();
    dispatch(showNotification({
      payload,
      delay,
      id,
    }));
    setTimeout(() => {
      dispatch(hideNotification({
        id,
      }));
    }, delay);
  }
  return next(action);
};

export default notify;
