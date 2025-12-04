import { Icons } from '../../ui/icons.js';

export const NotificationsView = {
    renderBell: (unreadCount = 0) => {
        return `
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Icons.bell}
                ${unreadCount > 0 ? `
                    <span class="absolute top-0 right-0 bg-alert text-white text-[10px] font-display rounded-full w-5 h-5 flex items-center justify-center">
                        ${unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                ` : ''}
            </button>
        `;
    },

    renderDropdown: (notifications = []) => {
        return `
            <div id="notifications-dropdown" class="absolute right-0 mt-2 w-80 bg-surface border border-border rounded shadow-heavy max-h-96 overflow-y-auto hidden z-50">
                <div class="p-4 border-b border-border flex justify-between items-center">
                    <h3 class="font-display text-text">Notificações</h3>
                    ${notifications.some(n => !n.lida) ? `
                        <button id="mark-all-read" class="text-xs text-primary hover:text-primary-strong font-display uppercase tracking-wide">
                            Marcar todas como lidas
                        </button>
                    ` : ''}
                </div>
                
                <div class="divide-y divide-border">
                    ${notifications.length === 0 ? `
                        <div class="p-6 text-center text-text-muted">
                            <p class="text-sm">Nenhuma notificação</p>
                        </div>
                    ` : notifications.map(n => `
                        <div class="p-4 hover:bg-canvas transition-colors cursor-pointer ${!n.lida ? 'bg-primary/5' : ''}" 
                             data-notification-id="${n.id}" data-link="${n.link || '#'}">
                            <div class="flex items-start gap-3">
                                <div class="flex-shrink-0 w-8 h-8 rounded-full ${n.prioridade === 'alta' ? 'bg-alert' : 'bg-primary'} flex items-center justify-center">
                                    <span class="text-white text-xs">!</span>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-display text-text ${!n.lida ? 'font-bold' : ''}">${n.titulo}</p>
                                    <p class="text-xs text-text-muted mt-1">${n.mensagem}</p>
                                    <p class="text-xs text-text-muted mt-1">${new Date(n.created_at).toLocaleString('pt-BR')}</p>
                                </div>
                                ${!n.lida ? `<div class="w-2 h-2 bg-primary rounded-full"></div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
};
