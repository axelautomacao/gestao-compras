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
                window.__USERS_CACHE = users; // cache simples para uso nos modais
                Layout.render(SettingsView.render(users));
                SettingsController.bindEvents();
            });
        } catch (error) {
            Layout.render(`<div class="text-red-500">Erro: ${error.message}</div>`);
        }
    },

    bindEvents: () => {
        document.getElementById('btn-new-user')?.addEventListener('click', () => SettingsController.openUserModal());

        document.removeEventListener('edit-user', SettingsController.handleEditUser);
        document.addEventListener('edit-user', SettingsController.handleEditUser);
    },

    handleEditUser: (e) => {
        const userId = e.detail;
        SettingsController.openUserModal({ mode: 'edit', userId });
    },

    openUserModal: ({ mode = 'create', userId = null } = {}) => {
        const user = (window.__USERS_CACHE || []).find(u => u.id === userId) || null;
        const title = mode === 'edit' ? 'Atualizar Usuário' : 'Novo Usuário';

        const overlay = document.createElement('div');
        overlay.className = 'fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4';
        overlay.innerHTML = `
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-lg">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${title}</h3>
                    <button data-close class="text-text-muted hover:text-text">&times;</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-xs heading-muted uppercase">Nome</label>
                            <input id="user-nome" class="input" value="${(user?.nome || '').replace(/"/g, '&quot;')}" placeholder="Nome completo" />
                        </div>
                        <div>
                            <label class="text-xs heading-muted uppercase">Email</label>
                            <input id="user-email" class="input" type="email" value="${(user?.email || '').replace(/"/g, '&quot;')}" placeholder="email@dominio.com" ${mode === 'edit' ? 'readonly' : ''} />
                        </div>
                        <div>
                            <label class="text-xs heading-muted uppercase">Função (Role)</label>
                            <select id="user-role" class="input">
                                ${['administrador','diretor','comprador','obra'].map(r => `<option value="${r}" ${user?.role === r ? 'selected' : ''}>${r}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label class="text-xs heading-muted uppercase">Senha inicial</label>
                            <input id="user-password" class="input" type="password" placeholder="opcional" ${mode === 'edit' ? 'disabled' : ''} />
                            <p class="text-[11px] text-text-muted mt-1">${mode === 'edit' ? 'Alteração de senha indisponível aqui.' : 'Deixe em branco para gerar automaticamente.'}</p>
                        </div>
                        <div class="md:col-span-2">
                            <label class="text-xs heading-muted uppercase">Obra padrão (opcional)</label>
                            <input id="user-obra" class="input" value="${(user?.obraPadrao || '').replace(/"/g, '&quot;')}" placeholder="ID/OS" />
                        </div>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button class="btn-secondary" data-close>Cancelar</button>
                        <button class="btn" data-save>${mode === 'edit' ? 'Salvar' : 'Criar'}</button>
                    </div>
                </div>
            </div>
        `;

        const close = () => overlay.remove();
        overlay.querySelectorAll('[data-close]')?.forEach(btn => btn.addEventListener('click', close));
        overlay.querySelector('[data-save]')?.addEventListener('click', async () => {
            const nome = overlay.querySelector('#user-nome')?.value?.trim() || '';
            const email = overlay.querySelector('#user-email')?.value?.trim() || '';
            const role = overlay.querySelector('#user-role')?.value || 'obra';
            const password = overlay.querySelector('#user-password')?.value || '';
            const obraPadrao = overlay.querySelector('#user-obra')?.value?.trim() || undefined;

            if (!nome || !email) {
                Components.createToast('Nome e email são obrigatórios.', 'error');
                return;
            }
            if (mode === 'create' && password && password.length < 6) {
                Components.createToast('A senha precisa ter pelo menos 6 caracteres.', 'error');
                return;
            }

            try {
                if (mode === 'edit') {
                    await SettingsService.updateUser(userId, { role });
                    Components.createToast('Usuário atualizado!');
                } else {
                    const result = await SettingsService.createWithSecondaryAuth({
                        nome,
                        email,
                        role,
                        password: password || undefined,
                        obraPadrao
                    });
                    Components.createToast('Usuário criado com sucesso!');
                    if (!password) {
                        Components.createToast(`Senha gerada: ${result.password}`, 'info');
                        console.log('[Usuário criado] senha gerada automaticamente:', result.password);
                    }
                }
                close();
                SettingsController.init();
            } catch (error) {
                Components.createToast(error.message || 'Não foi possível concluir a operação.', 'error');
            }
        });

        document.body.appendChild(overlay);
    }
};
