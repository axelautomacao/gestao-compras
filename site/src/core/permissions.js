import { Store } from './store.js';

const normalizeRoles = (roles) => (Array.isArray(roles) ? roles : [roles]).filter(Boolean);

export const Permissions = {
    hasRole: (requiredRoles, user = Store.state.currentUser) => {
        const roles = normalizeRoles(requiredRoles);
        if (!user || !roles.length) return false;
        if (user.role === 'administrador') return true;
        return roles.includes(user.role);
    },

    guard: (requiredRoles, action) => {
        if (!Permissions.hasRole(requiredRoles)) {
            const error = new Error('Acesso negado para esta ação.');
            error.code = 'PERMISSION_DENIED';
            throw error;
        }
        return action();
    },

    // Perfis alinhados ao legado
    canEditObra: (user) => Permissions.hasRole(['diretor', 'comprador', 'obra'], user),
    canDeleteObra: (user) => Permissions.hasRole(['diretor'], user),
    canEditCompra: (user) => Permissions.hasRole(['diretor', 'comprador'], user),
    canApproveCompra: (user) => Permissions.hasRole(['diretor', 'financeiro'], user),
    canEditCadastros: (user) => Permissions.hasRole(['diretor'], user)
};
