import { getNotifications } from '../api/api.js';

export function useNotifications() {
  let notifications = [];
  const subscribers = new Set();

  const subscribe = (callback) => {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  };

  const notify = () => {
    subscribers.forEach(callback => callback(notifications));
  };

  const fetchNotifications = async () => {
    const newNotifications = await getNotifications();
    if (newNotifications.length > notifications.length) {
      notifications = newNotifications;
      notify();
    }
  };

  // Poll for new notifications every 10 seconds
  setInterval(fetchNotifications, 10000);

  // Initial fetch
  fetchNotifications();

  return {
    subscribe,
    get: () => notifications,
  };
}