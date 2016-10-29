import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_NOTIFICATION: {
      const { payload, id, delay } = action;
      return [...state, { payload, delay, id }];
    }
    case C.HIDE_NOTIFICATION: {
      return [...state].filter(n => n.id !== action.id);
    }
    default:
      return state;
  }
};
