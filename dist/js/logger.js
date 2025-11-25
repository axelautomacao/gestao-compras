// js/logger.js
import { db, collection, addDoc, Timestamp } from './firebase-config.js';

/**
 * Registra uma ação de auditoria no Firestore
 * @param {string} acao - (ex: 'create', 'update', 'delete', 'login')
 * @param {object} detalhes - (ex: { colecao: 'obras', id: '...' })
 * @param {object | null} usuario - (O objeto state.currentUser)
 */
export async function logAuditoria(acao, detalhes, usuario) {
    try {
        await addDoc(collection(db, "logs"), {
            timestamp: Timestamp.now(),
            acao: acao,
            detalhes: detalhes, // Contém o que foi alterado
            userId: usuario?.uid || null,
            userEmail: usuario?.email || 'sistema'
        });
    } catch (err) {
        console.error("Falha ao registrar log de auditoria:", err);
        // Não paramos a execução principal, apenas registramos o erro no console
    }
}