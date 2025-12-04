import { db } from '../../config/firebase.js';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

export const ReportsService = {
    getCompras: async (filters = {}) => {
        // Buscamos tudo e filtramos em memória para permitir múltiplos critérios.
        const snapshot = await getDocs(collection(db, 'compras'));
        let results = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));

        const {
            search = '',
            status = '',
            obra = '',
            prioridade = '',
            natureza = '',
            cc = '',
            dateStart = '',
            dateEnd = '',
            onlyDelayed = false,
            fornecedor = '',
            comprador = '',
            statusAprov = '',
            nfConferida = false,
            nf = '',
        } = filters;

        const term = search.toLowerCase();
        const startDate = dateStart ? new Date(dateStart) : null;
        const endDate = dateEnd ? new Date(dateEnd) : null;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        results = results.filter((c) => {
            if (term && !((c.descricao_compra || c.descricao || '').toLowerCase().includes(term))) return false;
            if (status && c.status_compra !== status) return false;
            if (obra && c.obraId !== obra) return false;
            if (prioridade && c.prioridade !== prioridade) return false;
            if (natureza && (c.natureza_compra || '').trim() !== natureza) return false;

            if (cc && c.centroCustoId !== cc) return false;
            if (fornecedor && c.fornecedorId !== fornecedor) return false;
            if (comprador && c.compradorId !== comprador) return false;
            if (statusAprov && (c.status_aprovacao || '') !== statusAprov) return false;
            if (nfConferida && !c.nf_conferida) return false;
            if (nf) {
                const nfField = (c.numero_nf || '').toLowerCase();
                if (!nfField.includes(nf.toLowerCase())) return false;
            }

            const dataSolic = c.data_solicitacao ? new Date(c.data_solicitacao) : null;
            if (startDate && dataSolic && dataSolic < startDate) return false;
            if (endDate && dataSolic && dataSolic > endDate) return false;

            if (onlyDelayed) {
                const entregaPrev = c.previsao_entrega
                    ? new Date(c.previsao_entrega)
                    : c.data_entrega_prevista
                        ? new Date(c.data_entrega_prevista)
                        : null;
                if (!entregaPrev || entregaPrev >= today || c.status_compra === 'Entregue' || c.status_compra === 'Recebido') {
                    return false;
                }
            }
            return true;
        });

        // Ordena por data de solicitação desc por padrão
        results.sort((a, b) => {
            const da = a.data_solicitacao || a.data_emissao || '';
            const dbVal = b.data_solicitacao || b.data_emissao || '';
            return dbVal.localeCompare(da);
        });

        return results;
    },

    updateStatus: async (id, newStatus) => {
        const ref = doc(db, 'compras', id);
        await updateDoc(ref, { status_compra: newStatus });
    },

    updateCompra: async (id, updates) => {
        const ref = doc(db, 'compras', id);
        await updateDoc(ref, updates);
    },

    deleteCompra: async (id) => {
        const ref = doc(db, 'compras', id);
        await deleteDoc(ref);
    }
};
