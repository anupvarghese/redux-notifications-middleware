import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_NOTIFICATION: {
      const { notificationPayload, id, notificationDelay, notificationType, isDownloadable } = action;
      return [...state, {
        id,
        notificationPayload,
        notificationDelay,
        notificationType,
        isDownloadable,
        hidden: 'show',
      }];
    }
    case C.HIDE_NOTIFICATION: {
      const notification = state.find(n => n.id === action.id);
      if (!notification) return state;
      notification.hidden = 'hide';
      const withoutNotification = state.filter(n => n.id !== action.id).map(n =>
        n.hidden === 'show' ? Object.assign({}, n, { hidden: 'shown' }) : n
      );
      return [notification, ...withoutNotification].sort((prev, next) =>
        prev.id - next.id);
    }
    case C.REMOVE_NOTIFICATION: {
      return state.filter(n => n.id !== action.id);
    }
    default:
      return state;
  }
};
