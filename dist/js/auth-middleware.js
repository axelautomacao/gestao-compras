// js/auth-middleware.js
import { state } from './state.js';

/**
 * AuthMiddleware: Verifica permissões antes de ações sensíveis
 * Previne acesso não autorizado mesmo se o frontend for alterado
 */
export const AuthMiddleware = {
    // Verificar se usuário tem role específica
    hasRole: (requiredRoles) => {
        const userRole = state.currentUser?.role;
        const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
        return userRole === 'administrador' || roles.includes(userRole);
    },

    // Verificar permissão específica para editar obras
    canEditObra: () => AuthMiddleware.hasRole(['diretor', 'comprador', 'obra']),

    // Verificar permissão específica para deletar obras
    canDeleteObra: () => AuthMiddleware.hasRole(['diretor']),

    // Verificar permissão específica para editar compras
    canEditCompra: () => AuthMiddleware.hasRole(['diretor', 'comprador']),

    // Verificar permissão específica para aprovar compras
    canApproveCompra: () => AuthMiddleware.hasRole(['diretor', 'financeiro']),

    // Verificar permissão específica para editar cadastros (fornecedores, compradores, centros de custo)
    canEditCadastros: () => AuthMiddleware.hasRole(['diretor']),

    // Verificar permissão específica para deletar cadastros
    canDeleteCadastros: () => AuthMiddleware.hasRole(['diretor']),

    // Guard genérico: se permission é false, lança erro com código PERMISSION_DENIED
    guard: (permission, action) => {
        if (!permission) {
            const error = new Error("❌ Você não tem permissão para realizar esta ação.");
            error.code = 'PERMISSION_DENIED';
            throw error;
        }
        return action();
    }
};
