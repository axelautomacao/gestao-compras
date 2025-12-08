import { Components } from '../../ui/components.js';
import { Utils } from '../../utils/formatters.js';
import { Icons } from '../../ui/icons.js';

/**
 * Gera dica do dia baseada nas estatísticas
 */
const getDicaDoDia = (stats) => {
    const dicas = [];

    if (stats.semPrevisao > 5) {
        dicas.push(`Você tem ${stats.semPrevisao} compras sem previsão de entrega. Que tal entrar em contato com os fornecedores?`);
    }

    if (stats.precisamAtualizacao > 10) {
        dicas.push(`${stats.precisamAtualizacao} compras estão há alguns dias sem atualização. Mantenha o status sempre atualizado!`);
    }

    if (stats.sla < 80) {
        dicas.push(`Seu SLA está em ${stats.sla.toFixed(1)}%. Foque em acompanhar as previsões de entrega para melhorar!`);
    }

    if (stats.lead > 15) {
        dicas.push(`Seu lead time médio é ${stats.lead.toFixed(1)} dias. Negocie prazos menores com fornecedores!`);
    }

    if (stats.urgentes > 5) {
        dicas.push(`Atenção! ${stats.urgentes} compras urgentes precisam de ação imediata.`);
    }

    if (dicas.length === 0) {
        dicas.push('Excelente trabalho! Seus indicadores estão ótimos. Continue assim! ??');
    }

    return dicas[Math.floor(Math.random() * dicas.length)];
};

export const DashboardView = {
    renderTimeline: (timelineData) => {
        if (!timelineData || timelineData.length === 0) {
            return `
                <div class="card bg-surface border border-border p-4 text-center">
                    <p class="text-text-muted text-sm">Nenhuma entrega prevista para os próximos 7 dias.</p>
                </div>
            `;
        }

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        return `
            <div class="card overflow-hidden">
                <h3 class="text-lg font-display text-text mb-4 flex items-center gap-2">
                    ?? Próximas Entregas (7 dias)
                </h3>
                <div class="relative pt-2 pb-4 overflow-x-auto">
                    <div class="flex items-center min-w-max space-x-8 px-4">
                        ${timelineData.map((item, index) => {
            const date = new Date(item.date);
            const isToday = date.getTime() === hoje.getTime();
            const dayName = date.toLocaleDateString('pt-BR', { weekday: 'short' });
            const dayNum = date.getDate();

            return `
                                <div class="relative flex flex-col items-center group cursor-pointer" 
                                     onclick="window.location.hash='/compras/${item.id}'"
                                     title="${item.descricao_compra} - ${item.fornecedorNome || ''}">
                                    
                                    <!-- Linha conectora -->
                                    ${index < timelineData.length - 1 ?
                    `<div class="absolute top-4 left-1/2 w-full h-0.5 bg-border -z-10"></div>` : ''}
                                    
                                    <!-- Bolinha do dia -->
                                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 
                                        ${isToday ? 'bg-primary border-primary text-canvas' : 'bg-surface border-border text-text-muted group-hover:border-primary transition-colors'}">
                                        ${dayNum}
                                    </div>
                                    
                                    <!-- Dia da semana -->
                                    <span class="text-[10px] uppercase mt-1 text-text-muted font-display">${dayName}</span>
                                    
                                    <!-- Card flutuante (Tooltip simplificado) -->
                                    <div class="mt-2 bg-surface border border-border p-2 rounded shadow-lg w-32 text-center">
                                        <p class="text-xs font-medium text-text truncate">${item.descricao_compra}</p>
                                        <p class="text-[10px] text-text-muted truncate">${item.obraNome}</p>
                                    </div>
                                </div>
                            `;
        }).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderComprador: (stats, user, obras = []) => {
        const atividade = stats.atividade || { semana: { quantidade: 0, valor: 0 }, mes: { quantidade: 0, valor: 0 }, variacaoSemanal: 0, ticketMedio: 0 };

        return `
            <div class="space-y-6">
                <!-- Cabeçalho com Boas-Vindas e Clima -->
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 class="text-3xl font-display text-text mb-2">
                            ${Utils.getGreeting()}, ${user?.nome || user?.email || 'Comprador'}!
                        </h1>
                        <p class="text-text-muted">
                            ${Utils.getContextualMessage(stats)}
                        </p>
                    </div>
                    
                    <!-- Widget de Clima (será preenchido via JS) -->
                    <div id="weather-widget" class="hidden items-center gap-3 bg-canvas px-4 py-3 rounded-lg border border-border shadow-md">
                        <div class="text-4xl" id="weather-icon">??</div>
                        <div>
                            <p class="text-2xl font-display text-text" id="weather-temp">--°C</p>
                            <p class="text-xs text-text-muted" id="weather-location">Carregando...</p>
                        </div>
                    </div>
                </div>

                <!-- Barra de Filtros (Sprint 1) -->
                <div class="bg-surface border border-border p-3 rounded flex flex-wrap items-center gap-4">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-display text-text-muted uppercase">Filtrar por:</span>
                    </div>
                    
                    <!-- Filtro de Período -->
                    <select id="dashboard-filter-periodo" class="bg-canvas border border-border text-text text-sm rounded px-3 py-1.5 focus:border-primary outline-none">
                        <option value="30">Últimos 30 dias</option>
                        <option value="7">Últimos 7 dias</option>
                        <option value="thisMonth">Este mês</option>
                        <option value="lastMonth">Mês Passado</option>
                        <option value="all">Todo o Período</option>
                    </select>

                    <button id="btn-apply-filters" class="btn-sm btn-primary ml-auto">
                        Aplicar
                    </button>
                </div>

                <!-- Atalhos Rápidos -->
                <div class="flex items-center gap-3 overflow-x-auto pb-2">
                    <a href="#/compras/nova" class="btn btn-primary flex items-center gap-2 whitespace-nowrap">
                        ${Icons.plus} Nova Compra
                    </a>
                    <a href="#/relatorios?status=Pendente" class="btn btn-secondary flex items-center gap-2 whitespace-nowrap">
                        ${Icons.clock} Ver Pendentes
                    </a>
                    <a href="#/relatorios?urgente=true" class="btn btn-secondary text-alert border-alert/30 hover:bg-alert/5 flex items-center gap-2 whitespace-nowrap">
                        ${Icons.alert} Ver Urgentes
                    </a>
                    <a href="#/relatorios" class="btn btn-ghost flex items-center gap-2 whitespace-nowrap">
                        ${Icons.chart} Todos Relatórios
                    </a>
                </div>

                <!-- Grid de KPIs Acionáveis -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <!-- Aguardando Ação -->
                    ${Components.createCard({
            title: '? Aguardando Ação',
            content: `
                            <p class="text-4xl font-display text-alert uppercase">${stats.aguardandoAcao || 0}</p>
                            <p class="text-sm text-text-muted mt-1">Pendentes + Em Cotação</p>
                            <a href="#/relatorios?status=Pendente,Em Cotação" class="text-xs text-primary hover:underline mt-2 inline-block">Ver todas ?</a>
                        `,
            className: 'hover:shadow-xl transition-shadow cursor-pointer'
        })}

                    <!-- Urgentes -->
                    ${Components.createCard({
            title: '?? Urgentes',
            content: `
                            <p class="text-4xl font-display text-${stats.urgentes > 0 ? 'alert' : 'text'} uppercase">${stats.urgentes || 0}</p>
                            <p class="text-sm text-text-muted mt-1">Atrasados + Vence em 3 dias</p>
                            ${stats.urgentes > 0 ? '<a href="#/relatorios?urgente=true" class="text-xs text-alert hover:underline mt-2 inline-block">Ver urgentes ?</a>' : ''}
                        `,
            className: 'hover:shadow-xl transition-shadow'
        })}

                    <!-- Precisam Atualização -->
                    ${Components.createCard({
            title: '?? Precisam Atualização',
            content: `
                            <p class="text-4xl font-display text-${stats.precisamAtualizacao > 0 ? 'amber-500' : 'text'} uppercase">${stats.precisamAtualizacao || 0}</p>
                            <p class="text-sm text-text-muted mt-1">Sem update há 3+ dias</p>
                            ${stats.precisamAtualizacao > 0 ? '<a href="#/relatorios" class="text-xs text-primary hover:underline mt-2 inline-block">Atualizar ?</a>' : ''}
                        `,
            className: 'hover:shadow-xl transition-shadow'
        })}

                    <!-- Sem Previsão -->
                    ${Components.createCard({
            title: '?? Sem Previsão',
            content: `
                            <p class="text-4xl font-display text-text uppercase">${stats.semPrevisao || 0}</p>
                            <p class="text-sm text-text-muted mt-1">Comprados sem data</p>
                        `,
            className: 'hover:shadow-xl transition-shadow'
        })}

                    <!-- SLA Entregas -->
                    ${Components.createCard({
            title: '? SLA Entregas',
            content: `
                            <p class="text-4xl font-display text-${(stats.sla || 0) < 80 ? 'alert' : 'primary'} uppercase">${(stats.sla || 0).toFixed(1)}%</p>
                            <p class="text-sm text-text-muted mt-1">Entregas no prazo</p>
                        `
        })}

                    <!-- Lead Médio -->
                    ${Components.createCard({
            title: '?? Lead Médio',
            content: `
                            <p class="text-4xl font-display text-text uppercase">${(stats.lead || 0).toFixed(1)}d</p>
                            <p class="text-sm text-text-muted mt-1">Emissão ? Entrega</p>
                        `
        })}

                    <!-- Card de Atividade -->
                    <div class="card lg:col-span-2">
                        <h3 class="text-lg font-display text-text mb-4 flex items-center gap-2">
                            ?? Sua Atividade
                        </h3>
                        
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <!-- Última Semana -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Última Semana</p>
                                <p class="text-2xl font-display text-primary">${atividade.semana.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${Utils.formatCurrency(atividade.semana.valor)}</p>
                            </div>
                            
                            <!-- Este Mês -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Este Mês</p>
                                <p class="text-2xl font-display text-primary">${atividade.mes.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${Utils.formatCurrency(atividade.mes.valor)}</p>
                            </div>
                        </div>
                        
                        <!-- Métricas adicionais -->
                        <div class="space-y-2 pt-3 border-t border-border">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-text-muted">Variação semanal:</span>
                                <span class="font-display ${atividade.variacaoSemanal >= 0 ? 'text-primary' : 'text-alert'}">
                                    ${atividade.variacaoSemanal >= 0 ? '??' : '??'} 
                                    ${atividade.variacaoSemanal >= 0 ? '+' : ''}${atividade.variacaoSemanal.toFixed(1)}%
                                </span>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-text-muted">Ticket médio:</span>
                                <span class="font-display text-text">${Utils.formatCurrency(atividade.ticketMedio)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dica do Dia -->
                <div class="card bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">??</span>
                        <div>
                            <h4 class="font-display text-text mb-1">Dica do Dia</h4>
                            <p class="text-sm text-text-muted">${getDicaDoDia(stats)}</p>
                        </div>
                    </div>
                </div>

                <!-- Timeline de Entregas (Sprint 1) -->
                <div id="timeline-container">
                    <!-- Será preenchido via JS -->
                    <div class="card p-4 text-center">
                        <div class="animate-pulse flex space-x-4 justify-center">
                            <div class="h-2 bg-border rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                <!-- Precisa da Sua Atenção (Top Críticos) -->
                <div class="bg-surface border border-border shadow-heavy rounded overflow-hidden">
                    <div class="px-6 py-4 border-b border-border flex justify-between items-center">
                        <h3 class="text-lg font-display text-text flex items-center gap-2">
                            ?? Precisa da Sua Atenção
                            <span class="text-xs font-normal text-text-muted bg-canvas px-2 py-1 rounded-full border border-border">
                                Top 10 Críticos
                            </span>
                        </h3>
                        <a href="#/relatorios" class="text-sm text-primary hover:underline">Ver todas ?</a>
                    </div>
                    <div class="divide-y divide-border">
                        ${(stats.comprasCriticas || []).map(c => `
                            <div class="p-4 hover:bg-canvas transition-colors flex items-center gap-4 border-l-4 ${c.criticidade === 'alta' ? 'border-alert' :
                c.criticidade === 'media' ? 'border-amber-500' : 'border-blue-500'
            }">
                                <!-- Indicador Visual -->
                                <div class="flex-shrink-0 text-2xl" title="${c.motivo}">
                                    ${c.criticidade === 'alta' ? '??' : c.criticidade === 'media' ? '?' : '??'}
                                </div>

                                <!-- Informações Principais -->
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 mb-1">
                                        <p class="font-display text-text truncate" title="${c.descricao_compra}">${c.descricao_compra}</p>
                                        <span class="text-xs px-2 py-0.5 rounded bg-canvas border border-border text-text-muted">
                                            #${c.id.slice(0, 6)}
                                        </span>
                                    </div>
                                    <p class="text-sm text-text-muted flex items-center gap-2">
                                        <span class="font-medium text-text">${c.obraNome}</span>
                                        <span>•</span>
                                        <span>${c.fornecedorNome || 'Sem fornecedor'}</span>
                                        <span>•</span>
                                        <span>${Utils.formatCurrency(c.valor_total || c.valor_estimado)}</span>
                                    </p>
                                </div>

                                <!-- Status e Motivo -->
                                <div class="flex-shrink-0 text-right hidden sm:block">
                                    ${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega)}
                                    <p class="text-xs text-alert font-medium mt-1">${c.motivo}</p>
                                </div>

                                <!-- Ações Rápidas (Sprint 1) -->
                                <div class="flex-shrink-0 flex items-center gap-2">
                                    <button class="btn-sm btn-secondary text-xs" 
                                            data-action="cobrar" 
                                            data-id="${c.id}" 
                                            data-fornecedor="${c.fornecedorNome || ''}"
                                            title="Cobrar Fornecedor">
                                        ?? Cobrar
                                    </button>
                                    <button class="btn-sm btn-primary text-xs" 
                                            data-action="receber" 
                                            data-id="${c.id}" 
                                            title="Marcar como Entregue">
                                        ? Receber
                                    </button>
                                    <button class="btn-sm btn-ghost text-xs" 
                                            data-action="edit" 
                                            data-id="${c.id}" 
                                            title="Editar">
                                        ${Icons.pencil}
                                    </button>
                                </div>
                            </div>
                        `).join('') || '<div class="p-8 text-center text-text-muted">Nenhuma compra crítica no momento! ??</div>'}
                    </div>
                </div>
            </div>
        `;
    },


    renderObra: (stats) => {
        return `
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${Components.createCard({
            title: 'Solicitados',
            content: `<p class="text-4xl font-display text-text uppercase">${stats.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`
        })}
                    ${Components.createCard({
            title: 'Em Trânsito',
            content: `<p class="text-4xl font-display text-primary uppercase">${stats.transito}</p><p class="text-sm heading-muted">A caminho</p>`,
            className: 'accent-left'
        })}
                    ${Components.createCard({
            title: 'Entregues',
            content: `<p class="text-4xl font-display text-primary uppercase">${stats.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,
            className: 'accent-left'
        })}
                    ${Components.createCard({
            title: 'Pedidos em Atraso',
            content: `<p class="text-4xl font-display text-alert uppercase">${stats.atrasos || 0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`
        })}
                    ${Components.createCard({
            title: 'SLA Entregas',
            content: `<p class="text-4xl font-display text-${(stats.sla || 0) < 80 ? 'alert' : 'primary'} uppercase">${(stats.sla || 0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`
        })}
                    ${Components.createCard({
            title: 'Lead Médio',
            content: `<p class="text-4xl font-display text-text uppercase">${(stats.lead || 0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão ? Entrega/Previsão</p>`
        })}
                    ${Components.createCard({
            title: 'Economia vs Orçamento',
            content: `<p class="text-4xl font-display text-${(stats.economia || 0) < 0 ? 'alert' : 'primary'} uppercase">${Utils.formatCurrency(stats.economia || 0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(stats.curvaPercent || 0).toFixed(1)}%</p>`
        })}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${Components.createCard({
            title: 'RDO - Total Horas',
            content: `<p class="text-3xl font-display text-primary uppercase">${(stats.rdoData?.totalHoras || 0).toFixed?.(1) || 0}</p><p class="text-sm heading-muted">Relatórios: ${stats.rdoData?.quantidadeRelatorios || 0}</p>`
        })}
                    ${Components.createCard({
            title: 'RDO - Horas Extras',
            content: `<p class="text-3xl font-display text-text uppercase">${(stats.rdoData?.totalExtras || 0).toFixed?.(1) || 0}</p><p class="text-sm heading-muted">Acima do padrão</p>`
        })}
                    ${Components.createCard({
            title: 'RDO - Média Horas/Dia',
            content: `<p class="text-3xl font-display text-text uppercase">${(stats.rdoData?.mediaHorasDia || 0).toFixed?.(1) || 0}</p>`
        })}
                    ${Components.createCard({
            title: 'RDO - Total Funcionários',
            content: `<p class="text-3xl font-display text-text uppercase">${stats.rdoData?.totalFuncionarios || 0}</p><p class="text-sm heading-muted">Média/Dia: ${(stats.rdoData?.mediaFuncionariosDia || 0).toFixed?.(1) || 0}</p>`
        })}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">RDO: Horas por Dia</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-horas"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">RDO: Horas por Função</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-funcao"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

        renderDiretor: (stats) => {
        return `
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visao Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${Components.createCard({
            title: 'Total Gasto (Amostra)',
            content: `<p class="text-4xl font-display text-primary uppercase">${Utils.formatCurrency(stats.totalGasto)}</p>`
        })}
                    ${Components.createCard({
            title: '% Curva S (Comprometido vs Limite)',
            content: `<p class="text-4xl font-display text-${stats.curvaPercent > 100 ? 'alert' : 'primary'} uppercase">${(stats.curvaPercent || 0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${Utils.formatCurrency(stats.limiteReal || 0)} | Comprometido: ${Utils.formatCurrency(stats.comprometido || 0)}</p>`
        })}
                    ${Components.createCard({
            title: 'Pedidos em Atraso',
            content: `<p class="text-4xl font-display text-alert uppercase">${stats.atrasos || 0}</p><p class="text-sm heading-muted mt-1">Com previsao vencida</p>`
        })}
                    ${Components.createCard({
            title: 'SLA Entregas',
            content: `<p class="text-4xl font-display text-${(stats.sla || 0) < 80 ? 'alert' : 'primary'} uppercase">${(stats.sla || 0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`
        })}
                    ${Components.createCard({
            title: 'Lead Medio',
            content: `<p class="text-4xl font-display text-text uppercase">${(stats.lead || 0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissao > Entrega/Previsao</p>`
        })}
                    ${Components.createCard({
            title: 'Economia (Limite - Comprometido)',
            content: `<p class="text-4xl font-display text-primary uppercase">${Utils.formatCurrency(stats.economia || 0)}</p>`
        })}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${Components.createCard({
            title: 'Atrasos',
            content: `<p class="text-3xl font-display text-alert uppercase">${stats.alerts?.atrasados || 0}</p><p class="text-sm heading-muted mt-1">Previsao vencida</p>`
        })}
                    ${Components.createCard({
            title: 'Sem Previsao',
            content: `<p class="text-3xl font-display text-text uppercase">${stats.alerts?.sem_previsao || 0}</p><p class="text-sm heading-muted mt-1">Pedidos sem data</p>`
        })}
                    ${Components.createCard({
            title: 'Pend. Aprovacao',
            content: `<p class="text-3xl font-display text-text uppercase">${stats.alerts?.pendente_aprovacao || 0}</p><p class="text-sm heading-muted mt-1">Estouro orc. pendente</p>`
        })}
                    ${Components.createCard({
            title: 'Em Cotacao',
            content: `<p class="text-3xl font-display text-text uppercase">${stats.alerts?.cotacao || 0}</p><p class="text-sm heading-muted mt-1">Ped. em cotacao</p>`
        })}
                </div>
                
                <!-- Graficos principais -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div class="card h-80 xl:col-span-2">
                        <h3 class="text-lg font-display text-text mb-4">Curva S (Planejado vs Realizado)</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-curva"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Status dos Pedidos</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-status"></canvas>
                        </div>
                    </div>
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Evolucao Mensal</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-gastos-mes"></canvas>
                        </div>
                    </div>
                </div>

                <div class="space-y-2 mt-6">
                    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
                        Indicadores de Qualidade
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="card h-96">
                            <h3 class="text-lg font-display text-text mb-4">Top Naturezas</h3>
                            <div class="h-80 relative">
                                <canvas id="chart-natureza-dir"></canvas>
                            </div>
                        </div>
                        <div class="card h-96 flex flex-col items-center justify-center">
                            <h3 class="text-lg font-display text-text mb-4">Top Centros de Custo</h3>
                            <div class="h-80 w-full relative flex items-center justify-center">
                                <canvas id="chart-cc-dir" style="max-height: 368px; max-width: 368px;"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div class="card h-[27.5rem]">
                            <h3 class="text-lg font-display text-text mb-4">Pipeline de Compras</h3>
                            <div class="h-[23rem] relative">
                                <canvas id="chart-funnel"></canvas>
                            </div>
                        </div>
                        <div class="card h-[27.5rem]">
                            <h3 class="text-lg font-display text-text mb-4">Analise de Pareto - Fornecedores</h3>
                            <div class="h-[23rem] relative">
                                <canvas id="chart-pareto"></canvas>
                            </div>
                            <p class="text-xs text-text-muted mt-2 text-center">
                                ${(stats.paretoAnalysis?.top20Count || 0)} fornecedores (${(stats.paretoAnalysis?.top20Percent || 0).toFixed(1)}%) representam 80% do valor total
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-2 mt-6">
                    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">Orcamento por Obra (Top)</h3>
                    <div class="card w-full max-w-[1320px] mx-auto">
                        <div class="overflow-x-auto">
                            <table class="min-w-[1375px] divide-y divide-border">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Obra</th>
                                        <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">O.S.</th>
                                        <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Inicio</th>
                                        <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Fim</th>
                                        <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Limite</th>
                                        <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Comprometido</th>
                                        <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">% Curva</th>
                                        <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Saldo</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(stats.budgetByObra || []).map(item => `
                                        <tr>
                                            <td class="px-6 py-3 text-sm text-text whitespace-pre-line">${item.nome}</td>
                                            <td class="px-6 py-3 text-sm text-text">${item.os || '-'}</td>
                                            <td class="px-6 py-3 text-sm text-text">${Utils.formatDate(item.inicio)}</td>
                                            <td class="px-6 py-3 text-sm text-text">${Utils.formatDate(item.fim)}</td>
                                            <td class="px-6 py-3 text-sm text-text text-right">${Utils.formatCurrency(item.limite)}</td>
                                            <td class="px-6 py-3 text-sm text-text text-right">${Utils.formatCurrency(item.comprometido)}</td>
                                            <td class="px-6 py-3 text-sm text-${item.percent > 100 ? 'alert' : 'text'} text-right font-display">${item.percent.toFixed(1)}%</td>
                                            <td class="px-6 py-3 text-sm text-text text-right">${Utils.formatCurrency(item.saldo ?? (item.limite - item.comprometido))}</td>
                                        </tr>
                                    `).join('') || `<tr><td colspan="8" class="px-6 py-4 text-sm heading-muted text-center">Sem dados</td></tr>`}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};



