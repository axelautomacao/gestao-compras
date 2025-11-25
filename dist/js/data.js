// js/data.js
import { db, storage, collection, addDoc, getDocs, onSnapshot, doc, getDoc, setDoc, updateDoc, deleteDoc, query, where, writeBatch, runTransaction, orderBy, startAt, endAt, Timestamp, ref, uploadBytes, getDownloadURL, deleteObject } from './firebase-config.js';
import { state } from './state.js';
import { Utils } from './utils.js';
// import { UI } from './ui.js'; // <-- REMOVIDO!
import { logAuditoria } from './logger.js';
import { CacheManager } from './cache-manager.js'; // M4.1: Cache local 

// const $ = (id) => document.getElementById(id); // <-- REMOVIDO!

const listeners = {
    obras: null,
    centrosCusto: null,
    fornecedores: null,
    compradores: null,
    dashboardCompras: null
};

export const Data = {
    // --- Funções de Leitura e 'Ouvintes' (Listeners) ---

    getDocById: async (collectionName, id) => {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    },

    listenToCadastros: (uiRefreshCallbacks) => {
        const listen = (collectionName, cacheKey, callback) => {
            if (listeners[collectionName]) listeners[collectionName](); 
            
            // M4.1: Tentar carregar cache primeiro
            const cached = CacheManager.get(cacheKey);
            if (cached) {
                state.cache[cacheKey] = cached;
                callback();
            }
            
            const sortField = (collectionName === 'obras') ? 'nome_obra' : 'nome';
            
            const q = query(collection(db, collectionName), orderBy(sortField));

            listeners[collectionName] = onSnapshot(q, (snapshot) => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                state.cache[cacheKey] = data;
                
                // M4.1: Salvar no cache localStorage
                CacheManager.set(cacheKey, data);
                
                callback();
            }, (err) => {
                console.error(`Erro ao ouvir ${collectionName}:`, err);
                // Usa cache se existir para não quebrar UI
                const fallback = CacheManager.get(cacheKey);
                if (fallback) {
                    state.cache[cacheKey] = fallback;
                    callback();
                }
            });
        };

        // As funções de UI agora são passadas como callbacks
        listen('obras', 'obras', () => {
            uiRefreshCallbacks.renderObrasPage();
            uiRefreshCallbacks.updateDashboardObraList();
            uiRefreshCallbacks.updateRegistroObraList();
            uiRefreshCallbacks.populateContextSelector?.();
            uiRefreshCallbacks.renderRelatorioComprasPage?.();
        });
        listen('centrosCusto', 'centrosCusto', uiRefreshCallbacks.refreshCadastroLists);
        listen('fornecedores', 'fornecedores', () => { 
            uiRefreshCallbacks.refreshCadastroLists(); 
            uiRefreshCallbacks.renderRelatorioComprasPage?.();
        });
        listen('compradores', 'compradores', () => { 
            uiRefreshCallbacks.refreshCadastroLists(); 
            uiRefreshCallbacks.renderRelatorioComprasPage?.();
        });
    },

    listenToCompras: (obraId, callback) => {
        const q = query(collection(db, "compras"), where("obraId", "==", obraId));
        listeners.dashboardCompras = onSnapshot(q, (snapshot) => {
            const compras = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            callback(compras);
        }, (err) => console.error("Erro ao ouvir compras:", err));
        
        return listeners.dashboardCompras;
    },

        getDashboardGeralData: async () => {
        const obrasSnapshot = await getDocs(query(collection(db, "obras")));
        const comprasSnapshot = await getDocs(query(collection(db, "compras"), where("status_compra", "in", ["Comprado", "Recebido"])));
        
        const obras = obrasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const compras = comprasSnapshot.docs.map(doc => doc.data());
        const data = {
            kpis: { obrasAtivas: 0, orcamentoTotal: 0, comprometidoTotal: 0, percentMedioUso: 0, economiaTotal: 0, slaPontualidade: 0, leadTimeMedio: 0, atrasos: 0 },
            obrasChart: { labels: [], data: [] },
            naturezaChart: { labels: ['Mat. Inicial', 'Mat. Adicional', 'Desperdício'], data: [0, 0, 0] },
            mesesChart: { labels: [], data: [], map: new Map() }
        };

        const gastosPorObra = new Map();
        let onTime = 0, deliveries = 0, leadSum = 0, leadCount = 0;
        compras.forEach(c => {
            const gasto = gastosPorObra.get(c.obraId) || 0;
            gastosPorObra.set(c.obraId, gasto + c.valor_total);
            data.kpis.comprometidoTotal += c.valor_total;
            
            if (c.natureza_compra === 'Lista de Material inicial') data.naturezaChart.data[0] += c.valor_total;
            else if (c.natureza_compra === 'Material Adicional') data.naturezaChart.data[1] += c.valor_total;
            else if (c.natureza_compra === 'Desperdício') data.naturezaChart.data[2] += c.valor_total;

            // SLA e lead time
            if (c.data_recebimento && c.previsao_entrega) {
                deliveries++;
                const prev = new Date(c.previsao_entrega + 'T12:00:00');
                const recv = new Date(c.data_recebimento + 'T12:00:00');
                if (recv <= prev) onTime++;
            }
            if (c.data_emissao) {
                const endDate = c.data_recebimento || c.previsao_entrega;
                if (endDate) {
                    const start = new Date(c.data_emissao + 'T12:00:00');
                    const end = new Date(endDate + 'T12:00:00');
                    const diff = Math.max(0, (end - start) / (1000 * 60 * 60 * 24));
                    leadSum += diff;
                    leadCount++;
                }
            }
            // atrasos
            if (c.status_compra !== 'Recebido' && c.previsao_entrega) {
                const hoje = new Date(); hoje.setHours(0,0,0,0);
                const prev = new Date(c.previsao_entrega + 'T12:00:00');
                if (prev < hoje) data.kpis.atrasos++;
            }
            
            if (c.data_emissao) {
                const mesKey = c.data_emissao.substring(0, 7); // "YYYY-MM"
                const valorMes = data.mesesChart.map.get(mesKey) || 0;
                data.mesesChart.map.set(mesKey, valorMes + c.valor_total);
            }
        });

        obras.forEach(o => {
            if (o.status !== 'Finalizada') data.kpis.obrasAtivas++;
            data.kpis.orcamentoTotal += o.valor_orcado || 0;
            const gastoObra = gastosPorObra.get(o.id) || 0;
            const percentGasto = o.valor_orcado > 0 ? (gastoObra / o.valor_orcado) * 100 : 0;
            data.obrasChart.labels.push(o.nome_obra);
            data.obrasChart.data.push(percentGasto);
        });

        if (data.kpis.orcamentoTotal > 0) {
            data.kpis.percentMedioUso = (data.kpis.comprometidoTotal / data.kpis.orcamentoTotal) * 100;
            data.kpis.economiaTotal = Math.max(0, data.kpis.orcamentoTotal - data.kpis.comprometidoTotal);
        }
        if (deliveries > 0) data.kpis.slaPontualidade = (onTime / deliveries) * 100;
        if (leadCount > 0) data.kpis.leadTimeMedio = leadSum / leadCount;

        const mesesOrdenados = Array.from(data.mesesChart.map.keys()).sort();
        data.mesesChart.labels = mesesOrdenados;
        data.mesesChart.data = mesesOrdenados.map(m => data.mesesChart.map.get(m));

        return data;
    },

    getResumoOrcamento: async (obraId, compraIdParaExcluir = null) => {
        const obraDoc = await getDoc(doc(db, "obras", obraId));
        if (!obraDoc.exists()) throw new Error("Obra não encontrada.");
        
        const obra = obraDoc.data();
        const orcado = obra.valor_orcado || 0;
        const tolerancia_percentual = obra.tolerancia_percentual || 0;
        const tolerancia_valor = orcado * tolerancia_percentual;
        const limite_real = orcado + tolerancia_valor;

        let q = query(collection(db, "compras"), where("obraId", "==", obraId));
        const snapshot = await getDocs(q);
        
        let comprometido = 0;
        let em_cotacao = 0;
        
        snapshot.docs.forEach(doc => {
            if (doc.id === compraIdParaExcluir) return; 
            
            const compra = doc.data();
            // ✅ M4.5: Apenas conta se foi aprovado (ou não tem estouro)
            const deveContar = 
                (compra.status_compra === 'Comprado' || compra.status_compra === 'Recebido')
                && (compra.status_aprovacao === 'Aprovado' || !compra.estouro_orcamento);
            
            if (deveContar) {
                comprometido += compra.valor_total || 0;
            } else if (compra.status_compra === 'Em cotação') {
                em_cotacao += compra.valor_total || 0;
            }
        });
        
        return { orcado, tolerancia_percentual: tolerancia_percentual * 100, tolerancia_valor, limite_real, comprometido, em_cotacao };
    },

    getComprasByFornecedor: async (fornecedorId) => {
        const q = query(collection(db, "compras"), where("fornecedorId", "==", fornecedorId));
        const snapshot = await getDocs(q);
        return snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a, b) => (b.data_emissao || '').localeCompare(a.data_emissao || ''));
    },
    
    getPdfUrl: async (storagePath) => {
        const fileRef = ref(storage, storagePath);
        return await getDownloadURL(fileRef);
    },

    // --- Funções de Escrita (Create, Update, Delete) ---

    saveObra: async (form) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const fotoRcFile = formData.get('foto_rc');
        data.pdf_nf = formData.get('pdf_nf');
        data.pdf_cte = formData.get('pdf_cte');
        
        const dados = {
            nome_obra: data.nome_obra,
            numero_os: data.numero_os,
            empresa: data.empresa || null,
            cliente: data.cliente || null,
            descricao_obra: data.descricao_obra || null,
            local_realizacao: data.local_realizacao || null,
            horas_previstas: data.horas_previstas ? parseFloat(data.horas_previstas) : null,
            horas_extras_previstas: data.horas_extras_previstas ? parseFloat(data.horas_extras_previstas) : null,
            valor_deslocamento_km: data.valor_deslocamento_km ? Utils.parseCurrency(data.valor_deslocamento_km) : null,
            qtd_refeicoes: data.qtd_refeicoes ? parseInt(data.qtd_refeicoes, 10) : null,
            qtd_hospedagens: data.qtd_hospedagens ? parseInt(data.qtd_hospedagens, 10) : null,
            is_obra_filha: data.is_obra_filha === 'on',
            obra_pai_os: data.is_obra_filha === 'on' ? (data.obra_pai_os || null) : null,
            data_prevista_inicio: data.data_prevista_inicio || null,
            data_prevista_fim: data.data_prevista_fim || null,
            valor_orcado: Utils.parseCurrency(data.valor_orcado),
            tolerancia_percentual: parseFloat(data.tolerancia_percentual) > 0 ? (parseFloat(data.tolerancia_percentual) / 100) : 0,
            status: "Não Iniciada",
            criado_em: Timestamp.now()
        };
        
        const q = query(collection(db, "obras"), where("numero_os", "==", dados.numero_os));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) throw new Error(`A O.S. "${dados.numero_os}" já está em uso.`);
        
        const docRef = await addDoc(collection(db, "obras"), dados);
        await logAuditoria('create', { colecao: 'obras', id: docRef.id, ...dados }, state.currentUser);
        return { ...dados, id: docRef.id };
    },

    saveGenericForm: async (form, dbTable) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const dados = { ...data };
        if (dados.cnpj) {
            // M7.1: Validar CNPJ se presente
            if (!Utils.validateCNPJ(dados.cnpj)) {
                throw new Error("CNPJ inválido. Verifique os dígitos.");
            }
            dados.cnpj = dados.cnpj.replace(/\D/g, ''); 
        }
        
        dados.nome = dados.nome.trim();
        if (!dados.nome) throw new Error("O nome é obrigatório.");

        const docRef = await addDoc(collection(db, dbTable), dados);
        await logAuditoria('create', { colecao: dbTable, id: docRef.id, ...dados }, state.currentUser);
        
        // M4.1: Invalidar cache para recarregar
        if (dbTable === 'fornecedores') CacheManager.clear('fornecedores');
        if (dbTable === 'centrosCusto') CacheManager.clear('centrosCusto');
        if (dbTable === 'compradores') CacheManager.clear('compradores');
        
        return { ...dados, id: docRef.id };
    },

                _validarCompra: (data) => {
        if (!data.obraId) throw new Error("Obra obrigatoria.");
        if (!data.centroCustoId) throw new Error("Centro de Custo obrigatorio.");
        if (!data.compradorId) throw new Error("Comprador obrigatorio.");
        if (!data.solicitante || !String(data.solicitante).trim()) throw new Error("Solicitante obrigatorio.");
        const valor = Utils.parseCurrency(data.valor_total || 0);
        if (!valor || valor <= 0) throw new Error("Valor total da compra obrigatório.");
        const isRetirada = data.retirada_estoque === 'on';
        const numero_nf_val = data.numero_nf ? String(data.numero_nf).trim() : '';
        if (!isRetirada && !numero_nf_val) throw new Error("Numero da NF-e obrigatorio.");
        if (!data.data_emissao) throw new Error("Data de Emissao obrigatoria.");
    },

    _uploadFile: async (file, path, validator) => {
        if (!file || file.size === 0) return null;
        if (validator) validator(file);
        const fileRef = ref(storage, path);
        await uploadBytes(fileRef, file);
        return path;
    },
    
    _uploadPdf: async (file, path) => Data._uploadFile(file, path, Utils.validatePdf),

    saveCompra: async (form) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const fotoRcFile = formData.get('foto_rc');
        
        Data._validarCompra(data);
        
        const valorTotal = Utils.parseCurrency(data.valor_total);
        const descricaoCompra = (data.descricao_compra || '').trim() || null;
        
        if (!state.currentOrcamentoResumo) throw new Error("Resumo do orçamento não carregado. Selecione a obra novamente.");
        const resumo = state.currentOrcamentoResumo;
        
        let novoComprometido = resumo.comprometido;
        if (data.status_compra === 'Comprado' || data.status_compra === 'Recebido') {
            novoComprometido += valorTotal;
        }
        
        const estouro = novoComprometido > resumo.limite_real;
        if (estouro && !data.justificativa_estouro_orcamento) {
            // Lança um erro especial para o app.js tratar
            throw new Error("JUSTIFICATIVA_NECESSARIA");
        }
        
        // Normaliza o número da NF (pode ser undefined quando retirada_estoque)
        const numero_nf_raw = data.numero_nf;
        const numero_nf_trim = numero_nf_raw ? String(numero_nf_raw).trim() : '';

        const nfPath = (data.pdf_nf && data.pdf_nf.size) ? await Data._uploadPdf(data.pdf_nf, `compras/${numero_nf_trim || Date.now()}_${data.obraId}_NF.pdf`) : null;
        const ctePath = (data.pdf_cte && data.pdf_cte.size) ? await Data._uploadPdf(data.pdf_cte, `compras/${numero_nf_trim || Date.now()}_${data.obraId}_CTE.pdf`) : null;
        const rcPath = (data.retirada_estoque === 'on' && fotoRcFile && fotoRcFile.size)
            ? await Data._uploadFile(fotoRcFile, `compras/${numero_nf_trim || Date.now()}_${data.obraId}_RC${Utils.getFileExtension(fotoRcFile.name) || '.jpg'}`, Utils.validateImage)
            : null;

        const dadosCompra = {
            obraId: data.obraId,
            centroCustoId: data.centroCustoId,
            fornecedorId: data.fornecedorId || null,
            compradorId: data.compradorId,
            numero_nf: numero_nf_trim || null,
            descricao_compra: descricaoCompra,
            solicitante: data.solicitante?.trim() || null,
            data_emissao: data.data_emissao,
            valor_total: valorTotal,
            natureza_compra: data.natureza_compra,
            previsao_entrega: data.previsao_entrega || null,
            status_compra: data.status_compra,
            data_recebimento: data.data_recebimento || null,
            pdf_nf_path: nfPath,
            pdf_cte_path: ctePath,
            foto_rc_path: rcPath,
            criado_em: Timestamp.now(),
            criado_por: state.currentUser.email,
            estouro_orcamento: estouro,
            justificativa_estouro_orcamento: data.justificativa_estouro_orcamento || null,
            status_aprovacao: estouro ? 'Pendente' : 'Aprovado',
            nf_conferida: false,
            nf_conferida_por: null,
            nf_conferida_em: null
        };
        
        const docRef = await addDoc(collection(db, "compras"), dadosCompra);
        await logAuditoria('create', { colecao: 'compras', id: docRef.id, ...dadosCompra }, state.currentUser);
        return { ...dadosCompra, id: docRef.id };
    },

    changeObraStatus: async (obraId, novoStatus) => {
        const obraRef = doc(db, "obras", obraId);
        await updateDoc(obraRef, { status: novoStatus });
        await logAuditoria('update', { colecao: 'obras', id: obraId, alteracao: { status: novoStatus } }, state.currentUser);
    },

    updateObra: async (form) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const id = data.id;
        const dadosUpdate = {
            nome_obra: data.nome_obra,
            numero_os: data.numero_os,
            empresa: data.empresa || null,
            cliente: data.cliente || null,
            descricao_obra: data.descricao_obra || null,
            local_realizacao: data.local_realizacao || null,
            horas_previstas: data.horas_previstas ? parseFloat(data.horas_previstas) : null,
            horas_extras_previstas: data.horas_extras_previstas ? parseFloat(data.horas_extras_previstas) : null,
            valor_deslocamento_km: data.valor_deslocamento_km ? Utils.parseCurrency(data.valor_deslocamento_km) : null,
            qtd_refeicoes: data.qtd_refeicoes ? parseInt(data.qtd_refeicoes, 10) : null,
            qtd_hospedagens: data.qtd_hospedagens ? parseInt(data.qtd_hospedagens, 10) : null,
            is_obra_filha: data.is_obra_filha === 'on',
            obra_pai_os: data.is_obra_filha === 'on' ? (data.obra_pai_os || null) : null,
            data_prevista_inicio: data.data_prevista_inicio || null,
            data_prevista_fim: data.data_prevista_fim || null
        };
        
        if (state.currentUser.role === 'diretor') {
            dadosUpdate.valor_orcado = Utils.parseCurrency(data.valor_orcado);
            dadosUpdate.tolerancia_percentual = parseFloat(data.tolerancia_percentual) > 0 ? (parseFloat(data.tolerancia_percentual) / 100) : 0;
        }
        
        const obraRef = doc(db, "obras", id);
        await updateDoc(obraRef, dadosUpdate);
        await logAuditoria('update', { colecao: 'obras', id: id, ...dadosUpdate }, state.currentUser);
    },

    deleteObra: async (obraId) => {
        // A lógica de confirmação foi movida para app.js
        // try {
            const q = query(collection(db, "compras"), where("obraId", "==", obraId));
            const snapshot = await getDocs(q);
            if (!snapshot.empty) {
                // ✅ M4.4: Delete associated PDFs before throwing error
                for (const compraDoc of snapshot.docs) {
                    const compra = compraDoc.data();
                    if (compra.pdf_nf_path) {
                        try {
                            await deleteObject(ref(storage, compra.pdf_nf_path));
                        } catch (e) {
                            console.warn("Erro ao deletar NF PDF:", e);
                        }
                    }
                    if (compra.pdf_cte_path) {
                        try {
                            await deleteObject(ref(storage, compra.pdf_cte_path));
                        } catch (e) {
                            console.warn("Erro ao deletar CTE PDF:", e);
                        }
                    }
                    if (compra.foto_rc_path) {
                        try {
                            await deleteObject(ref(storage, compra.foto_rc_path));
                        } catch (e) {
                            console.warn("Erro ao deletar foto RC:", e);
                        }
                    }
                }
                
                throw new Error(`Não é possível excluir. Existem ${snapshot.size} compras vinculadas a esta obra.`);
            }
            
            const obra = state.cache.obras.find(o => o.id === obraId);
            await deleteDoc(doc(db, "obras", obraId));
            await logAuditoria('delete', { colecao: 'obras', id: obraId, nome: obra.nome_obra }, state.currentUser);
    },

    updateCompra: async (form) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const id = data.id;
        const descricaoCompra = (data.descricao_compra || '').trim() || null;
        
        // try { // <-- Removido, o app.js fará o try/catch
            Data._validarCompra(data);

            if (!state.currentOrcamentoResumo) {
                throw new Error("Resumo do orçamento não foi carregado. Tente reabrir o modal.");
            }
            const resumo = state.currentOrcamentoResumo;
            const valorCompra = Utils.parseCurrency(data.valor_total);
            const statusCompra = data.status_compra;
            
            let novoComprometido = resumo.comprometido;
            if (statusCompra === 'Comprado' || statusCompra === 'Recebido') {
                novoComprometido += valorCompra;
            }
            
            let conferidaEmTimestamp = null;
            const isConferida = data.nf_conferida === 'on';
            
            if (isConferida) {
                const existingData = await Data.getDocById("compras", id);
                const emValue = existingData.nf_conferida_em;
                conferidaEmTimestamp = emValue ? emValue : Timestamp.now();
            }

            const dadosUpdate = {
                obraId: data.obraId, centroCustoId: data.centroCustoId, fornecedorId: data.fornecedorId || null, compradorId: data.compradorId,
                numero_nf: data.numero_nf?.trim() || null,
                descricao_compra: descricaoCompra,
                solicitante: data.solicitante?.trim() || null,
                data_emissao: data.data_emissao,
                valor_total: valorCompra,
                natureza_compra: data.natureza_compra,
                previsao_entrega: data.previsao_entrega || null,
                status_compra: statusCompra,
                data_recebimento: data.data_recebimento || null,
                justificativa_estouro_orcamento: data.justificativa_estouro_orcamento || null,
                estouro_orcamento: false,
                status_aprovacao: data.status_aprovacao,
                
                nf_conferida: isConferida,
                nf_conferida_por: isConferida ? state.currentUser.email : null,
                nf_conferida_em: conferidaEmTimestamp
            };

            if (novoComprometido > resumo.limite_real) {
                if (!dadosUpdate.justificativa_estouro_orcamento) {
                    // Lança um erro especial para o app.js tratar
                    throw new Error("JUSTIFICATIVA_NECESSARIA");
                }
                dadosUpdate.estouro_orcamento = true;
                if (dadosUpdate.status_aprovacao === 'Aprovado') {
                    dadosUpdate.status_aprovacao = "Pendente";
                }
            }

            await updateDoc(doc(db, "compras", id), dadosUpdate);
            await logAuditoria('update', { colecao: 'compras', id: id, ...dadosUpdate }, state.currentUser);
    },
    
    deleteCompra: async (compraId) => {
        // A lógica de confirmação foi movida para app.js
        // try {
            const compra = await Data.getDocById("compras", compraId);
            if (!compra) throw new Error("Compra não encontrada para exclusão.");
            
            if (compra.pdf_nf_path) await deleteObject(ref(storage, compra.pdf_nf_path));
            if (compra.pdf_cte_path) await deleteObject(ref(storage, compra.pdf_cte_path));
            if (compra.foto_rc_path) await deleteObject(ref(storage, compra.foto_rc_path));
            
            await deleteDoc(doc(db, "compras", compraId));
            await logAuditoria('delete', { colecao: 'compras', id: compraId, numero_nf: compra.numero_nf, obraId: compra.obraId }, state.currentUser);
    },

    updateGeneric: async (form, collectionName) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const id = data.id;
        delete data.id;
        
        if (data.cnpj) data.cnpj = data.cnpj.replace(/\D/g, '');
        if (data.numero_nf === '' || data.numero_nf === undefined || data.numero_nf === null) {
            data.numero_nf = null;
        }
        await updateDoc(doc(db, collectionName, id), data);
        await logAuditoria('update', { colecao: collectionName, id: id, ...data }, state.currentUser);
    },
    
    deleteGeneric: async (id, collectionName, checkCollection, checkField) => {
        // A lógica de confirmação foi movida para app.js
        // try {
            const q = query(collection(db, checkCollection), where(checkField, "==", id));
            const snapshot = await getDocs(q);
            if (!snapshot.empty) {
                throw new Error(`Não é possível excluir. Existem ${snapshot.size} compras vinculadas a este item.`);
            }
            
            const item = state.cache[collectionName].find(i => i.id === id);
            await deleteDoc(doc(db, collectionName, id));
            await logAuditoria('delete', { colecao: collectionName, id: id, nome: item.nome }, state.currentUser);
    },

    // Busca Compras para Relatório
    findCompras: async (filters) => {
        const sortMap = { 'obra': 'obraId', 'nf': 'numero_nf', 'status': 'status_compra', 'recebimento': 'data_recebimento', 'emissao': 'data_emissao', 'comprador': 'compradorId', 'valor': 'valor_total' };
        const { dateStart, dateEnd, status, natureza, obras, fornecedores, compradores, searchText, sortCol, sortDir } = filters;
        const constraints = [];

        if (dateStart) constraints.push(where("data_emissao", ">=", dateStart));
        if (dateEnd) constraints.push(where("data_emissao", "<=", dateEnd));
        if (status && status !== 'Atrasado') constraints.push(where("status_compra", "==", status));
        if (natureza) constraints.push(where("natureza_compra", "==", natureza));

        const q = query(collection(db, "compras"), ...constraints);
        const snapshot = await getDocs(q);
        let compras = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (obras.length > 0) {
            compras = compras.filter(c => obras.includes(c.obraId));
        }
        if (fornecedores.length > 0) {
            compras = compras.filter(c => fornecedores.includes(c.fornecedorId));
        }
        if (compradores.length > 0) {
            compras = compras.filter(c => compradores.includes(c.compradorId));
        }

        if (searchText) {
            const term = searchText.toLowerCase();
            const fornMap = new Map(state.cache.fornecedores.map(f => [f.id, (f.nome || '').toLowerCase()]));
            compras = compras.filter(c => 
                (c.numero_nf || '').toLowerCase().includes(term) || 
                (fornMap.get(c.fornecedorId) || '').includes(term)
            );
        }

        if (status === 'Atrasado') {
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);
            compras = compras.filter(c => {
                if (c.status_compra === 'Recebido') return false;
                if (c.previsao_entrega) {
                    const previsao = new Date(c.previsao_entrega + 'T12:00:00');
                    return previsao < hoje;
                }
                return false;
            });
        }

        const sortField = sortMap[sortCol] || 'data_emissao';
        const direction = sortDir === 'asc' ? 1 : -1;
        compras.sort((a, b) => {
            const av = a[sortField];
            const bv = b[sortField];
            if (typeof av === 'number' && typeof bv === 'number') {
                return (av - bv) * direction;
            }
            const aStr = (av || '').toString();
            const bStr = (bv || '').toString();
            return aStr.localeCompare(bStr) * direction;
        });

        return compras; // Retorna os dados puros!
    },

    updateCompraStatus: async (id, novoStatus) => {
        await updateDoc(doc(db, "compras", id), { status_compra: novoStatus });
        await logAuditoria('update', { colecao: 'compras', id, status_compra: novoStatus }, state.currentUser);
    },
    
        exportCSV: async () => {
        const obraId = state.currentObraId;
        if (!obraId) throw new Error("Selecione uma obra primeiro.");
        const obra = state.cache.obras.find(o => o.id === obraId);
        const q = query(collection(db, "compras"), where("obraId", "==", obraId));
        const snapshot = await getDocs(q);
        const compras = snapshot.docs.map(doc => doc.data());
        if (compras.length === 0) throw new Error("Nenhuma compra para exportar.");
        const ccMap = new Map(state.cache.centrosCusto.map(cc => [cc.id, cc.nome]));
        const compradorMap = new Map(state.cache.compradores.map(c => [c.id, c.nome]));
        const fornMap = new Map(state.cache.fornecedores.map(f => [f.id, f.nome]));
        let csvContent = "data:text/csv;charset=utf-8,";
        const header = ["Obra", "OS", "NF-e", "Valor", "Data Emissao", "Status", "Data Recebimento", "Prev. Entrega", "Natureza", "Centro Custo", "Comprador", "Fornecedor", "Justificativa Estouro", "Status Aprovacao"];
        csvContent += header.join(";") + "\r\n";
        compras.forEach(c => {
            const row = [
                obra.nome_obra,
                `"${obra.numero_os}"`,
                `"${c.numero_nf}"`,
                (c.valor_total || 0).toString().replace(".", ","),
                Utils.fmtBR(c.data_emissao),
                c.status_compra,
                Utils.fmtBR(c.data_recebimento),
                Utils.fmtBR(c.previsao_entrega),
                c.natureza_compra,
                ccMap.get(c.centroCustoId) || 'N/D',
                compradorMap.get(c.compradorId) || 'N/D',
                fornMap.get(c.fornecedorId) || 'N/D',
                "",
                c.status_aprovacao
            ];
            csvContent += row.join(";") + "\r\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `compras_${obra.numero_os}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    getAlertSummary: async () => {
        const snapshot = await getDocs(query(collection(db, "compras")));
        const compras = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const hoje = new Date();
        hoje.setHours(0,0,0,0);
        const result = { atrasados: [], sem_previsao: [], pendente_aprovacao: [], cotacao: [] };
        compras.forEach(c => {
            if (c.status_compra !== "Recebido" && c.previsao_entrega) {
                const prev = new Date(c.previsao_entrega + "T12:00:00");
                if (prev < hoje) result.atrasados.push(c);
            }
            if (!c.previsao_entrega) result.sem_previsao.push(c);
            if (c.status_aprovacao === "Pendente") result.pendente_aprovacao.push(c);
            if (c.status_compra === "Em cotacao" || c.status_compra === "Em cotação") {
                if (c.data_emissao) {
                    const emiss = new Date(c.data_emissao + "T12:00:00");
                    const diffDays = (hoje - emiss) / (1000*60*60*24);
                    if (diffDays >= 7) result.cotacao.push(c);
                } else {
                    result.cotacao.push(c);
                }
            }
        });
        return {
            counts: {
                atrasados: result.atrasados.length,
                sem_previsao: result.sem_previsao.length,
                pendente_aprovacao: result.pendente_aprovacao.length,
                cotacao: result.cotacao.length
            },
            items: result
        };
    }
    ,
    getUserAuditLog: async (userId, max = 50) => {
        // Retorna os logs do Firestore para um usuário (mais recentes primeiro)
        const q = query(collection(db, 'logs'), where('userId', '==', userId), orderBy('timestamp', 'desc'));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        return docs.slice(0, max);
    }
};

