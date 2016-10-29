import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_NOTIFICATION: {
      const newState = Object.assign([], state);
      return newState.push(action.payload);
    }
    case C.HIDE_NOTIFICATION: {
      const newState = Object.assign([], state);
      return newState.filter(n => n.id !== action.payload.id);
    }
    default:
      return state;
  }
};
