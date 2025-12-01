# Status das Melhorias (Nov/2025)

Resumo das 23 solicitações e o estado após esta intervenção.

| Item | Descrição curta | Status | Observações |
| --- | --- | --- | --- |
| 1 | Botões de visualizar abrindo edição | **Feito** | Modal de compra agora respeita modo somente leitura (`UIForms.setFormReadonly`) para ações `view`. |
| 2 | Dois botões de buscar compras | **Feito** | Mantido apenas um botão (`btn-report-buscar`), com filtros funcionando. |
| 3 | Dropdowns de filtros (fornecedor/comprador/CC) vazios | **Feito** | Dropdowns populados e usados nos filtros do relatório (topo + multi-select). |
| 4 | Botões tabela/kanban posicionados | **Feito** | Movidos para abaixo do botão de busca, antes dos resultados. |
| 5 | Bloquear edição ao marcar “retirada do estoque” + asterisco no valor total | **Feito** | Campos relevantes ficam somente leitura/sem interação; rótulo de Valor Total marcado como obrigatório. |
| 6 | Campo “Apelido p/ Obra” | Já existia | Mantido no formulário e edição. |
| 7 | Alturas diferentes de inputs | **Feito** | Padronização com `min-height` em `.input` e selects. |
| 8 | Campo Data da Solicitação + renomear Data Emissão | **Feito** | Inclusão no modal de edição de compras, persistência no backend e label “Data de Compra”. |
| 9 | Página de configurações (notificações acima de usuários) centralizada | **Feito** | Nova página `page-configuracoes` com cards centralizados e modal de usuário. |
| 10 | Tema escuro desagradável | **Feito** | Paleta escura revisada (`:root.dark`) com contrastes melhores. |
| 11 | Ícones nos KPIs do dashboard por obra | **Feito** | KPIs principais e de materiais agora exibem ícones visuais. |
| 12 | Calendário mostrar apelido e cores por status | **Feito** | Timeline usa apelido e mapeamento de status/atraso com cores alinhadas aos badges. |
| 13 | Sidebar colapsável | **Feito** | Botão de toggle ativo em desktop/mobile, estado salvo em localStorage. |
| 14 | Reduzir gráfico Orçado vs Executado e aumentar título | **Feito** | Canvas reduzido (~180px) e título com fonte maior. |
| 15 | Alinhar cards de KPI de mão de obra | **Feito** | Cards com `flex`/altura uniforme. |
| 16 | Área de final de semana na Curva S | **Feito** | Sombreamento ajustado para blocos contínuos de fim de semana. |
| 17 | Legenda/valores no gráfico de distribuição de horas | **Feito** | Datalabels habilitadas nos gráficos de horas (RDO). |
| 18 | Cor suave + ícones nos KPIs de materiais | **Feito** | Cards coloridos e com ícones na análise de gastos com materiais. |
| 19 | Remover custo de mão de obra do gráfico comparativo de materiais | **Feito** | Dataset de mão de obra removido do gráfico de custos de materiais. |
| 20 | Legenda de valores no gráfico de gasto por natureza de materiais | **Feito** | Datalabels exibindo valores em moeda no gráfico de natureza. |
| 21 | Pós-login leva a página em branco | **Feito** | Fluxo força exibição do layout e dashboard geral após login. |
| 22 | Pós-login sempre abrir dashboard inicial | **Feito** | Redirecionamento explícito para `dashboard-geral` na inicialização pós-login. |
| 23 | Sininho abrir pop-up de notificações | **Feito** | Botão abre `alertCenter` com filtros e listas de alertas. |

Pendências adicionais: nenhuma identificada nesta rodada.
