import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_NOTIFICATION: {
      const { notificationPayload, id, notificationDelay, notificationType } = action;
      return [...state, { notificationPayload, notificationDelay, id, notificationType }];
    }
    case C.HIDE_NOTIFICATION: {
      return [...state].filter(n => n.id !== action.id);
    }
    default:
      return state;
  }
};
