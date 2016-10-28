const notify = (events) => ({ dispatch }) => next => action => {
  if (events.indexOf(action.type) !== -1) {
    const { payload, delay } = action;
    dispatch({
      type: 'NOTIFICATION',
      payload,
      delay,
    });
  } else {
    return next(action);
  }
};

export default notify;