import { Components } from '../../ui/components.js';
import { Utils } from '../../utils/formatters.js';
import { CalendarView } from './calendar.view.js';
import { Icons } from '../../ui/icons.js';

export const ObrasView = {
    renderList: (obras) => {
        return `
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">Gestão de Obras</h2>
                    ${Components.createButton({
                        id: 'btn-nova-obra',
                        text: 'Nova Obra',
                        onClick: "window.location.hash = '/obras/nova'"
                    })}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${obras.map(obra => `
                        <div class="card hover:shadow-heavy transition-shadow cursor-pointer" onclick="window.location.hash = '/obras/${obra.id}'">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-lg font-display text-text">${obra.nome_obra || 'Sem nome'}</h3>
                                    <p class="text-sm heading-muted">${obra.numero_os ? `OS: ${obra.numero_os}` : ''}</p>
                                </div>
                                <span class="px-2 py-1 text-xs rounded border border-border text-text font-display uppercase tracking-wide">
                                    ${obra.status || 'Em Andamento'}
                                </span>
                            </div>
                            
                            <div class="space-y-2 text-sm text-text">
                                <p class="heading-muted"><span class="text-text">Empresa:</span> ${obra.empresa || '-'}</p>
                                <p class="heading-muted"><span class="text-text">Local:</span> ${obra.local_realizacao || '-'}</p>
                                ${obra.valor_orcado ? `<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Utils.formatCurrency(obra.valor_orcado)}</p>` : ''}
                            </div>

                            <div class="mt-4 pt-4 border-t border-border flex gap-2">
                                <button onclick="event.stopPropagation(); window.location.hash = '/obras/${obra.id}/dashboard'" 
                                        class="text-primary hover:text-primary-strong text-sm font-display uppercase tracking-wide">
                                    Ver Dashboard
                                </button>
                                <button onclick="event.stopPropagation(); window.location.hash = '/obras/${obra.id}/editar'" 
                                        class="text-text-muted hover:text-text text-sm font-display uppercase tracking-wide">
                                    Editar
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderForm: (obra = null) => {
        const isEdit = !!obra;
        const tolPercent = ((obra?.tolerancia_percentual || 0) * 100) || 0;
        return `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl font-display text-text tracking-wide mb-6">
                    ${isEdit ? 'Editar Obra' : 'Nova Obra'}
                </h2>

                <form id="form-obra" class="space-y-6">
                    <div class="card">
                        <h3 class="text-lg font-display mb-4 text-text">Informações Básicas</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${Components.createInput({
                                id: 'nome_obra',
                                label: 'Nome da Obra *',
                                value: obra?.nome_obra || '',
                                required: true
                            })}
                            ${Components.createInput({
                                id: 'numero_os',
                                label: 'Número da OS',
                                value: obra?.numero_os || ''
                            })}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${Components.createInput({
                                id: 'empresa',
                                label: 'Empresa',
                                value: obra?.empresa || ''
                            })}
                            ${Components.createInput({
                                id: 'local_realizacao',
                                label: 'Local de Realização',
                                value: obra?.local_realizacao || ''
                            })}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${Components.createInput({
                                id: 'valor_orcado',
                                label: 'Valor Orçado (R$)',
                                type: 'number',
                                value: obra?.valor_orcado || '',
                                placeholder: '0.00'
                            })}
                            ${Components.createInput({
                                id: 'tolerancia_percentual',
                                label: 'Tolerância (%)',
                                type: 'number',
                                value: tolPercent,
                                placeholder: '0'
                            })}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${Components.createInput({
                                id: 'valor_deslocamento_km',
                                label: 'Valor Deslocamento/KM',
                                type: 'number',
                                value: obra?.valor_deslocamento_km || '',
                                placeholder: '0.00'
                            })}
                            ${Components.createInput({
                                id: 'descricao_obra',
                                label: 'Descrição da Obra',
                                value: obra?.descricao_obra || '',
                                placeholder: 'Resumo da obra'
                            })}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${Components.createInput({
                                id: 'horas_previstas',
                                label: 'Horas Previstas',
                                type: 'number',
                                value: obra?.horas_previstas || ''
                            })}
                            ${Components.createInput({
                                id: 'horas_extras_previstas',
                                label: 'Horas Extras Previstas',
                                type: 'number',
                                value: obra?.horas_extras_previstas || ''
                            })}
                            ${Components.createInput({
                                id: 'status',
                                label: 'Status',
                                value: obra?.status || 'Em Andamento'
                            })}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${Components.createInput({
                                id: 'qtd_refeicoes',
                                label: 'Qtd Refeições',
                                type: 'number',
                                value: obra?.qtd_refeicoes || ''
                            })}
                            ${Components.createInput({
                                id: 'qtd_hospedagens',
                                label: 'Qtd Hospedagens',
                                type: 'number',
                                value: obra?.qtd_hospedagens || ''
                            })}
                            ${Components.createInput({
                                id: 'obra_pai_os',
                                label: 'OS da Obra Pai',
                                value: obra?.obra_pai_os || ''
                            })}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${Components.createInput({
                                id: 'data_prevista_inicio',
                                label: 'Data Prevista de Início',
                                type: 'date',
                                value: obra?.data_prevista_inicio || ''
                            })}
                            ${Components.createInput({
                                id: 'data_prevista_Fim',
                                label: 'Data Prevista de Fim',
                                type: 'date',
                                value: obra?.data_prevista_Fim || ''
                            })}
                        </div>

                        <div class="flex items-center gap-2 mt-4">
                            <input type="checkbox" id="is_obra_filha" name="is_obra_filha" class="rounded border-border text-primary" ${obra?.is_obra_filha ? 'checked' : ''}>
                            <label for="is_obra_filha" class="text-sm text-text">Obra filha</label>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3">
                        ${Components.createButton({
                            id: 'btn-cancel-obra',
                            text: 'Cancelar',
                            variant: 'secondary',
                            onClick: "window.location.hash = '/obras'"
                        })}
                        ${Components.createButton({
                            id: 'btn-submit',
                            type: 'submit',
                            text: isEdit ? 'Salvar Alterações' : 'Criar Obra'
                        })}
                    </div>
                </form>
            </div>
        `;
    },

    renderDashboard: (obra, stats) => {
        const horasPlanejadasObra = Number(obra.horas_previstas || 0);
        const horasExtrasPlanejadas = Number(obra.horas_extras_previstas || 0);
        const horasOrcadasTotais = horasPlanejadasObra + (horasExtrasPlanejadas * 1.5);

        return `
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-display text-text tracking-wide">${obra.nome_obra}</h2>
                        <p class="heading-muted">${obra.numero_os ? `OS: ${obra.numero_os}` : ''} ${obra.empresa ? `• ${obra.empresa}` : ''}</p>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="window.location.hash = '/obras/${obra.id}/editar'" 
                                class="text-primary hover:text-primary-strong text-sm font-display uppercase tracking-wide">
                            Editar Obra
                        </button>
                        <button onclick="window.location.hash = '/obras'" 
                                class="text-text-muted hover:text-text text-sm font-display uppercase tracking-wide">
                            Voltar
                        </button>
                    </div>
                </div>

                <h3 class="text-xl font-display text-text tracking-wide">Análise Geral da Obra</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${Components.createCard({
                        title: 'Total Orçado (Mat + M.O.)',
                        content: `<p id="kpi-total-orcado" class="text-3xl font-display text-text">${Utils.formatCurrency(stats.financialSummary?.total?.planned || 0)}</p>`
                    })}
                    ${Components.createCard({
                        title: 'Total Gasto (Mat + M.O.)',
                        content: `<p id="kpi-total-gasto" class="text-3xl font-display text-text">${Utils.formatCurrency(stats.financialSummary?.total?.spent || stats.totalGasto || 0)}</p><p class="text-xs heading-muted mt-1" id="kpi-total-saldo-label">Saldo: ${Utils.formatCurrency(stats.financialSummary?.total?.balance || 0)}</p>`
                    })}
                    ${Components.createCard({
                        title: '% Gasto Total',
                        content: `<p id="kpi-total-percent" class="text-3xl font-display text-${(stats.financialSummary?.total?.percent || 0) > 100 ? 'alert' : 'primary'}">${(stats.financialSummary?.total?.percent || 0).toFixed(1)}%</p>`
                    })}
                    ${Components.createCard({
                        title: 'Pedidos que chegaram em atraso',
                        content: `<p class="text-4xl font-display text-alert uppercase">${stats.atrasos || 0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`
                    })}
                    ${Components.createCard({
                        title: 'SLA Entregas',
                        content: `<p class="text-4xl font-display text-${(stats.sla || 0) < 80 ? 'alert' : 'primary'} uppercase">${(stats.sla || 0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`
                    })}
                    ${Components.createCard({
                        title: 'Lead Médio',
                        content: `<p class="text-4xl font-display text-text uppercase">${(stats.lead || 0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`
                    })}
                    ${Components.createCard({
                        title: 'Economia vs Orçamento',
                        content: `<p class="text-4xl font-display text-${(stats.economia || 0) < 0 ? 'alert' : 'primary'} uppercase">${Utils.formatCurrency(stats.economia || 0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(stats.curvaPercent || 0).toFixed(1)}%</p>`
                    })}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Gastos por Natureza</h3>
                        <div class="h-64 relative flex items-center justify-center">
                            <canvas id="chart-categorias"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Status das Compras</h3>
                        <div class="h-64 relative flex items-center justify-center">
                            <canvas id="chart-status-obra"></canvas>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Curva S de Compras (Semanal)</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-curva-s"></canvas>
                        </div>
                    </div>
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Evolução Diária dos Gastos</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-gastos-diarios"></canvas>
                        </div>
                    </div>
                </div>

                <div class="card h-96">
                    <h3 class="text-lg font-display text-text mb-4">Curva Financeira (PV x AV)</h3>
                    <div class="h-80 relative">
                        <canvas id="chart-finance-pvav"></canvas>
                    </div>
                </div>

                <div class="card h-96">
                    <h3 class="text-lg font-display text-text mb-4">Comparativo Orçado vs Executado (Mat + M.O.)</h3>
                    <div class="h-80 relative">
                        <canvas id="chart-finance-compare"></canvas>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Gastos por Centro de Custo</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-cc"></canvas>
                        </div>
                    </div>
                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Resumo por Centro de Custo</h3>
                        <div class="h-80 overflow-y-auto">
                            <table class="min-w-full divide-y divide-border">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Centro de Custo</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Valor</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">% Total</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(() => {
                                        const total = (stats.ccTable || []).reduce((sum, item) => sum + item.valor, 0);
                                        const rows = (stats.ccTable || []).sort((a, b) => b.valor - a.valor).map(item => `
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${item.nome}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${Utils.formatCurrency(item.valor)}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${total ? ((item.valor / total) * 100).toFixed(1) : '0.0'}%</td>
                                                </tr>
                                            `).join('');
                                        const totalRow = `
                                            <tr class="bg-canvas">
                                                <td class="px-4 py-2 text-sm font-display text-text">Total</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">${Utils.formatCurrency(total)}</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">100%</td>
                                            </tr>`;
                                        if (!rows || rows.trim().length === 0) return '<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>';
                                        return rows + totalRow;
                                    })()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="calendar-wrapper" class="lg:col-span-2">
                        ${CalendarView.render(stats.comprasCalendar || stats.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${CalendarView.renderTimeline(stats.comprasCalendar || stats.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                        ${Components.createCard({
                            title: 'Horas Normais',
                            content: `<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(stats.rdoData?.totalNormais ?? stats.rdoData?.totalHoras ?? 0).toFixed(1)}</p><p id="kpi-rdo-total-sub" class="text-xs heading-muted mt-1">${(stats.rdoData?.ultimos7Normais || 0).toFixed(1)}h gastas na Última semana</p>`,
                            className: 'accent-left'
                        })}
                        ${Components.createCard({
                            title: 'Horas Extras',
                            content: `<p id="kpi-rdo-extras" class="text-4xl font-display text-alert uppercase">${(stats.rdoData?.totalExtras || 0).toFixed(1)}</p><p id="kpi-rdo-extras-sub" class="text-xs heading-muted mt-1">Orçado: ${(stats.horasExtrasPrev ?? horasExtrasPlanejadas).toFixed(1)}h</p>`,
                            className: 'border-l-4 border-alert'
                        })}
                        ${Components.createCard({
                            title: 'Saldo de Horas',
                            content: `<p id="kpi-rdo-saldo" class="text-4xl font-display text-text uppercase">${(horasOrcadasTotais - (Number(stats.rdoData?.totalHoras || 0) + 0.5 * Number(stats.rdoData?.totalExtras || 0))).toFixed(1)}</p><p id="kpi-rdo-saldo-sub" class="text-xs heading-muted mt-1">~${(stats.rdoData?.saldoDias || 0).toFixed(1)} dias</p>`
                        })}
                        ${Components.createCard({
                            title: 'Média Horas/Dia',
                            content: `<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(stats.rdoData?.mediaHorasDia || 0).toFixed(1)}</p>`
                        })}
                        ${Components.createCard({
                            title: 'Total Funcionários',
                            content: `<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${stats.rdoData?.totalFuncionarios || 0}</p>`
                        })}
                    </div>

                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Horas Normais x Extras (dia)</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-horas-normais-extras"></canvas>
                        </div>
                    </div>

                    <div class="card h-96">
                        <h3 class="text-lg font-display text-text mb-4">Curva S de Horas (Planejado x Executado)</h3>
                        <div class="h-80 relative">
                            <canvas id="chart-rdo-curva-horas"></canvas>
                        </div>
                    </div>

                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Consumo de Horas (Normais + Extras conv.)</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-bateria"></canvas>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Horas por Função</h3>
                            <div class="h-64 relative">
                                <canvas id="chart-rdo-funcao"></canvas>
                            </div>
                        </div>
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Top Técnicos (Horas)</h3>
                            <div class="h-64 overflow-y-auto custom-scrollbar">
                                <table id="table-rdo-tech" class="min-w-full divide-y divide-border">
                                    <thead class="bg-canvas">
                                        <tr>
                                            <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Técnico</th>
                                            <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas</th>
                                            <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Extra</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-border">
                                        <tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-4">Relatórios RDO</h3>
                        <div class="overflow-x-auto">
                                                        <table class="min-w-full divide-y divide-border" id="table-rdo">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-2 py-2 text-center text-xs font-display text-text-muted uppercase">!</th>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Data</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Normais</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Extras</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Total</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Funcionários</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(stats.rdoData?.diarios || []).map(item => `
                                        <tr>
                                            <td class="px-2 py-2 text-center text-sm">${item.hasOcorrencia ? `<span class="text-alert" title="${item.ocorrenciaTexto || 'Ocorrência registrada'}">${Icons.alert}</span>` : ''}</td>
                                            <td class="px-4 py-2 text-sm text-text">${new Date(item.data).toLocaleDateString('pt-BR')}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${item.horasNormais.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${item.horasExtras.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right font-display">${item.total.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${item.funcionarios}</td>
                                        </tr>
                                    `).join('') || '<tr><td colspan="6" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3 class="text-lg font-display text-text mb-4">Últimas Compras</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-border">
                            <thead class="bg-canvas">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Descrição</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Previsão</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Comprador</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border">
                                ${stats.comprasRecentes.map(c => `
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${Utils.formatDate(c.data_solicitacao || c.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${c.descricao_compra || c.descricao || '-'}">${c.descricao_compra || c.descricao || '-'}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Utils.formatCurrency(c.valor_total ?? c.valor_estimado ?? 0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Utils.formatDate(c.previsao_entrega || c.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${c.compradorNome || c.comprador || c.compradorId || '-'}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega || c.data_entrega_prevista)}
                                        </td>
                                        <td class="px-6 py-4 text-sm text-right">
                                            ${c.id ? `
                                                <div class="flex items-center justify-end gap-2">
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${c.id}" title="Ver compra">${Icons.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${c.id}" title="Editar compra">${Icons.pencil}</button>
                                                </div>
                                            ` : '-'}
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
};










