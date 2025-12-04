# Plano de Melhorias - Dashboard de Compras

## Visão Geral
Este documento rastreia o progresso das melhorias implementadas no Dashboard do Comprador e define os próximos passos para evoluir a ferramenta de um simples visualizador para um centro de comando operacional.

## Sprint 0: Personalização e Engajamento (Concluído ✅)
**Objetivo:** Tornar o dashboard mais acolhedor, pessoal e útil para o dia a dia imediato.
- [x] **Saudação Personalizada:** Mensagem de "Bom dia/tarde" com o nome do usuário.
- [x] **Widget de Clima:** Integração com OpenWeatherMap para mostrar clima local (ajuda no planejamento de entregas em obra).
- [x] **Card "Dica do Dia":** Insights automáticos baseados nos dados (ex: "Você tem 5 pedidos atrasados").
- [x] **Novos KPIs Operacionais:** Cards de "Aguardando Ação", "Urgentes", "Precisam Atualização".
- [x] **Lista de Atenção:** Seção "Precisa da Sua Atenção" listando os itens mais críticos.

---

## Sprint 1: Interatividade e Gestão Visual (Concluído ✅)
**Objetivo:** Transformar a visualização de dados em ações rápidas e melhorar a gestão de prazos.

### 1. Filtros Dinâmicos Globais
- **Descrição:** Adicionar uma barra de ferramentas no topo do dashboard para filtrar todos os dados exibidos.
- **Tarefas:**
    - [x] Criar componente de `DashboardFilters`.
    - [x] Implementar filtro de **Período** (Últimos 7 dias, Este Mês, Mês Passado, Personalizado).
    - [x] Implementar filtro de **Obra** (Dropdown para selecionar uma ou todas as obras).
    - [x] Conectar filtros ao `DashboardService` para recalcular KPIs dinamicamente.

### 2. Timeline de Entregas (Novo Widget)
- **Descrição:** Substituir ou complementar a visão de lista com uma linha do tempo visual das próximas entregas.
- **Tarefas:**
    - [x] Criar componente `DeliveryTimeline`.
    - [x] Exibir entregas previstas para os próximos 5-7 dias em formato horizontal.
    - [x] Indicadores visuais de status (No prazo, Risco de atraso).

### 3. Drill-down Interativo
- **Descrição:** Permitir que o usuário clique em qualquer número ou gráfico para ver os detalhes.
- **Tarefas:**
    - [x] Garantir que todos os Cards de KPI sejam links para a tela de Relatórios com os filtros aplicados.
    - [x] Implementar clique nos gráficos (Chart.js) para filtrar a lista de detalhes.

### 4. Ações Rápidas (Quick Actions)
- **Descrição:** Adicionar botões de ação imediata nos itens críticos sem precisar abrir a edição completa.
- **Tarefas:**
    - [x] **Botão Cobrar:** No card de atrasados, abrir modal com template de mensagem (WhatsApp/Email) para o fornecedor.
    - [x] **Botão Receber:** Atalho para marcar como "Entregue" rapidamente.

---

## Sprint 2: Inteligência e Performance (Futuro 🔮)
**Objetivo:** Trazer inteligência de dados para auxiliar na tomada de decisão.
- [ ] **Análise de Spend:** Gráficos detalhados de gastos por categoria (Curva ABC).
- [ ] **Scorecard de Fornecedores:** Avaliação automática baseada em pontualidade e qualidade.
- [ ] **Previsão de Fluxo de Caixa:** Estimativa de pagamentos futuros baseada nas compras em aberto.
