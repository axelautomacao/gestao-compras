import { NOTIFICATIONS } from '../constants/notifications.js';

export function getNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NOTIFICATIONS);
    }, 500);
  });
}
