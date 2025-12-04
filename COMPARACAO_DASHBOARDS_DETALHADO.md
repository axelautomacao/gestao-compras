# Comparação Detalhada: Dashboards - Versão Nova vs Antiga

**Data:** 02/12/2025  
**Foco:** Diferenças em KPIs e Gráficos dos Dashboards

---

## 📊 1. Dashboard Geral / Home

### Versão Antiga (/dist)
**Arquivo:** `index.html` linhas 364-418 + `ui-dashboard.js` função `renderDashboardGeral()`

#### KPIs (8 cards):
1. **Obras Ativas** - Contagem de obras não finalizadas
2. **Orçamento Total** - Soma do `valor_orcado` de todas as obras
3. **Comprometido Total** - Soma do `valor_total` das compras
4. **% Orçamento Usado** - (Comprometido / Orçamento) * 100
5. **Economia Gerada** - Orçamento Total - Comprometido Total
6. **SLA Entregas** - % de compras entregues no prazo
7. **Lead Time Médio** - Média de dias entre emissão e recebimento
8. **Compras em Atraso** - Quantidade de compras com previsão vencida

#### Gráficos (3):
1. **Gráfico de Barras** - % Orçamento Consumido por Obra (top 8 obras)
2. **Gráfico de Pizza** - Gastos Totais por Natureza (Material, Serviço, etc.)
3. **Gráfico de Linha** - Evolução de Compras por Mês

#### Filtros Disponíveis:
- ✅ Período (Mês atual, Trimestre, Todos)
- ✅ Ano específico
- ✅ Mês específico
- ✅ Contexto de Obra (via seletor global)

---

### Versão Nova (/site)
**Arquivo:** `src/modules/dashboard/dashboard.view.js` função `renderDiretor()`

#### KPIs - Visão Diretor (11 cards):

**Linha Principal (7 KPIs):**
1. **Total Gasto (Amostra)** - Soma dos valores das compras recentes
2. **Total de Pedidos** - Quantidade de compras
3. **% Curva S** - (Comprometido / Limite Real) * 100
   - Exibe também: Limite e Comprometido em valor
4. **Pedidos em Atraso** - Com previsão vencida
5. **SLA Entregas** - % on-time vs entregues
6. **Lead Médio** - Emissão → Entrega/Previsão (em dias)
7. **Economia** - Limite - Comprometido

**Linha Secundária (4 KPIs de Alertas):**
8. **Atrasos** - Previsão vencida
9. **Sem Previsão** - Pedidos sem data
10. **Pend. Aprovação** - Estouro de orçamento pendente
11. **Em Cotação** - Pedidos em cotação

#### Gráficos (5):
1. **Curva S** (Planejado vs Realizado) - Gráfico de linha temporal
2. **Status dos Pedidos** - Gráfico de pizza com distribuição por status
3. **Evolução Mensal** - Gráfico de barras com gastos por mês
4. **Top Naturezas** - Gráfico horizontal das naturezas mais gastas
5. **Centros de Custo** - Gráfico de pizza por centro de custo

#### KPIs - Visão Comprador (6 cards):
1. **Pendentes** - Aguardando ação
2. **Em Cotação** - Processando
3. **Pedidos em Atraso** - Previsão vencida
4. **SLA Entregas** - On-time vs entregues
5. **Lead Médio** - Emissão → Entrega/Previsão
6. **Total Estimado** - Valor das 5 compras recentes

**Extras:**
- Tabela: Últimas Solicitações
- Cards: Top Naturezas e Top Centros de Custo (listas com valores)

#### KPIs - Visão Obra (11 cards):
1. **Solicitados** - Em processamento
2. **Em Trânsito** - A caminho
3. **Entregues** - Finalizados
4. **Pedidos em Atraso** - Previsão vencida
5. **SLA Entregas** - Entregues no prazo
6. **Lead Médio** - Emissão → Entrega/Previsão
7. **Economia vs Orçamento** - Com % Curva
8. **RDO - Total Horas** - Total+ de horas trabalhadas
9. **RDO - Horas Extras** - Acima do padrão
10. **RDO - Média Horas/Dia** - Média diária
11. **RDO - Total Funcionários** - Com média/dia

#### Gráficos - Visão Obra (3):
1. **RDO: Horas por Dia** - Gráfico de linha
2. **RDO: Horas por Função** - Gráfico de pizza
3. **RDO: Funcionários por Dia** - Gráfico de linha

---

### ⚖️ Comparação Dashboard Geral:

| Aspecto | Versão Antiga | Versão Nova (Diretor) | Diferença |
|---|---|---|---|
| **Total de KPIs** | 8 | 11 (7 principais + 4 alertas) | +3 KPIs |
| **Foco** | Métricas globais | Separado por role (Diretor, Comprador, Obra) | ✅ Personalizado |
| **Curva S** | ✅ Presente | ✅ Presente (destaque maior) | - |
| **Alertas** | 1 KPI (Atrasos) | 4 KPIs dedicados | +3 KPIs |
| **RDO** | ❌ Não aparece | ✅ 4 KPIs + 3 gráficos (visão Obra) | ✅ Novo |
| **Gráficos** | 3 | 5 (Diretor) | +2 gráficos |
| **Filtros** | Período, Ano, Mês | ❌ Ainda não implementados | ⚠️ Faltando |

**KPIs Removidos:**
- ❌ Orçamento Total global (agora é % Curva S)
- ❌ Comprometido Total (incluído no % Curva S)

**KPIs Novos:**
- ✅ Total de Pedidos (quantidade)
- ✅ Sem Previsão
- ✅ Pendentes Aprovação
- ✅ Em Cotação

---

## 📋 2. Dashboard por Obra

### Versão Antiga (/dist)
**Arquivo:** `index.html` linhas 420-843 + `ui-dashboard.js` função `renderDashboardStats()`

#### KPIs Principais (4 cards):
1. **Total Orçado** - Materiais + (Horas Previstas * Custo) + (Horas Extras * Custo Extra)
2. **Total Executado** - Materiais Gastos + (Horas Executadas * Custo)
3. **Diferença** - Total Orçado - Total Executado
4. **% Gasto Total** - (Executado / Orçado) * 100

#### KPIs de Materiais (4 cards):
5. **Orçamento Materiais** - Soma dos orçamentos de materiais
6. **Gasto Materiais** - Soma das compras (valor_total)
7. **Balanço Materiais** - Orçamento - Gasto
8. **% Gasto Materiais** - (Gasto / Orçamento) * 100

#### KPIs de Status (4 cards):
9. **Total de Compras** - Quantidade total
10. **Aguardando Entrega** - Status ≠ Recebido/Cancelado
11. **Compras Recebidas** - Status = Recebido
12. **Compras em Atraso** - Previsão < Hoje e não recebidas

#### KPIs de Métricas (4 cards):
13. **Economia Gerada** - (Orçamento - Gasto)
14. **SLA de Entregas** - % entregues no prazo
15. **Lead Time Médio** - Média de dias entre emissão e entrega
16. **Curva S (Planejado vs Real)** - % (valor exibido apenas)

#### KPIs de Mão de Obra / RDO (6 cards):
17. **Horas Previstas** - Normais + (Extras * 1.5)
18. **Horas Executadas (RDO)** - Total em equivalente
19. **Saldo de Horas** - Previstas - Executadas
20. **Custo Est. Mão de Obra** - (Horas * Custo)
21. **Horas Extras (total)** - Soma de horas extras
22. **% Extras / Horas Normais** - (Extras / Normais) * 100

**TOTAL: 22 KPIs**

#### Gráficos (11 gráficos):
1. **Comparação Orçado vs Executado** (Materiais + Mão de Obra) - Bar Stacked
2. **Horas Previstas vs Realizadas** - Bar
3. **Evolução Diária de Horas** - Bar Stacked (Normal + Extras)
4. **Curva S de Horas** - Line com PV/AV
5. **Distribuição de Horas** (Normal vs Extras) - Doughnut
6. **Top Técnicos (horas)** - Tabela
7. **Análise Comparativa de Custos** - Bar (Orçado vs Gasto por natureza)
8. **Gasto por Natureza** - Pie
9. **Curva S Detalhada (Planejado vs Real)** - Line temporal
10. **Gasto por Centro de Custo** - Donut + Tabela drill-down
11. **Calendário de Compras** - Vis-Timeline

#### Tabelas:
- **Relatórios RDO** - Últimos registros com data, horas, técnicos
- **Histórico de Compras da Obra** - Compras com ações

---

### Versão Nova (/site)
**Arquivo:** `src/modules/obras/obras.view.js` função `renderDashboard()`

#### KPIs Principais (5 cards):
1. **Total Gasto** - Soma das compras + sublegenda com orçamento
2. **Pedidos em Atraso** - Previsão vencida
3. **SLA Entregas** - % entregues no prazo
4. **Lead Médio** - Emissão → Entrega/Previsão (dias)
5. **Economia vs Orçamento** - Com % Curva

#### KPIs de RDO (4 cards):
6. **Total de Horas** - Horas trabalhadas
7. **Média Horas/Dia** - Média diária
8. **Total Funcionários** - Quantidade
9. **Média Func./Dia** - Média diária

**TOTAL: 9 KPIs** (vs 22 da versão antiga)

#### Gráficos (10 gráficos):
1. **Gastos por Categoria** - Pie
2. **Status das Compras** - Pie
3. **Curva S - Planejado vs Realizado** - Line
4. **Evolução Mensal dos Gastos** - Bar
5. **Curva Financeira (PV x AV)** - Line
6. **Por Natureza** - gráfico (tipo não especificado)
7. **Por Centro de Custo** - gráfico
8. **Horas Trabalhadas por Dia** (RDO) - Canvas
9. **Horas por Função** (RDO) - Canvas
10. **Funcionários por Dia** (RDO) - Canvas

#### Componentes Extras:
- **Calendário** - 2 componentes (render + timeline)
- **Tabela Top Técnicos** - Ranking por horas
- **Tabela Últimas Compras** - Compras recentes

---

### ⚖️ Comparação Dashboard por Obra:

| Aspecto | Versão Antiga | Versão Nova | Diferença |
|---|---|---|---|
| **Total de KPIs** | 22 | 9 | **-13 KPIs** ❌ |
| **KPIs Materiais** | 4 dedicados | 0 dedicados | **-4 KPIs** ❌ |
| **KPIs Combinados** | 4 (Mat + MO) | 0 | **-4 KPIs** ❌ |
| **KPIs Status** | 4 (Total, Aguardando, Recebidas, Atraso) | 1 (Atraso) | **-3 KPIs** ❌ |
| **KPIs Métricas** | 4 (Economia, SLA, Lead, Curva S) | 3 (SLA, Lead, Economia+Curva) | -1 KPI |
| **KPIs RDO** | 6 | 4 | **-2 KPIs** ❌ |
| **Gráficos** | 11 | 10 | -1 gráfico |
| **Tabelas** | 2 (RDO + Compras) | 2 (Técnicos + Compras) | = |
| **Calendário** | 1 (Vis-Timeline) | 2 (Calendário + Timeline) | +1 componente |

---

## 🔍 3. Análise das Diferenças

### KPIs Removidos na Versão Nova:

#### Dashboard por Obra:
1. **Total Orçado** (combinado materiais + mão de obra)
2. **Total Executado** (combina do)
3. **Diferença** (Orçado - Executado)
4. **% Gasto Total**
5. **Orçamento Materiais**
6. **Gasto Materiais**  
7. **Balanço Materiais**
8. **% Gasto Materiais**
9. **Total de Compras** (quantidade)
10. **Aguardando Entrega**
11. **Compras Recebidas**
12. **Curva S %** (como KPI standalone)
13. **Horas Previstas** (RDO)
14. **Horas Executadas** (RDO)
15. **Saldo de Horas**
16. **Custo Est. Mão de Obra**
17. **Horas Extras Total**
18. **% Extras / Horas Normais**

### KPIs Mantidos/Ajustados:

#### Ambas as versões têm:
- ✅ SLA de Entregas
- ✅ Lead Time Médio
- ✅ Pedidos em Atraso
- ✅ Economia (na nova está combinado com % Curva)

### Gráficos Removidos:
1. **Comparação Orçado vs Executado** (barras empilhadas combinadas)
2. **Horas Previstas vs Realizadas** (comparação RDO)
3. **Curva S de Horas** (versão específica para horas)
4. **Distribuição de Horas** (Normal vs Extras - Doughnut)
5. **Análise Comparativa de Custos** (bar por natureza)
6. ~~**Gasto por Centro de Custo com drill-down**~~ (mantido, mas simplificado)

### Gráficos Novos:
1. **Curva Financeira (PV x AV)** - Análise de valor planejado vs realizado
2. **Evolução Mensal dos Gastos** - Timeline mensal

---

## 📉 4. Impacto das Mudanças

### Informações Perdidas:

#### Alto Impacto (⚠️ Crítico):
1. **Visão Detalhada de Materiais** - 4 KPIs dedicados foram removidos
   - Admin/Diretor perde visão rápida de orçamento vs gasto de materiais
   
2. **Análise Combinada (Materiais + Mão de Obra)** - 4 KPIs
   - Impossível verorapidamente o custo total (materiais + RDO)
3. **Status das Compras** - 3 KPIs removidos (Total, Aguardando, Recebidas)
   - Perde visão quantitativa do pipeline de compras

4. **Análise Detalhada RDO** - 2 KPIs críticos removidos
   - **Horas Previstas vs Executadas**: impossível comparar planejamento
   - **Saldo de Horas**: não sabe quanto falta executar
   - **Custo Estimado MO**: valor monetário da mão de obra não aparece
   - **% Horas Extras**: controle de extras perdido

#### Médio Impacto (⚠️):
5. **Curva S como KPI numérico** - Agora só aparece dentro de "Economia"
6. **Gráfico de Custos Comparativos** - Dificulta análise visual por natureza

#### Baixo Impacto:
7. **Distribuição Horas (Donut)** - Informação redundante com outros gráficos

---

## ✅ 5. Melhorias na Versão Nova

### Pontos Positivos:

1. **Dashboards Específicos por Role** ✅
   - Diretor vêum dashboard diferente do Comprador
   - Obra tem sua própria visão
   - **Melhor UX** - Informação contextualizada

2. **Design Mais Limpo** ✅
   - Menos KPIs = interface menos poluída
   - Foco nas métricas mais importantes

3. **Calendário Duplo** ✅
   - Calendário visual + Timeline
   - Melhor visualização temporal

4. **Curva Financeira (PV x AV)** ✅
   - Análise de Earned Value Management
   - Gráfico profissional para acompanhamento

5. **Modularidade** ✅
   - Código mais organizado
   - Fácil adicionar novos KPIs

---

## 🎯 6. Recomendações

### Para Restaurar Paridade de Funcionalidades:

#### Prioridade ALTA (Implementar já):

1. **Restaurar KPIs de Materiais no Dashboard por Obra:**
   ```javascript
   // Adicionar 4 cards:
   - Orçamento Materiais
   - Gasto Materiais
   - Balanço Materiais
   - % Gasto Materiais
   ```

2. **Restaurar KPIs Combinados (Materiais + MO):**
   ```javascript
   // Adicionar 4 cards:
   - Total Orçado (Mat + MO)
   - Total Executado (Mat + MO)
   - Diferença
   - % Gasto Total
   ```

3. **Restaurar KPIs de Status:**
   ```javascript
   // Adicionar 3 cards:
   - Total de Compras
   - Aguardando Entrega
   - Compras Recebidas
   ```

4. **Restaurar KPIs RDO Críticos:**
   ```javascript
   // Adicionar 4 cards:
   - Horas Previstas (com breakdown Normal + Extras)
   - Horas Executadas
   - Saldo de Horas
   - Custo Estimado MO (valor em R$)
   - % Horas Extras vs Normais
   ```

#### Prioridade MÉDIA:

5. **Gráfico de Comparação Orçado vs Executado**
   - Restaurar o bar chart empilhado
   - Mostra visualmente materiais + MO

6. **Curva S de Horas** (RDO)
   - Análise temporal de horas trabalhadas
   - Importante para gestão de prazo

#### Prioridade BAIXA:

7. **Filtros no Dashboard Geral**
   - Período (mês, trimestre, todos)
   - Ano
   - Mês específico

---

## 📊 7. Proposta de Organização dos KPIs

### Dashboard por Obra - Estrutura Sugerida:

#### Seção 1: **Resumo Financeiro** (4 KPIs)
- Total Orçado
- Total Executado
- Diferença
- % Gasto Total

#### Seção 2: **Materiais** (4 KPIs)
- Orçamento Materiais
- Gasto Materiais
- Balanço Materiais
- % Gasto Materiais

#### Seção 3: **Mão de Obra (RDO)** (6 KPIs)
- Horas Previstas
- Horas Executadas
- Saldo de Horas
- Custo Estimado MO
- Horas Extras Total
- % Extras / Normais

#### Seção 4: **Status & Métricas** (7 KPIs)
- Total de Compras
- Aguardando Entrega
- Compras Recebidas
- Compras em Atraso
- SLA Entregas
- Lead Médio
- Economia Gerada

**TOTAL: 21 KPIs** (muito próximo dos 22 originais)

---

## 🏁 8. Conclusão

### Resumo das Diferenças:

| Dashboard | KPIs Antiga | KPIs Nova | Diferença | Status |
|---|---|---|---|---|
| **Geral** | 8 | 11 | +3 | ✅ Melhorado |
| **Por Obra** | 22 | 9 | **-13** | ❌ **Reduzido** |
| **Gráficos Obra** | 11 | 10 | -1 | ⚠️ Similar |

### Veredito:

A versão nova **simplificou demais** o Dashboard por Obra, removendo **13 KPIs importantes** que eram essenciais para:
- ✅ Controle orçamentário detalhado
- ✅ Análise de materiais vs mão de obra
- ✅ Acompanhamento de status de compras
- ✅ Gestão de horas (RDO)

**Recomendação:** Implementar os KPIs faltantes seguindo a estrutura modular da versão nova, organizando em seções colapsáveis para manter a interface limpa.

---

**Relatório compilado por:** Antigravity AI  
**Data:** 02/12/2025 10:12 (GMT-3)
