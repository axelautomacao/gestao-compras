# Plano de Ação – Paridade Dist → Site

- [ ] Autenticação e Usuários
  - [ ] Reintroduzir cadastro, remember-me, verificação de e-mail, auditoria e logs de login/signup.
  - [ ] Implementar middleware/guards de roles (editar/aprovar/deletar obras/compras/cadastros).
  - [ ] Disponibilizar provisionamento/claims, disable user e histórico de ações.

- [ ] Dados e Segurança
  - [ ] Adicionar listeners em tempo real e cache local (TTL/versionamento) para obras/forn/cc/compradores/compras.
  - [ ] Bloquear exclusão com dependências e limpar arquivos de storage associados.
  - [ ] Recriar `getAlertSummary` (atrasos, sem previsão, pendente aprovação, cotação) com suporte a contexto de obra.

- [ ] Dashboard Geral
  - [ ] Filtros período/mês/ano/contexto e KPIs (orçamento/comprometido/% gasto/economia/SLA/lead/atrasos/diretor/financeiro/comprador).
  - [ ] Gráficos: % orçamento consumido por obra, natureza (pizza), evolução mensal (linha), Curva S PV/AV agregada.
  - [ ] Alertas e tabela/drilldown de centros de custo, com notificações de atraso.

- [ ] Dashboard por Obra
  - [ ] Resumo orçamentário com tolerância (%), aprovação, estouro e conferência de NF.
  - [ ] KPIs completos (contagens, SLA, lead, economia, curva %).
  - [ ] Listener de compras da obra em tempo real.
  - [ ] Calendário/timeline combinando compras e RDO (vis.js ou equivalente).

- [ ] RDO / Curva S
  - [ ] KPIs de horas previstas/executadas/saldo, custo de mão de obra, extras %, valores orçados vs gastos de horas, combinado materiais+horas.
  - [ ] Gráficos: doughnut horas, barras diárias, Curva S de horas (PV/AV) com dias úteis/bandas, top técnicos.
  - [ ] Curva financeira PV/AV considerando datas reais e feriados (paridade com `generatePlannedValueData/ActualValueData`).

- [ ] Fluxo de Compras
  - [ ] Form wizard multi-etapas com dropdowns de cadastros, máscaras moeda/CNPJ, modo retirada de estoque (auto datas/status, NF opcional, foto RC).
  - [ ] Uploads separados NF/CTE/foto RC com validação; campos `apelido_compra`, `solicitante`.
  - [ ] Integração com orçamento: `getResumoOrcamento` (valor_orcado+tolerância), `justificativa_estouro_orcamento`, `status_aprovacao`, `estouro_orcamento`, `nf_conferida`.
  - [ ] Persistir IDs (`centroCustoId/compradorId/fornecedorId`) e `valor_total`, não apenas textos.

- [ ] Relatórios
  - [ ] Filtros avançados (obra/fornecedor/comprador multi, centro de custo, natureza, NF, descrição, status “Atrasado”, datas) com ordenação e paginação.
  - [ ] Ações ver/editar/excluir em tabela; Kanban com fluxo completo e ações.
  - [ ] Exportar CSV por obra; relatório por fornecedor com totais e links NF/CTE.

- [ ] Cadastros e Configurações
  - [ ] Obras: campos extras (tolerância %, obra filha/pai, deslocamento/refeições/hospedagens, datas previstas/reais).
  - [ ] Cadastros: validação de CNPJ, exclusão com checagem de vínculos.
  - [ ] Configurações: preferências de notificação, auditoria e edição de roles com claims.

- [ ] Notificações e Alertas
  - [ ] Repor `NotificationManager` (fila de toasts, modal de confirmação, badge).
  - [ ] Gerar notificações automáticas de atrasos/estoques/orçamento e respeitar preferências por usuário.

- [ ] Utilitários e Tema
  - [ ] Reintroduzir helpers de input (máscara/parsing moeda, validação CNPJ, `renderStatusBadge`, debounce).
  - [ ] Controles de tema e sidebar com evento `themechange` para charts.
