// js/notification-manager.js
// Gerenciador simples de notificações com fila, tipos e ações
const $ = (id) => document.getElementById(id);

export const NotificationManager = (() => {
    // Inject minimal DOM markup if not present (toast container, template, confirm modal, audit modal)
    const ensureDom = () => {
        if (!document.getElementById('toast-container')) {
            const div = document.createElement('div');
            div.id = 'toast-container';
            div.className = 'fixed top-5 right-5 z-[100] space-y-2 w-96 pointer-events-none';
            document.body.appendChild(div);
        }
        if (!document.getElementById('notification-template')) {
            const tpl = document.createElement('template');
            tpl.id = 'notification-template';
            tpl.innerHTML = `
        <div class="notification pointer-events-auto p-3 rounded-lg shadow-lg text-white transition-all duration-300 bg-green-600">
            <div class="flex items-start justify-between gap-3">
                <div class="flex gap-3 items-start flex-1">
                    <span class="icon mt-1">•</span>
                    <span class="message"></span>
                </div>
                <div class="flex-shrink-0 flex items-center gap-2">
                    <button class="action hidden bg-white text-black px-2 py-1 rounded text-sm"></button>
                    <button class="close text-xl leading-none">&times;</button>
                </div>
            </div>
        </div>`;
            document.body.appendChild(tpl);
        }
        if (!document.getElementById('confirmModal')) {
            const dlg = document.createElement('dialog');
            dlg.id = 'confirmModal';
            dlg.className = 'p-0 rounded-lg shadow-xl w-full max-w-md z-50 overflow-hidden';
            dlg.innerHTML = `<div class="p-6"><h3 id="confirmTitle" class="text-lg font-medium">Confirmar</h3><p id="confirmMessage" class="text-sm text-gray-600 mt-2">Mensagem</p><div class="flex justify-end space-x-2 pt-4"><button id="btnConfirmCancel" type="button" class="btn-secondary">Cancelar</button><button id="btnConfirmOk" type="button" class="btn">Confirmar</button></div></div>`;
            document.body.appendChild(dlg);
        }
        if (!document.getElementById('auditModal')) {
            const dlg = document.createElement('dialog');
            dlg.id = 'auditModal';
            dlg.className = 'p-0 rounded-lg shadow-xl w-full max-w-3xl z-50 overflow-auto';
            dlg.innerHTML = `<div class="p-6"><div class="flex items-center justify-between"><h3 class="text-xl font-medium">Histórico de Ações</h3><button id="btnAuditClose" class="btn-secondary">Fechar</button></div><ul id="audit-list" class="mt-4 space-y-2 max-h-96 overflow-auto"></ul></div>`;
            document.body.appendChild(dlg);
            const closeBtn = document.getElementById('btnAuditClose');
            if (closeBtn) closeBtn.addEventListener('click', () => { try { dlg.close(); } catch (e) { } });
        }
    };
    ensureDom();
    const containerId = 'toast-container';
    const templateId = 'notification-template';
    const maxVisible = 3;
    const queue = [];

    const createNode = (notification) => {
        const tpl = $(templateId);
        if (!tpl) return null;
        const node = tpl.content.firstElementChild.cloneNode(true);
        node.dataset.id = notification.id;
        node.querySelector('.message').textContent = notification.message;
        const icon = node.querySelector('.icon');
        const actionBtn = node.querySelector('.action');
        const closeBtn = node.querySelector('.close');

        node.classList.add(`notif-${notification.type}`);

        if (notification.action && actionBtn) {
            actionBtn.textContent = notification.action.label || 'Ação';
            actionBtn.classList.remove('hidden');
            actionBtn.onclick = async (e) => {
                try {
                    await notification.action.handler();
                } catch (err) {
                    console.error('Erro na action do notification:', err);
                }
                remove(notification.id);
            };
        }

        if (closeBtn) closeBtn.onclick = () => remove(notification.id);

        return node;
    };

    const render = () => {
        const container = document.getElementById(containerId);
        if (!container) return;
        // limpar
        container.innerHTML = '';
        // mostrar até maxVisible
        const visible = queue.slice(0, maxVisible);
        visible.forEach(n => {
            const node = createNode(n);
            if (!node) return;
            container.appendChild(node);
            // auto dismiss
            if (n.duration && n.duration > 0) {
                n._timeout = setTimeout(() => remove(n.id), n.duration);
            }
        });
    };

    const remove = (id) => {
        const idx = queue.findIndex(q => q.id === id);
        if (idx === -1) return;
        const item = queue[idx];
        if (item && item._timeout) clearTimeout(item._timeout);
        queue.splice(idx, 1);
        render();
    };

    const show = (message, type = 'info', duration = 3000, action = null) => {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        const notification = { id, message, type, duration, action };
        queue.push(notification);
        render();
        return id;
    };

    const clear = () => {
        queue.length = 0;
        render();
    };

    return { show, clear, _queue: queue };
})();
