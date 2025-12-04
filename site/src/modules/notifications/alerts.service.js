import { db } from '../../config/firebase.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NotificationsService } from './notifications.service.js';

const normalizeStatus = (status = '') => status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const isDelivered = (status = '') => {
    const n = normalizeStatus(status);
    return n.includes('receb') || n.includes('entreg');
};

export const AlertsService = {
    /**
     * Retorna resumo de alertas (atrasados, sem previsão, pendente aprovação, cotação, estoque) filtrado por obra opcional.
     */
    getAlertSummary: async ({ obraId = null } = {}) => {
        const comprasRef = collection(db, 'compras');
        const q = obraId ? query(comprasRef, where('obraId', '==', obraId)) : comprasRef;
        const snapshot = await getDocs(q);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const summary = {
            atrasados: 0,
            sem_previsao: 0,
            pendente_aprovacao: 0,
            cotacao: 0,
            estoque: 0
        };

        snapshot.docs.forEach(docSnap => {
            const c = docSnap.data();
            const status = normalizeStatus(c.status_compra || '');
            const delivered = isDelivered(status);
            const prev = c.previsao_entrega || c.data_entrega_prevista;
            const prevDate = prev ? new Date(prev) : null;

            if (!delivered && prevDate && prevDate < today) summary.atrasados++;
            if (!delivered && !prevDate) summary.sem_previsao++;
            if (c.estouro_orcamento || normalizeStatus(c.status_aprovacao || '') === 'pendente') summary.pendente_aprovacao++;
            if (status.includes('cot')) summary.cotacao++;
            if (c.retirada_estoque && !delivered) summary.estoque++;
        });

        return summary;
    },

    /**
     * Cria notificações com dedupe diário por slug/escopo/obra.
     */
    notifySummary: async (summary = {}, userId, { scope = 'global', obraId = null } = {}) => {
        if (!userId || !summary) return;
        const todayKey = new Date().toISOString().slice(0, 10);
        const send = async (slug, titulo, mensagem, prioridade = 'normal') => {
            const key = `notif_${slug}_${scope}_${obraId || 'all'}_${todayKey}_${userId}`;
            if (localStorage.getItem(key)) return;
            await NotificationsService.create({
                userId,
                tipo: slug,
                titulo,
                mensagem,
                link: obraId ? `#/obras/${obraId}` : '#/relatorios',
                prioridade,
                obraId
            });
            localStorage.setItem(key, '1');
        };

        // Envia novas e limpa as resolvidas
        const types = [
            { key: 'atrasados', title: 'Pedidos atrasados', msg: `${summary.atrasados} pedido(s) com previsão vencida.`, prio: 'alta' },
            { key: 'sem_previsao', title: 'Pedidos sem previsão', msg: `${summary.sem_previsao} pedido(s) sem data de entrega.`, prio: 'normal' },
            { key: 'pendente_aprovacao', title: 'Aprovação pendente', msg: `${summary.pendente_aprovacao} pedido(s) aguardando aprovação.`, prio: 'normal' },
            { key: 'cotacao', title: 'Pedidos em cotação', msg: `${summary.cotacao} pedido(s) em cotação.`, prio: 'normal' },
            { key: 'estoque', title: 'Retiradas de estoque', msg: `${summary.estoque} pedido(s) aguardando baixa de estoque.`, prio: 'normal' }
        ];

        for (const t of types) {
            const count = summary[t.key] || 0;
            if (count > 0) {
                await send(t.key, t.title, t.msg, t.prio);
            } else {
                await NotificationsService.markByType(userId, t.key, obraId);
            }
        }
    }
};
