import { useNotifications } from '../hooks/useNotifications.js';
import { createElement } from '../utils/dom.js';

export function NotificationCenter() {
  const container = createElement('div', { className: 'notification-center' });
  const notificationsHook = useNotifications();

  const render = (notifications) => {
    if (!notifications || notifications.length === 0) {
      const title = createElement('h3', { text: 'Central de Notificações' });
      const message = createElement('p', { text: 'Nenhuma notificação no momento.' });
      container.replaceChildren(title, message);
      return;
    }

    const title = createElement('h3', { text: 'Central de Notificações' });
    const list = createElement('ul', { className: 'notification-list' });

    const items = notifications.map((notification) => {
      const item = createElement('li', { className: 'notification-item' });
      const notificationTitle = createElement('h4', { text: notification.title });
      const notificationMessage = createElement('p', { text: notification.message });
      const actionButton = createElement('button', { text: 'Ver Detalhes' });
      const dismissButton = createElement('button', { text: 'Dispensar' });

      actionButton.addEventListener('click', () => {
        const navigateEvent = new CustomEvent('navigate', {
          detail: `/purchases/${notification.id}`,
        });
        window.dispatchEvent(navigateEvent);
      });

      dismissButton.addEventListener('click', () => {
        item.remove();
        // Here you would typically make an API call to mark the notification as dismissed
        // For example: api.dismissNotification(notification.id);
      });

      item.append(notificationTitle, notificationMessage, actionButton, dismissButton);
      return item;
    });

    list.append(...items);
    container.replaceChildren(title, list);
  };

  notificationsHook.subscribe(render);
  render(notificationsHook.get());

  return container;
}