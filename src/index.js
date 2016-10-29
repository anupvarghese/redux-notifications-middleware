const notify = events => ({ dispatch }) => next => (action) => {
  if (events.indexOf(action.type) !== -1) {
    const { payload, delay = 1000 } = action;
    dispatch({
      type: 'NOTIFICATION',
      payload,
      delay,
    });
    return null;
  }
  return next(action);
};

export default notify;
