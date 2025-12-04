import { SettingsService } from './settings.service.js';
import { SettingsView } from './settings.view.js';
import { Layout } from '../../ui/layout.js';
import { Components } from '../../ui/components.js';
import { Store } from '../../core/store.js';
import { Permissions } from '../../core/permissions.js';

export const SettingsController = {
    init: async () => {
        Layout.render(Components.createLoader());
        try {
            Permissions.guard(['administrador', 'diretor'], async () => {
                const users = await SettingsService.getUsers();
                Layout.render(SettingsView.render(users));
                SettingsController.bindEvents();
            });
        } catch (error) {
            Layout.render(`<div class="text-red-500">Erro: ${error.message}</div>`);
        }
    },

    bindEvents: () => {
        document.addEventListener('edit-user', (e) => {
            const userId = e.detail;
            // Simple prompt for MVP. Ideal would be a Modal.
            const newRole = prompt("Nova função (comprador, obra, diretor, administrador):");
            if (newRole) {
                SettingsService.updateUser(userId, { role: newRole })
                    .then(() => {
                        Components.createToast('Usuário atualizado!');
                        SettingsController.init(); // Reload
                    })
                    .catch(err => Components.createToast('Erro: ' + err.message, 'error'));
            }
        });
    }
};
