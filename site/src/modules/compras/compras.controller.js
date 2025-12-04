import { ComprasService } from './compras.service.js';
import { ComprasView } from './compras.view.js';
import { Layout } from '../../ui/layout.js';
import { Components } from '../../ui/components.js';
import { Router } from '../../core/router.js';
import { Store } from '../../core/store.js';
import { Utils } from '../../utils/formatters.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import { CentrosService } from '../cadastros/centros.service.js';
import { CompradoresService } from '../cadastros/compradores.service.js';
import { FornecedoresService } from '../cadastros/fornecedores.service.js';

export const ComprasController = {
    init: async () => {
        Layout.render(Components.createLoader());
        try {
            const [obrasSnap, fornecedores, centros, compradores] = await Promise.all([
                getDocs(collection(db, 'obras')),
                FornecedoresService.list(),
                CentrosService.list(),
                CompradoresService.list()
            ]);
            const obras = obrasSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            Layout.render(ComprasView.renderForm({
                obras,
                fornecedores,
                centros,
                compradores
            }));
            ComprasController.bindEvents();
        } catch (error) {
            console.error(error);
            Layout.render(`<div class="text-red-500">Erro ao carregar formulário: ${error.message}</div>`);
        }
    },

    initEdit: async (id) => {
        Layout.render(Components.createLoader());
        try {
            const [obrasSnap, fornecedores, centros, compradores, compra] = await Promise.all([
                getDocs(collection(db, 'obras')),
                FornecedoresService.list(),
                CentrosService.list(),
                CompradoresService.list(),
                ComprasService.getCompra(id),
            ]);
            const obras = obrasSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            Layout.render(ComprasView.renderForm({
                obras,
                fornecedores,
                centros,
                compradores,
                compra
            }));
            ComprasController.bindEvents(id, compra, fornecedores);
        } catch (error) {
            console.error(error);
            Layout.render(`<div class="text-red-500">Erro ao carregar compra: ${error.message}</div>`);
        }
    },

    bindEvents: (compraId = null, compra = null, fornecedores = []) => {
        const form = document.getElementById('form-compra');
        const fileInput = document.getElementById('file-upload');
        const nfInput = document.getElementById('nf-upload');
        const cteInput = document.getElementById('cte-upload');
        const rcInput = document.getElementById('rc-upload');
        const dropZone = document.getElementById('drop-zone');
        const descInput = document.getElementById('descricao_compra');
        const obraSelect = document.getElementById('obraId');
        const statusSelect = document.getElementById('status_compra');
        const previsaoInput = document.getElementById('previsao_entrega');
        const recebimentoInput = document.getElementById('data_recebimento');
        const emissaoInput = document.getElementById('data_emissao');
        const retiradaCheckbox = document.getElementById('retirada_estoque');
        const fornecedorSelect = document.getElementById('fornecedorId');
        let filesToUpload = [];
        let previousFornecedor = null;
        const valorInput = document.getElementById('valor_total');
        const cnpjInput = document.getElementById('cnpj_fornecedor');
        let currentStep = 1;

        const stepEls = document.querySelectorAll('.wizard-step');
        const stepIndicators = document.querySelectorAll('.step-indicator');
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        const btnSubmit = document.getElementById('btn-submit');

        const updateStep = (step) => {
            currentStep = step;
            stepEls.forEach(el => el.classList.toggle('hidden', Number(el.dataset.step) !== step));
            stepIndicators.forEach(ind => {
                const active = Number(ind.dataset.step) === step;
                ind.classList.toggle('text-text', active);
                ind.classList.toggle('text-text-muted', !active);
                ind.classList.toggle('font-semibold', active);
            });
            if (btnPrev) btnPrev.classList.toggle('hidden', step === 1);
            if (btnNext) btnNext.classList.toggle('hidden', step === 3);
            if (btnSubmit) btnSubmit.classList.toggle('hidden', step !== 3);
        };

        btnPrev?.addEventListener('click', () => updateStep(Math.max(1, currentStep - 1)));
        btnNext?.addEventListener('click', () => updateStep(Math.min(3, currentStep + 1)));
        updateStep(currentStep);

        dropZone?.addEventListener('click', () => fileInput?.click());
        fileInput?.addEventListener('change', (e) => handleFiles(e.target.files));

        const handleFiles = (files) => {
            filesToUpload = [...filesToUpload, ...Array.from(files)];
            renderFileList();
        };

        const renderFileList = () => {
            const list = document.getElementById('file-list');
            if (!list) return;
            list.innerHTML = filesToUpload.map((f, i) => `
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${f.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80 px-2 py-1 text-xs font-semibold border border-transparent rounded" data-remove-file="${i}">X</button>
                </div>
            `).join('');

            list.querySelectorAll('[data-remove-file]')?.forEach(btn => {
                btn.addEventListener('click', (ev) => {
                    const idx = Number(ev.currentTarget.dataset.removeFile);
                    if (!Number.isNaN(idx)) {
                        filesToUpload.splice(idx, 1);
                        renderFileList();
                    }
                });
            });
        };

        form.addEventListener('remove-file', (e) => {
            filesToUpload.splice(e.detail, 1);
            renderFileList();
        });

        descInput?.addEventListener('blur', async () => {
            const obraId = obraSelect.value;
            const text = descInput.value;
            if (obraId && text.length > 3) {
                const isDup = await ComprasService.checkDuplicidade(obraId, text);
                if (isDup) {
                    Components.createToast('Atenção: já existe um pedido similar para esta obra!', 'warning');
                }
            }
        });

        // Máscara de moeda
        valorInput?.addEventListener('input', (e) => {
            e.target.value = Utils.formatCurrencyInput(e.target.value);
        });

        // Máscara/validação de CNPJ (opcional)
        cnpjInput?.addEventListener('input', (e) => {
            e.target.value = Utils.formatCnpjInput(e.target.value);
        });
        cnpjInput?.addEventListener('blur', (e) => {
            const val = e.target.value;
            if (val && !Utils.validateCNPJ(val)) {
                Components.createToast('CNPJ inválido.', 'warning');
            }
        });

        // Validar orçamento ao perder foco
        valorInput?.addEventListener('blur', async () => {
            const obraId = obraSelect?.value;
            const valorStr = valorInput.value;
            const valorNum = Utils.parseCurrency(valorStr);

            const justContainer = document.getElementById('justificativa-container');
            const justInput = document.getElementById('justificativa');

            if (obraId && valorNum > 0) {
                try {
                    const obraSnap = await getDocs(query(collection(db, 'obras'), where('__name__', '==', obraId)));
                    if (!obraSnap.empty) {
                        const obra = obraSnap.docs[0].data();
                        const orcamento = Number(obra.valor_orcado || obra.orcamento || 0);
                        const tolerancia = Number(obra.tolerancia_percentual || 0);
                        const limiteReal = orcamento + (orcamento * tolerancia);

                        if (limiteReal > 0 && valorNum > limiteReal) {
                            justContainer.classList.remove('hidden');
                            justInput.required = true;
                            Components.createToast('Valor ultrapassa o orçamento da obra! Justificativa necessária.', 'warning');
                        } else {
                            justContainer.classList.add('hidden');
                            justInput.required = false;
                        }
                    }
                } catch (error) {
                    console.error('Erro ao validar orçamento:', error);
                }
            }
        });

        const syncStockDates = () => {
            if (!retiradaCheckbox?.checked) return;
            const emis = emissaoInput?.value;
            if (emis) {
                if (previsaoInput) previsaoInput.value = emis;
                if (recebimentoInput) recebimentoInput.value = emis;
            }
        };

        const toggleRetiradaEstoque = (checked) => {
            const today = new Date().toISOString().split('T')[0];
            if (checked) {
                if (statusSelect) statusSelect.value = 'Recebido';
                if (emissaoInput && !emissaoInput.value) emissaoInput.value = today;
                if (previsaoInput && !previsaoInput.value) previsaoInput.value = emissaoInput?.value || today;
                if (recebimentoInput && !recebimentoInput.value) recebimentoInput.value = emissaoInput?.value || today;

                if (fornecedorSelect) {
                    if (!previousFornecedor) previousFornecedor = fornecedorSelect.value;
                    const estoqueOption = Array.from(fornecedorSelect.options).find(opt => {
                        const label = (opt.dataset?.name || opt.textContent || '').toLowerCase();
                        return label.includes('estoque axel');
                    });
                    if (estoqueOption) {
                        fornecedorSelect.value = estoqueOption.value;
                    }
                    fornecedorSelect.disabled = true;
                }
            } else {
                if (statusSelect && statusSelect.value === 'Recebido' && !compra) {
                    statusSelect.value = 'Pendente';
                }
                if (fornecedorSelect) {
                    fornecedorSelect.disabled = false;
                    if (previousFornecedor) fornecedorSelect.value = previousFornecedor;
                }
            }
        };

        const labelPreview = (inputEl, labelId) => {
            const label = document.getElementById(labelId);
            if (!label || !inputEl?.files?.length) return;
            label.textContent = inputEl.files[0].name;
        };
        nfInput?.addEventListener('change', () => labelPreview(nfInput, 'nf-upload-label'));
        cteInput?.addEventListener('change', () => labelPreview(cteInput, 'cte-upload-label'));
        rcInput?.addEventListener('change', () => labelPreview(rcInput, 'rc-upload-label'));

        if (compra) {
            form.obraId.value = compra.obraId || '';
            if (form.prioridade) form.prioridade.value = compra.prioridade || 'Normal';
            form.descricao_compra.value = compra.descricao_compra || compra.descricao || '';
            form.valor_total.value = Utils.formatCurrencyInput(compra.valor_total || 0);
            if (form.fornecedorId) form.fornecedorId.value = compra.fornecedorId || '';
            const normalizeDate = (val) => {
                if (!val) return '';
                if (val.toDate) {
                    const d = val.toDate();
                    return !Number.isNaN(d) ? d.toISOString().split('T')[0] : '';
                }
                if (typeof val === 'string' && val.includes('/')) {
                    const [d, m, y] = val.split('/');
                    const year = y && y.length === 2 ? `20${y}` : y;
                    return `${year}-${m}-${d}`;
                }
                try {
                    const d = new Date(val);
                    if (!Number.isNaN(d.getTime())) return d.toISOString().split('T')[0];
                } catch (_) { }
                return '';
            };
            form.data_emissao.value = normalizeDate(compra.data_emissao);
            form.previsao_entrega.value = normalizeDate(compra.previsao_entrega || compra.data_entrega_prevista);
            form.data_recebimento.value = normalizeDate(compra.data_recebimento);
            form.status_compra.value = compra.status_compra || 'Pendente';
            if (form.centroCustoId) form.centroCustoId.value = compra.centroCustoId || '';
            if (form.natureza_compra) form.natureza_compra.value = compra.natureza_compra || '';
            if (form.compradorId) form.compradorId.value = compra.compradorId || '';
            if (form.numero_nf) form.numero_nf.value = compra.numero_nf || '';
            if (form.status_aprovacao) form.status_aprovacao.value = compra.status_aprovacao || 'Aprovado';
            if (form.nf_conferida) form.nf_conferida.checked = !!compra.nf_conferida;
            if (compra.justificativa_estouro_orcamento) {
                const justContainer = document.getElementById('justificativa-container');
                const justInput = document.getElementById('justificativa');
                justContainer.classList.remove('hidden');
                justInput.value = compra.justificativa_estouro_orcamento;
            }
            if (compra.solicitante && form.solicitante) form.solicitante.value = compra.solicitante;
            form.retirada_estoque.checked = compra.retirada_estoque === true || compra.retirada_estoque === 'on';
        }

        if (retiradaCheckbox) {
            toggleRetiradaEstoque(retiradaCheckbox.checked);
            retiradaCheckbox.addEventListener('change', (e) => toggleRetiradaEstoque(e.target.checked));
            emissaoInput?.addEventListener('change', syncStockDates);
        }

        if (valorInput && !valorInput.value) {
            valorInput.value = Utils.formatCurrencyInput(0);
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-submit');

            try {
                // Valida CNPJ opcional
                if (cnpjInput && cnpjInput.value && !Utils.validateCNPJ(cnpjInput.value)) {
                    Components.createToast('CNPJ inválido.', 'warning');
                    cnpjInput.focus();
                    return;
                }

                // Validação básica de datas
                const emissaoVal = emissaoInput?.value ? new Date(emissaoInput.value) : null;
                const prevVal = previsaoInput?.value ? new Date(previsaoInput.value) : null;
                const recVal = recebimentoInput?.value ? new Date(recebimentoInput.value) : null;
                if (emissaoVal && prevVal && emissaoVal > prevVal) {
                    Components.createToast('Data de emissão não pode ser após a previsão de entrega.', 'warning');
                    previsaoInput?.focus();
                    return;
                }
                if (emissaoVal && recVal && emissaoVal > recVal) {
                    Components.createToast('Data de emissão não pode ser após o recebimento.', 'warning');
                    recebimentoInput?.focus();
                    return;
                }
                if (recVal && prevVal && recVal < prevVal) {
                    Components.createToast('Data de recebimento não pode ser anterior à previsão.', 'warning');
                    recebimentoInput?.focus();
                    return;
                }

                btn.disabled = true;
                btn.innerHTML = Components.createLoader();

                const obraIdSel = obraSelect?.value;

                const anexos = [];
                let pdf_nf_path = compra?.pdf_nf_path || null;
                let pdf_cte_path = compra?.pdf_cte_path || null;
                let comprovante_rc_path = compra?.comprovante_rc_path || null;

        const uploadIfNeeded = async (input, prefix) => {
            const file = input?.files?.[0];
            if (!file) return null;
            return ComprasService.uploadArquivo(file, `${prefix}/${Date.now()}_${file.name}`);
        };

        pdf_nf_path = (await uploadIfNeeded(nfInput, 'compras/nf')) || pdf_nf_path;
        pdf_cte_path = (await uploadIfNeeded(cteInput, 'compras/cte')) || pdf_cte_path;
        comprovante_rc_path = (await uploadIfNeeded(rcInput, 'compras/rc')) || comprovante_rc_path;
                for (const file of filesToUpload) {
                    const url = await ComprasService.uploadArquivo(file, `compras/${Date.now()}_${file.name}`);
                    anexos.push({ nome: file.name, url });
                }

                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                const valorTotal = Utils.parseCurrency(data.valor_total || 0);
                const justificativa = (data.justificativa || data.justificativa_estouro_orcamento || '').trim();

                const payload = {
                    ...data,
                    pdf_nf_path,
                    pdf_cte_path,
                    comprovante_rc_path,
                    descricao_compra: data.descricao_compra,
                    solicitante: data.solicitante || Store.state.currentUser?.nome || Store.state.currentUser?.email,
                    anexos,
                    valor_total: valorTotal,
                    justificativa_estouro_orcamento: justificativa || null,
                    criado_por: Store.state.currentUser?.email || null,
                    cnpj_fornecedor: data.cnpj_fornecedor || null
                };
                payload.retirada_estoque = form.retirada_estoque.checked;
                payload.nf_conferida = form.nf_conferida?.checked || false;
                if (payload.nf_conferida) {
                    payload.nf_conferida_por = Store.state.currentUser?.email || payload.criado_por || null;
                    payload.nf_conferida_em = payload.nf_conferida_em || new Date().toISOString();
                }
                if (!payload.status_compra) payload.status_compra = 'Pendente';
                if (!payload.status_aprovacao) payload.status_aprovacao = 'Aprovado';
                ['data_emissao', 'previsao_entrega', 'data_recebimento'].forEach(f => {
                    if (payload[f] === '') delete payload[f];
                });

                // Revalida orçamento na submissão
                if (obraIdSel && valorTotal > 0) {
                    try {
                        const obraSnap = await getDocs(query(collection(db, 'obras'), where('__name__', '==', obraIdSel)));
                        if (!obraSnap.empty) {
                            const obra = obraSnap.docs[0].data();
                            const orcamento = Number(obra.valor_orcado || obra.orcamento || 0);
                            const tolerancia = Number(obra.tolerancia_percentual || 0);
                            const limiteReal = orcamento + (orcamento * tolerancia);
                            if (limiteReal > 0 && valorTotal > limiteReal && !payload.justificativa_estouro_orcamento) {
                                Components.createToast('Justificativa obrigatória: valor excede o orçamento da obra.', 'warning');
                                btn.disabled = false;
                                btn.innerHTML = '<span>Registrar Solicitação</span>';
                                return;
                            }
                        }
                    } catch (err) {
                        console.warn('Erro ao validar orçamento na submissão', err);
                    }
                }

                // Ajusta data de recebimento para status Recebido/Entregue
                if ((payload.status_compra || '').toLowerCase() === 'recebido' || (payload.status_compra || '').toLowerCase() === 'entregue') {
                    if (!payload.data_recebimento) {
                        payload.data_recebimento = new Date().toISOString().split('T')[0];
                    }
                }

                if (compraId) {
                    await ComprasService.atualizarCompra(compraId, payload);
                    Components.createToast('Compra atualizada com sucesso!');
                } else {
                    await ComprasService.salvarCompra(payload);
                    Components.createToast('Compra registrada com sucesso!');
                }

                Router.navigate('/compras');

            } catch (error) {
                console.error(error);
                const msg = error?.code === 'JUSTIFICATIVA_NECESSARIA'
                    ? 'Justificativa é obrigatória quando ultrapassa o orçamento da obra.'
                    : 'Erro ao registrar: ' + error.message;
                Components.createToast(msg, 'error');
                btn.disabled = false;
                btn.innerHTML = '<span>Registrar Solicitação</span>';
            }
        });
    }
};
