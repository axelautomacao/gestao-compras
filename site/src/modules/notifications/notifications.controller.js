import { NotificationsService } from './notifications.service.js';
import { NotificationsView } from './notifications.view.js';
import { Store } from '../../core/store.js';
import { NotificationManager } from './notification.manager.js';

export const NotificationsController = {
    notifications: [],
    unreadCount: 0,
    eventsBound: false,

    init: async () => {
        const user = Store.state.currentUser;
        if (!user) return;

        // Re-render bell whenever layout rebuilds
        window.addEventListener('layout:rendered', () => {
            NotificationsController.render();
            NotificationsController.bindEvents();
        });

        await NotificationsController.load();
        NotificationsController.render();
        NotificationsController.bindEvents();

        // Auto-refresh a cada 2 minutos
        setInterval(() => NotificationsController.load(), 120000);
    },

    load: async () => {
        const user = Store.state.currentUser;
        NotificationsController.notifications = await NotificationsService.getByUser(user.uid, 20);
        NotificationsController.unreadCount = NotificationsController.notifications.filter(n => !n.lida).length;
        NotificationsController.render();
        NotificationManager.badge(NotificationsController.unreadCount);
    },

    render: () => {
        const bellContainer = document.getElementById('notifications-container');
        if (!bellContainer) return;

        bellContainer.innerHTML = NotificationsView.renderBell(NotificationsController.unreadCount);

        // Adicionar dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'relative';
        dropdown.innerHTML = NotificationsView.renderDropdown(NotificationsController.notifications);
        bellContainer.appendChild(dropdown);
    },

    bindEvents: () => {
        if (NotificationsController.eventsBound) return;
        NotificationsController.eventsBound = true;
        document.addEventListener('click', (e) => {
            const bell = document.getElementById('notifications-bell');
            const dropdown = document.getElementById('notifications-dropdown');

            if (bell && bell.contains(e.target)) {
                dropdown?.classList.toggle('hidden');
            } else if (dropdown && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });

        document.addEventListener('click', async (e) => {
            if (e.target.id === 'mark-all-read') {
                const user = Store.state.currentUser;
                await NotificationsService.markAllAsRead(user.uid);
                await NotificationsController.load();
            }
        });

        document.addEventListener('click', async (e) => {
            const card = e.target.closest?.('[data-notification-id]');
            if (!card) return;
            const id = card.dataset.notificationId;
            const link = card.dataset.link || '#';
            try {
                await NotificationsService.markAsRead(id);
                await NotificationsController.load();
            } finally {
                if (link) {
                    window.location.hash = link.startsWith('#') ? link.slice(1) : link;
                }
            }
        });
    }
};
