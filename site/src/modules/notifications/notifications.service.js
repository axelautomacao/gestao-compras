import { db } from '../../config/firebase.js';
import { collection, addDoc, query, where, getDocs, updateDoc, doc, orderBy, limit } from "firebase/firestore";

export const NotificationsService = {
    // Criar notificação
    create: async (notification) => {
        const docRef = await addDoc(collection(db, 'notificacoes'), {
            ...notification,
            lida: false,
            created_at: new Date().toISOString()
        });
        return docRef.id;
    },

    // Buscar notificações do usuário
    getByUser: async (userId, limitCount = 10) => {
        const q = query(
            collection(db, 'notificacoes'),
            where('userId', '==', userId),
            orderBy('created_at', 'desc'),
            limit(limitCount)
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    },

    // Marcar como lida
    markAsRead: async (notificationId) => {
        await updateDoc(doc(db, 'notificacoes', notificationId), {
            lida: true,
            read_at: new Date().toISOString()
        });
    },

    // Marcar todas como lidas
    markAllAsRead: async (userId) => {
        const q = query(
            collection(db, 'notificacoes'),
            where('userId', '==', userId),
            where('lida', '==', false)
        );
        const snapshot = await getDocs(q);
        const promises = snapshot.docs.map(d =>
            updateDoc(doc(db, 'notificacoes', d.id), {
                lida: true,
                read_at: new Date().toISOString()
            })
        );
        await Promise.all(promises);
    },

    // Marcar como lidas por tipo/obra (limpeza de alertas resolvidos)
    markByType: async (userId, tipo, obraId = null) => {
        if (!userId || !tipo) return;
        const constraints = [
            where('userId', '==', userId),
            where('tipo', '==', tipo),
            where('lida', '==', false)
        ];
        if (obraId) constraints.push(where('obraId', '==', obraId));
        const q = query(collection(db, 'notificacoes'), ...constraints);
        const snap = await getDocs(q);
        const promises = snap.docs.map(d => updateDoc(doc(db, 'notificacoes', d.id), { lida: true, read_at: new Date().toISOString() }));
        await Promise.all(promises);
    },

    // Notificações automáticas
    checkAndNotify: async () => {
        // Verificar compras com entrega próxima (3 dias)
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

        const q = query(
            collection(db, 'compras'),
            where('status_compra', 'in', ['Comprado', 'Em Trânsito']),
            where('data_entrega_prevista', '<=', threeDaysFromNow.toISOString())
        );

        const snapshot = await getDocs(q);
        const notifications = [];

        for (const docSnap of snapshot.docs) {
            const compra = docSnap.data();
            const daysUntil = Math.ceil(
                (new Date(compra.data_entrega_prevista) - new Date()) / (1000 * 60 * 60 * 24)
            );

            if (daysUntil >= 0 && daysUntil <= 3) {
                notifications.push({
                    userId: compra.solicitante_id,
                    tipo: 'entrega_proxima',
                    titulo: 'Entrega Próxima',
                    mensagem: `${compra.descricao} - Entrega prevista em ${daysUntil} dia(s)`,
                    link: `/compras/${docSnap.id}`,
                    prioridade: daysUntil === 0 ? 'alta' : 'normal'
                });
            }
        }

        // Criar notificações
        for (const notif of notifications) {
            await NotificationsService.create(notif);
        }

        return notifications.length;
    }
};
