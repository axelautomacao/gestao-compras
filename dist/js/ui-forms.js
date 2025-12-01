import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';
import { UI } from './ui.js';
import { UIDashboard } from './ui-dashboard.js'; // Need this for updateOrcamentoResumo

const $ = (id) => document.getElementById(id);
const VIEW_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>`;

export const UIForms = {
    renderRegistroPage: () => {
        UIForms.refreshFormDropdowns('form-compra');
        UIDashboard.updateDashboardObraList(); // Reuse dashboard list logic or create specific one? ui.js used updateRegistroObraList which was almost identical.
        // Let's use updateRegistroObraList from UI if it exists, or just reimplement.
        // In ui.js, updateRegistroObraList was defined. I should probably move it here or use UIDashboard's if compatible.
        // updateRegistroObraList in ui.js filtered by status and query.
        // Let's implement updateRegistroObraList here locally or export it.
        UIForms.updateRegistroObraList();

        $('registro-orcamento-resumo').classList.add('hidden');
        $('registro-justificativa-wrapper').classList.add('hidden');
        $('form-compra').justificativa_estouro_orcamento.required = false;

        const form = $('form-compra');
        if (form?.obraId) form.obraId.value = '';
        if (form?.elements['retirada_estoque']) {
            form.elements['retirada_estoque'].checked = false;
        }
        UIForms.goToWizardStep(1);
    },

    getCurrentWizardStep: () => {
        const stepEl = document.querySelector('.wizard-step:not(.hidden)');
        return stepEl ? Number(stepEl.dataset.step) : 1;
    },

    goToWizardStep: (step) => {
        const steps = Array.from(document.querySelectorAll('.wizard-step'));
        steps.forEach(s => {
            const isActive = Number(s.dataset.step) === step;
            s.classList.toggle('hidden', !isActive);
            const inputs = s.querySelectorAll('input, select, textarea');
            inputs.forEach(inp => {
                if (isActive) {
                    if (inp.dataset.prevRequired === 'true') inp.required = true;
                } else {
                    inp.dataset.prevRequired = inp.required ? 'true' : 'false';
                    inp.required = false;
                }
            });
        });
        const pills = Array.from(document.querySelectorAll('[data-step-pill]'));
        pills.forEach(p => p.classList.toggle('wizard-active', Number(p.dataset.stepPill) === step));
        // Habilitar/desabilitar botões de voltar
        const prevButtons = document.querySelectorAll('[data-action="wizard-prev"]');
        prevButtons.forEach(btn => {
            btn.disabled = step === 1;
        });
    },

    setFormReadonly: (form, readonly) => {
        if (!form) return;
        form.dataset.readonly = readonly ? 'true' : 'false';
        const controls = form.querySelectorAll('input, select, textarea');
        controls.forEach(el => {
            const isCheckbox = el.type === 'checkbox' || el.type === 'radio';
            const isSelect = el.tagName === 'SELECT';
            const isFile = el.type === 'file';

            if (readonly) {
                if (isCheckbox || isFile) {
                    el.disabled = true;
                } else if (isSelect) {
                    el.setAttribute('aria-readonly', 'true');
                    el.classList.add('pointer-events-none');
                } else {
                    el.readOnly = true;
                }
                el.classList.add('readonly-field');
            } else {
                if (isCheckbox || isFile) {
                    el.disabled = false;
                } else if (isSelect) {
                    el.removeAttribute('aria-readonly');
                    el.classList.remove('pointer-events-none');
                } else {
                    el.readOnly = false;
                }
                el.classList.remove('readonly-field');
            }
        });
    },

    updateRegistroObraList: () => {
        const query = $('registro-search-query').value.toLowerCase();
        const status = $('registro-status-filter').value;
        let obras = state.cache.obras;

        if (status === 'Ativas') { obras = obras.filter(o => o.status !== 'Finalizada'); }
        if (query) {
            obras = obras.filter(o => {
                const nome = o.nome_obra?.toLowerCase() || '';
                const os = o.numero_os?.toLowerCase() || '';
                return nome.includes(query) || os.includes(query);
            });
        }

        const select = $('registro-obra-select');
        select.innerHTML = `<option value="">-- Selecione uma Obra (${obras.length}) --</option>` +
            obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)}${o.numero_os ? ` (${Utils.escapeHtml(o.numero_os)})` : ''}</option>`).join('');
    },

    toggleEstoqueMode: (form, isChecked) => {
        const formElements = form.elements;
        const fornecedorEstoque = state.cache.fornecedores.find(f => (f.nome || '').toLowerCase() === "estoque axel");
        const fotoWrapper = $('registro-foto-rc-wrapper');
        const fotoInput = formElements['foto_rc'];

        // Campos a desativar/limpar quando for retirada de estoque (apenas datas e status)
        const camposParaDesativar = ['previsao_entrega', 'data_recebimento', 'data_emissao', 'data_solicitacao', 'status_compra'];

        const lockField = (el) => {
            if (!el) return;
            if (el.type === 'file') {
                el.disabled = true;
            } else if (el.tagName === 'SELECT') {
                el.setAttribute('aria-readonly', 'true');
                el.classList.add('pointer-events-none');
            } else {
                el.readOnly = true;
            }
            el.classList.add('readonly-field');
            el.tabIndex = -1;
        };

        const unlockField = (el) => {
            if (!el) return;
            if (el.type === 'file') {
                el.disabled = false;
            } else if (el.tagName === 'SELECT') {
                el.removeAttribute('aria-readonly');
                el.classList.remove('pointer-events-none');
            } else {
                el.readOnly = false;
            }
            el.classList.remove('readonly-field');
            el.tabIndex = 0;
        };

        if (isChecked) {
            if (formElements['status_compra']) {
                formElements['status_compra'].value = 'Recebido';
            }
            if (formElements['fornecedorId'] && fornecedorEstoque) {
                formElements['fornecedorId'].value = fornecedorEstoque.id;
                formElements['fornecedorId'].classList.add("bg-gray-200", "cursor-not-allowed");
            }
            form.dataset.retiradaEstoque = 'true';
            if (formElements['retirada_estoque']) formElements['retirada_estoque'].value = 'on';

            const hoje = new Date().toISOString().split('T')[0];
            const solicitacao = formElements['data_solicitacao']?.value || hoje;
            if (formElements['data_solicitacao'] && !formElements['data_solicitacao'].value) {
                formElements['data_solicitacao'].value = hoje;
            }
            if (formElements['data_recebimento']) {
                formElements['data_recebimento'].value = solicitacao;
            }
            if (formElements['data_emissao'] && !formElements['data_emissao'].value) {
                formElements['data_emissao'].value = solicitacao;
            }

            camposParaDesativar.forEach(nome => lockField(formElements[nome]));
            if (fotoWrapper) fotoWrapper.classList.remove('hidden');
        } else {
            if (formElements['status_compra']) {
                formElements['status_compra'].value = 'Nao iniciado';
            }
            if (formElements['fornecedorId']) {
                formElements['fornecedorId'].classList.remove("bg-gray-200", "cursor-not-allowed");
            }
            camposParaDesativar.forEach(nome => unlockField(formElements[nome]));
            form.dataset.retiradaEstoque = 'false';
            if (formElements['retirada_estoque']) formElements['retirada_estoque'].value = '';
            if (fotoWrapper) fotoWrapper.classList.add('hidden');
            if (fotoInput) fotoInput.value = '';
        }
    },

    refreshFormDropdowns: async (formId) => {
        const form = $(formId);
        if (!form) return;

        const renderSelect = (el, data, formatter, defaultOption) => {
            if (!el) return;
            const currentValue = el.value;
            el.innerHTML = `<option value="">${defaultOption}</option>` + data.map(formatter).join('');
            el.value = currentValue;
        };

        renderSelect(form.centroCustoId, state.cache.centrosCusto, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`, 'Selecione o Centro de Custo *');
        renderSelect(form.fornecedorId, state.cache.fornecedores, f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`, 'Selecione o Fornecedor');
        renderSelect(form.compradorId, state.cache.compradores, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`, 'Selecione o Comprador *');
    },

    refreshCadastroLists: () => {
        const podeEditar = state.currentUser?.role === 'diretor' || state.currentUser?.role === 'comprador';
        const podeExcluir = state.currentUser?.role === 'diretor';

        const renderList = (elId, data, type, formatter) => {
            const el = $(elId);
            if (!el) return;

            el.innerHTML = data.length > 0
                ? data.map(item => {
                    const editButton = podeEditar ? `<button data-action="edit-${type}" data-id="${item.id}" class="btn-secondary btn-small">Editar</button>` : '';
                    const deleteButton = podeExcluir ? `<button data-action="delete-${type}" data-id="${item.id}" class="btn-danger btn-small">Excluir</button>` : '';
                    return `
                    <li class="cadastro-list-item">
                        <span class="truncate pr-2">${formatter(item)}</span>
                        <span class="space-x-2 flex-shrink-0">${editButton} ${deleteButton}</span>
                    </li>`
                }).join('')
                : `<li class="text-[var(--text-secondary)]">Nenhum item cadastrado.</li>`;
        };

        renderList('lista-fornecedores', state.cache.fornecedores, 'fornecedor', f => `${Utils.escapeHtml(f.nome)} ${f.cnpj ? `(${Utils.escapeHtml(f.cnpj)})` : ''}`);
        renderList('lista-centros-custo', state.cache.centrosCusto, 'centro-custo', c => `${c.codigo ? `[${Utils.escapeHtml(c.codigo)}]` : ''} ${Utils.escapeHtml(c.nome)}`);
        renderList('lista-compradores', state.cache.compradores, 'comprador', c => `${Utils.escapeHtml(c.nome)} ${c.email ? `(${Utils.escapeHtml(c.email)})` : ''}`);
    },

    renderObrasPage: () => {
        const podeEditar = state.currentUser?.role === 'diretor' || state.currentUser?.role === 'comprador' || state.currentUser?.role === 'obra';
        const podeExcluir = state.currentUser?.role === 'diretor';

        const obras = state.cache.obras;

        const tableHTML = obras.length === 0
            ? `<tr><td colspan="5" class="p-4 text-center text-[var(--text-secondary)]">Nenhuma obra cadastrada.</td></tr>`
            : obras.map(o => {
                const statusOptions = ['Não Iniciada', 'Em Andamento', 'Finalizada'].map(s => `<option value="${s}" ${s === o.status ? 'selected' : ''}>${s}</option>`).join('');

                const viewButton = `<button data-action="view-obra" data-id="${o.id}" class="btn-secondary btn-small" title="Visualizar">${VIEW_ICON}</button>`;
                const editButton = podeEditar
                    ? `<button data-action="edit-obra" data-id="${o.id}" class="btn-secondary btn-small">Editar</button>`
                    : `<button class="btn-secondary btn-small opacity-50 cursor-not-allowed" disabled>Editar</button>`;
                const deleteButton = podeExcluir
                    ? `<button data-action="delete-obra" data-id="${o.id}" class="btn-danger btn-small">Excluir</button>`
                    : ``;

                return `
                    <tr class="text-sm">
                        <td class="px-4 py-2 font-medium">${Utils.escapeHtml(o.nome_obra)}</td>
                        <td class="px-4 py-2">${Utils.escapeHtml(o.numero_os)}</td>
                        <td class="px-4 py-2">${Utils.escapeHtml(o.cliente) || 'N/D'}</td>
                        <td class="px-4 py-2"><select data-action="change-obra-status" data-id="${o.id}" class="input !py-1 !px-2" ${!podeEditar ? 'disabled' : ''}>${statusOptions}</select></td>
                        <td class="px-4 py-2 flex items-center gap-2 flex-wrap">${viewButton}${editButton}${deleteButton}</td>
                    </tr>`;
            }).join('');

        const fullTable = `
            <table class="min-w-full divide-y divide-[var(--border-color)]">
                <thead class="bg-gray-50"><tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Nome da Obra</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Número O.S.</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Cliente</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Status</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Ações</th>
                </tr></thead>
                <tbody class="divide-y divide-[var(--border-color)]">${tableHTML}</tbody>
            </table>`;

        const oldTableBody = $('obras-table-body');
        if (oldTableBody) oldTableBody.innerHTML = tableHTML;

        const newTableWrapper = $('obras-table-wrapper');
        if (newTableWrapper) newTableWrapper.innerHTML = fullTable;
    },

    showObraEditModal: (obraId) => {
        const obra = state.cache.obras.find(o => o.id === obraId);
        if (!obra) { UI.showToast("Obra não encontrada.", true); return; }
        const form = $("form-edit-obra");
        const assignValue = (field, value = '') => {
            if (!field) return;
            field.value = value ?? '';
        };
        const obraEditModal = $('obraEditModal');

        assignValue(form.id, obra.id);
        assignValue(form.nome_obra, obra.nome_obra);
        assignValue(form.numero_os, obra.numero_os || '');
        assignValue(form.empresa, obra.empresa || '');
        assignValue(form.cliente, obra.cliente || '');
        assignValue(form.descricao_obra, obra.descricao_obra || '');
        assignValue(form.local_realizacao, obra.local_realizacao || '');
        assignValue(form.horas_previstas, obra.horas_previstas || '');
        assignValue(form.horas_extras_previstas, obra.horas_extras_previstas || '');
        assignValue(form.valor_deslocamento_km, obra.valor_deslocamento_km ? Utils.formatCurrencyInput(obra.valor_deslocamento_km, true) : '');
        assignValue(form.qtd_refeicoes, obra.qtd_refeicoes || '');
        assignValue(form.qtd_hospedagens, obra.qtd_hospedagens || '');
        assignValue(form.data_prevista_inicio, obra.data_prevista_inicio || '');
        assignValue(form.data_prevista_fim, obra.data_prevista_fim || '');

        assignValue(form.valor_orcado, Utils.formatCurrencyInput(obra.valor_orcado || 0, true));
        assignValue(
            form.tolerancia_percentual,
            obra.tolerancia_percentual ? obra.tolerancia_percentual * 100 : ''
        );

        if (form.is_obra_filha) {
            form.is_obra_filha.checked = !!obra.is_obra_filha;
            const wrapper = $("obra-edit-filha-wrapper");
            if (wrapper) wrapper.classList.toggle('hidden', !form.is_obra_filha.checked);
        }
        assignValue(form.obra_pai_os, obra.obra_pai_os || '');

        // Novo campo: Apelido
        if (form.apelido) assignValue(form.apelido, obra.apelido || '');

        const isDiretor = state.currentUser?.role === 'diretor';
        if (form.valor_orcado) form.valor_orcado.disabled = !isDiretor;
        if (form.tolerancia_percentual) form.tolerancia_percentual.disabled = !isDiretor;

        obraEditModal.showModal();
    },

    showCompraEditModal: async (compraId, readonly = false) => {
        const compra = await Data.getDocById("compras", compraId);
        if (!compra) { UI.showToast("Compra não encontrada.", true); return; }

        const form = $('form-edit-compra');
        const compraEditModal = $('compraEditModal');
        await UIForms.refreshFormDropdowns('form-edit-compra');
        if (form?.obraId) {
            form.obraId.innerHTML = state.cache.obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)}${o.numero_os ? ` (${Utils.escapeHtml(o.numero_os)})` : ''}</option>`).join('');
        }
        UIForms.setFormReadonly(form, false);

        const setValue = (field, value = '') => {
            if (!field) return;
            field.value = value ?? '';
        };

        setValue(form.id, compraId);
        setValue(form.obraId, compra.obraId);
        setValue(form.centroCustoId, compra.centroCustoId);
        setValue(form.fornecedorId, compra.fornecedorId);
        setValue(form.compradorId, compra.compradorId);
        setValue(form.numero_nf, compra.numero_nf);
        setValue(form.apelido_compra, compra.apelido_compra);
        setValue(form.data_solicitacao, compra.data_solicitacao);
        setValue(form.data_emissao, compra.data_emissao);
        setValue(form.valor_total, Utils.formatCurrencyInput(compra.valor_total || 0, true));
        setValue(form.natureza_compra, compra.natureza_compra);
        setValue(form.previsao_entrega, compra.previsao_entrega || '');
        setValue(form.status_compra, compra.status_compra || 'Nao iniciado');
        setValue(form.data_recebimento, compra.data_recebimento || '');
        setValue(form.solicitante, compra.solicitante || '');
        setValue(form.status_aprovacao, compra.status_aprovacao || 'Aprovado');

        const isDiretor = state.currentUser?.role === 'diretor';
        if (form.status_aprovacao) form.status_aprovacao.disabled = !isDiretor;

        const justificativaWrapper = $('edit-justificativa-wrapper');
        const justificativaInput = form.justificativa_estouro_orcamento;
        if (justificativaWrapper && justificativaInput) {
            if (compra.estouro_orcamento) {
                justificativaInput.value = compra.justificativa_estouro_orcamento || 'N/D';
                justificativaWrapper.classList.remove('hidden');
                justificativaInput.required = true;
            } else {
                justificativaInput.value = '';
                justificativaWrapper.classList.add('hidden');
                justificativaInput.required = false;
            }
        }

        // Se for retirada de estoque, NF pode ser opcional
        if (form.numero_nf && compra.retirada_estoque) {
            form.numero_nf.required = false;
            const labelEl = form.numero_nf.closest('div')?.querySelector('label');
            if (labelEl) labelEl.textContent = 'Número NF-e (opcional)';
        } else if (form.numero_nf) {
            const labelEl = form.numero_nf.closest('div')?.querySelector('label');
            if (labelEl) labelEl.textContent = 'Número NF-e *';
        }
        const checkRetirada = form.retirada_estoque;
        if (checkRetirada) {
            checkRetirada.checked = !!compra.retirada_estoque;
            checkRetirada.value = compra.retirada_estoque ? 'on' : '';
            UIForms.toggleEstoqueMode(form, checkRetirada.checked);
        }

        if (form.nf_conferida) {
            form.nf_conferida.checked = !!compra.nf_conferida;
        }
        setValue(form.nf_conferida_por, compra.nf_conferida_por || '');
        setValue(form.nf_conferida_em, compra.nf_conferida_em || '');

        // Oculta os cartões de KPI no modo edição
        const resumoGrid = $('edit-orcamento-resumo');
        if (resumoGrid) resumoGrid.classList.add('hidden');

        if (readonly) {
            UIForms.setFormReadonly(form, true);
        }
        const saveBtn = form.querySelector('button[type="submit"]');
        if (saveBtn) saveBtn.classList.toggle('hidden', readonly);
        const cancelBtn = form.querySelector('button[type="button"]');
        if (cancelBtn) cancelBtn.textContent = readonly ? 'Fechar' : 'Cancelar';

        compraEditModal.showModal();
    },

    showFornecedorEditModal: (id) => {
        const item = state.cache.fornecedores.find(i => i.id === id); if (!item) return;
        const form = $('form-edit-fornecedor');
        const fornecedorEditModal = $('fornecedorEditModal');
        form.id.value = item.id;
        form.nome.value = item.nome;
        form.cnpj.value = Utils.formatCnpjInput(item.cnpj || 'N/D');
        fornecedorEditModal.showModal();
    },

    showCentroCustoEditModal: (id) => {
        const item = state.cache.centrosCusto.find(i => i.id === id); if (!item) return;
        const form = $('form-edit-centro-custo');
        const centroCustoEditModal = $('centroCustoEditModal');
        form.id.value = item.id;
        form.nome.value = item.nome;
        form.codigo.value = item.codigo || 'N/D';
        centroCustoEditModal.showModal();
    },

    showLoginModal: (view = 'login') => {
        const authModal = $('authModal');
        $('auth-login-view').classList.add('hidden');
        $('auth-signup-view').classList.add('hidden');
        $('auth-forgot-view').classList.add('hidden');
        $('login-error').classList.add('hidden');
        $('signup-error').classList.add('hidden');
        $('forgot-error').classList.add('hidden');
        $('forgot-success').classList.add('hidden');

        if (view === 'login') {
            const rememberedEmail = localStorage.getItem('rememberedEmail');
            const emailInput = document.querySelector('#form-login input[name="email"]');
            const rememberCheck = $('check-remember-me');
            if (rememberedEmail) {
                emailInput.value = rememberedEmail;
                rememberCheck.checked = true;
            } else {
                rememberCheck.checked = false;
            }
            $('auth-login-view').classList.remove('hidden');
        } else if (view === 'signup') {
            $('auth-signup-view').classList.remove('hidden');
        } else if (view === 'forgot') {
            $('auth-forgot-view').classList.remove('hidden');
        }

        authModal.showModal();
    },

    hideLoginModal: () => {
        const authModal = $('authModal');
        authModal.close();
    },

    // UX Improvements: Loading States
    setLoadingState: (btnOrId, isLoading, loadingText = 'Salvando...') => {
        const btn = typeof btnOrId === 'string' ? $(btnOrId) : btnOrId;
        if (!btn) return;

        if (isLoading) {
            btn.dataset.originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${loadingText}`;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
        } else {
            btn.disabled = false;
            btn.innerHTML = btn.dataset.originalText || 'Salvar';
            btn.classList.remove('opacity-75', 'cursor-not-allowed');
        }
    }
};

