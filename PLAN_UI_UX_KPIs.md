Plano de Melhoria UI/UX e KPIs - Gestão de Compras Axel
========================================================

Este relatório apresenta um plano detalhado para modernizar a interface, melhorar a experiência do usuário (UX) e implementar indicadores de desempenho (KPIs) estratégicos para a gestão de obras.

1. Análise de KPIs (Indicadores Chave de Desempenho)
---------------------------------------------------

O foco deve mudar de "apenas registrar gastos" para "gestão inteligente de recursos e prazos".

### KPIs atuais (manter e melhorar)
- Orçamento vs. Gasto (Financeiro): Essencial. Melhoria: Adicionar projeção de gasto final baseada na média atual.
- % Concluído Financeiro: Já existe. Melhoria: Cruzar com % Concluído Físico (se houver input manual dessa métrica).

### Novos KPIs propostos (alta prioridade)
- Economia Gerada (Saving):
  - Fórmula: (Valor Orçado - Valor Pago) em compras fechadas.
  - Objetivo: Mostrar eficiência do comprador.
- Índice de Pontualidade de Fornecedores (SLA):
  - Fórmula: % de entregas realizadas na data ou antes da data prevista.
  - Impacto: Identificar gargalos na obra causados por atrasos.
- Lead Time de Compras:
  - Fórmula: Tempo médio entre Requisição -> Aprovação -> Compra -> Entrega.
  - Impacto: Otimizar o planejamento de compras para não parar a obra.
- Curva S Financeira:
  - Visual: Gráfico de linha acumulativo (Planejado vs. Realizado) ao longo do tempo.
  - Impacto: Visualização imediata de desvios de cronograma financeiro.

2. Identidade Visual e Layout (UI)
----------------------------------

O objetivo é sair de um visual "sistema administrativo padrão" para uma interface moderna, limpa e focada em dados.

### Paleta de cores (refinamento)
- Manter a identidade da marca (Verde Axel), mas modernizar os tons.
- Primária: #2E9A45 (Verde Axel) -> manter como cor de ação principal.
- Fundo: Substituir o cinza padrão #F3F4F6 por um tom mais frio e limpo #F8FAFC (Slate-50).
- Superfícies (cards): Branco #FFFFFF com sombras suaves (shadow-sm ou shadow-md) ao invés de bordas cinzas (border).
- Status: Usar "badges" com fundo suave e texto forte (ex: fundo verde claro, texto verde escuro) ao invés de cores sólidas vibrantes.

### Tipografia
- Manter Poppins para títulos (moderna e geométrica).
- Adotar Inter ou Roboto para tabelas e dados densos (melhor legibilidade em tamanhos pequenos).

### Layout geral
- Sidebar (navegação):
  - Tornar colapsável para ganhar espaço em telas menores.
  - Destacar a página ativa com um fundo sutil e barra lateral colorida (já existente, mas refinar).
- Header (topo):
  - Adicionar um cabeçalho global com busca global (Compras, Obras, Fornecedores), notificações rápidas (sininho) e perfil do usuário.
- Cards e espaçamento:
  - Aumentar o "respiro" (padding) dentro dos cards.
  - Usar grid de 12 colunas para alinhar KPIs e gráficos.

3. Plano de Melhoria Página a Página
------------------------------------

### A. Dashboard Geral & Dashboard de Obra
- [Novo] Seletor de contexto unificado: Dropdown global "Todas as Obras" ou "Obra X"; o dashboard se adapta.
- Gráficos: Substituir pizzas por barras horizontais para "Gastos por Natureza".
- Adicionar mini-sparklines nos cards de KPI (tendência 30 dias).
- Tabela de últimas compras: Menos colunas, adicionar avatar/logo do fornecedor se possível.

### B. Gestão de Compras (antigo "Relatório de Compras")
- [Revolução UX] Visualização Kanban: Colunas Solicitado -> Em Cotação -> Aprovado -> Compra -> Recebido, com drag-and-drop para mudar status.
- Filtros avançados: Barra lateral de filtros (estilo e-commerce) ou modal de filtros avançados.

### C. Registro de Compra (Formulários)
- Wizard (passo a passo) em 3 etapas:
  1) Dados Básicos (Obra, Fornecedor, NF).
  2) Financeiro (Valores, Centro de Custo, Natureza).
  3) Logística/Anexos (Prazos, Status, Uploads).
- Autocompletar inteligente para Fornecedor e Material, com busca digitada.

### D. Cadastros (Obras, Fornecedores, etc.)
- Listagem: DataTables com ordenação, busca e paginação.
- Ações em lote: Selecionar múltiplos itens para excluir ou editar.

4. Roteiro de Execução (Priorizado)
-----------------------------------

Fase 0: Correções Críticas (Texto e Encoding) - ✅ Concluído  
- Correção de encoding (UTF-8) e revisão ortográfica/padronização de termos.

Fase 1: "Quick Wins" & Visual (Dia 1-2) - ✅ Concluído  
- Limpeza visual: remover bordas pesadas, sombras suaves, paddings consistentes, border-radius refinado.  
- Tipografia e cores: atualizar variáveis, contraste, badges suaves, botões, fundo Slate-50.  
- Melhoria de tabelas: zebra sutil, hover, números à direita, padding e cabeçalhos refinados.  
- Feedback de ação: toasts modernos, animações suaves, ícones, modais modernos, loading states.  
- Arquivo criado: dist/css/phase1-improvements.css

Fase 2: Dashboard Inteligente (Dia 3-4) - ✅ Entregue (1ª versão)  
- Seletor de contexto unificado (Todas as Obras/Obra X) com barra superior.  
- Novos KPIs: Economia Gerada, SLA de entregas, Lead Time, Atrasos; Curva S (planejado vs realizado).  
- Gráficos de natureza em barras horizontais, refresh do visual do dashboard geral.  
- Próximo ajuste sugerido: alinhar Curva S ao calendário real da obra (datas início/fim) e cruzar % físico quando disponível.

Fase 3: Revolução no Fluxo de Compras (Dia 5-7) - ✅ Entregue (1ª versão)  
- Kanban board para compras com fluxo de status e ação de mover.  
- Wizard de cadastro em 3 etapas no registro de compras (Obra -> Financeiro -> Logística/Anexos).  
- Próximos incrementos: drag-and-drop no Kanban, autosave de filtros, validação contextual no wizard (ex.: obrigar anexos em certos status).

Fase 4: Mobile & Responsividade (Dia 8) - 🚧 Parcial  
- Sidebar colapsável/hambúrguer básico aplicado.  
- Próximos passos: otimizar tabelas para mobile (scroll/card), testar header/busca no mobile.

Sugestão de Exclusão/Adição
---------------------------
- Excluir: Página "Dashboard Geral" separada; fundir com dashboard de obra usando filtro "Todas as Obras".  
- Adicionar: Página "Central de Aprovações" (diretores aprovam compras pendentes em lote).

Status geral: fases 0, 1, 2 e 3 entregues; fase 4 iniciada (sidebar colapsável). Pendências principais: responsividade das tabelas, Curva S com calendário real, drag-and-drop no Kanban e eventual Central de Aprovações.
