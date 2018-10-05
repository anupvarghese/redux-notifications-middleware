import {
  showNotification,
  hideNotification,
  removeNotification,
} from './actions';
import notificationReducer from './reducer';
import notificationMiddleware from './middleware';
import { Notification } from './components/Notification';

export {
  showNotification,
  hideNotification,
  removeNotification,
  notificationReducer,
  notificationMiddleware,
  Notification,
};
