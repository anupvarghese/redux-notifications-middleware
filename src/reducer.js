import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_NOTIFICATION: {
      return [...state, action.payload];
    }
    case C.HIDE_NOTIFICATION: {
      return [...state].filter(n => n.id !== action.payload.id);
    }
    default:
      return state;
  }
};
