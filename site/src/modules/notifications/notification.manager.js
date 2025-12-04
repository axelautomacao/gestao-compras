import { Components } from '../../ui/components.js';

const queue = [];
let showing = false;

const processQueue = () => {
    if (showing) return;
    const next = queue.shift();
    if (!next) return;
    showing = true;
    Components.createToast(next.message, next.type);
    setTimeout(() => {
        showing = false;
        processQueue();
    }, 3500);
};

const createModal = ({ title = 'Confirmação', message = '', confirmText = 'Confirmar', cancelText = 'Cancelar' }) => {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
    overlay.innerHTML = `
        <div class="bg-surface border border-border rounded shadow-heavy max-w-lg w-full">
            <div class="px-4 py-3 border-b border-border flex justify-between items-center">
                <h3 class="text-lg font-display text-text">${title}</h3>
                <button id="notif-modal-close" class="text-text-muted hover:text-text">×</button>
            </div>
            <div class="p-4 text-text">${message}</div>
            <div class="px-4 py-3 border-t border-border flex justify-end gap-2">
                <button id="notif-modal-cancel" class="btn-secondary">${cancelText}</button>
                <button id="notif-modal-confirm" class="btn">${confirmText}</button>
            </div>
        </div>
    `;
    return overlay;
};

export const NotificationManager = {
    toast: (message, type = 'success') => {
        queue.push({ message, type });
        processQueue();
    },

    confirm: ({ title = 'Confirmação', message = 'Deseja prosseguir?', confirmText = 'Confirmar', cancelText = 'Cancelar' } = {}) => {
        return new Promise((resolve) => {
            const modal = createModal({ title, message, confirmText, cancelText });
            const cleanup = (result) => {
                modal.remove();
                resolve(result);
            };
            modal.querySelector('#notif-modal-close')?.addEventListener('click', () => cleanup(false));
            modal.querySelector('#notif-modal-cancel')?.addEventListener('click', () => cleanup(false));
            modal.querySelector('#notif-modal-confirm')?.addEventListener('click', () => cleanup(true));
            document.body.appendChild(modal);
        });
    },

    badge: (count = 0) => {
        const bell = document.querySelector('#notifications-container');
        if (!bell) return;
        // Simplesmente re-renderizar via event/custom controller seria melhor;
        // aqui ajustamos o atributo data para ser usado por CSS ou controllers.
        bell.dataset.badge = count;
    }
};
