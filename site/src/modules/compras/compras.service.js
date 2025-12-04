import { db, storage } from '../../config/firebase.js';
import { collection, addDoc, updateDoc, doc, query, where, getDocs, getDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const getObraOrcamento = async (obraId) => {
    if (!obraId) return { limiteReal: 0, toleranciaPercentual: 0, orcamento: 0 };
    const snap = await getDoc(doc(db, 'obras', obraId));
    if (!snap.exists()) return { limiteReal: 0, toleranciaPercentual: 0, orcamento: 0 };
    const data = snap.data();
    const orcamento = Number(data.valor_orcado || data.orcamento || 0);
    const toleranciaPercentual = Number(data.tolerancia_percentual || 0);
    const limiteReal = orcamento + (orcamento * toleranciaPercentual);
    return { limiteReal, toleranciaPercentual, orcamento };
};

const evaluateBudget = async (obraId, valorTotal, justificativa) => {
    const { limiteReal } = await getObraOrcamento(obraId);
    const estourou = limiteReal > 0 && valorTotal > limiteReal;
    if (estourou && !justificativa) {
        const err = new Error('JUSTIFICATIVA_NECESSARIA');
        err.code = 'JUSTIFICATIVA_NECESSARIA';
        throw err;
    }
    return {
        estouro_orcamento: estourou,
        status_aprovacao: estourou ? 'Pendente' : 'Aprovado',
    };
};

export const ComprasService = {
    checkDuplicidade: async (obraId, itemNome) => {
        const q = query(
            collection(db, 'compras'),
            where('obraId', '==', obraId),
            where('status_compra', 'in', ['Pendente', 'Em Cotação'])
        );
        const snapshot = await getDocs(q);
        const termo = itemNome.toLowerCase();
        return snapshot.docs.some(d => {
            const data = d.data();
            const desc = (data.descricao_compra || data.descricao || '').toLowerCase();
            const itens = data.itens || [];
            return desc.includes(termo) || itens.some(i => (i.nome || '').toLowerCase().includes(termo));
        });
    },

    uploadArquivo: (file, path, onProgress) => {
        return new Promise((resolve, reject) => {
            const storageRef = ref(storage, path);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (onProgress) onProgress(progress);
                },
                (error) => reject(error),
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    },

    salvarCompra: async (compraData) => {
        const valorTotal = Number(compraData.valor_total || 0);
        const justificativa = compraData.justificativa_estouro_orcamento || compraData.justificativa || '';
        const budgetEval = await evaluateBudget(compraData.obraId, valorTotal, justificativa);

        const payload = {
            ...compraData,
            descricao_compra: compraData.descricao_compra || compraData.descricao || '',
            valor_total: valorTotal,
            justificativa_estouro_orcamento: justificativa || null,
            estouro_orcamento: budgetEval.estouro_orcamento,
            status_aprovacao: compraData.status_aprovacao || budgetEval.status_aprovacao,
            data_solicitacao: Timestamp.now().toDate().toISOString(),
            status_compra: compraData.status_compra || 'Pendente',
            criado_em: Timestamp.now(),
            criado_por: compraData.criado_por || null,
            ultima_atualizacao: new Date().toISOString(),
            atualizado_por: compraData.criado_por || null
        };

        if (payload.nf_conferida) {
            payload.nf_conferida_em = payload.nf_conferida_em || Timestamp.now();
            payload.nf_conferida_por = payload.nf_conferida_por || payload.criado_por || null;
        }

        const docRef = await addDoc(collection(db, 'compras'), payload);
        return docRef.id;
    },

    atualizarCompra: async (id, updates) => {
        const valorTotal = Number(updates.valor_total || 0);
        const justificativa = updates.justificativa_estouro_orcamento || updates.justificativa || '';

        // Se houver mudança de valor ou obra, reavaliar orçamento
        let budgetEval = { estouro_orcamento: false, status_aprovacao: updates.status_aprovacao };
        if (updates.valor_total || updates.obraId) {
            budgetEval = await evaluateBudget(updates.obraId, valorTotal, justificativa);
        }

        const docRef = doc(db, 'compras', id);
        await updateDoc(docRef, {
            ...updates,
            descricao_compra: updates.descricao_compra || updates.descricao || '',
            valor_total: valorTotal,
            justificativa_estouro_orcamento: justificativa || null,
            estouro_orcamento: budgetEval.estouro_orcamento,
            status_aprovacao: updates.status_aprovacao || budgetEval.status_aprovacao,
            nf_conferida_em: updates.nf_conferida ? (updates.nf_conferida_em || Timestamp.now()) : null,
            nf_conferida_por: updates.nf_conferida ? (updates.nf_conferida_por || updates.criado_por || null) : null,
            ultima_atualizacao: new Date().toISOString(),
            atualizado_por: updates.atualizado_por || updates.criado_por || null
        });
    },

    getCompra: async (id) => {
        const snap = await getDoc(doc(db, 'compras', id));
        return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    }
};
