# Plano de Revitalização do Dashboard (base dist/)

- **Arquitetura:** todo o front roda direto de `dist/` (HTML + JS em módulos ES). Não há `src/` nem bundler.
- **Segredos:** preencher apenas em `dist/env.js` ou `dist/env.local.js` (fora do Git). Meta tags de `index.html` estão com placeholders.
- **Testes:** `node tests/run.js` (mocks de RDO e Curva S).
- **Dependências runtime:** CDN (Tailwind, Chart.js + adapter + datalabels, vis-timeline, pdf.js, Firebase 9.6.1). Fixar versões se bundlear depois.
- **Dados externos:** API RDO via `window.__RDO_API_CONFIG.TOKEN`; Firebase via `window.__FIREBASE_CONFIG` ou meta tags.

## Fases e Entregas

### Fase 1 — Integridade e Paridade de Formulários
- Paridade no modal de edição de obra (`#obraEditModal`): incluir os mesmos campos do cadastro (horas_previstas, horas_extras_previstas, datas, deslocamento, refeições, hospedagens, obra filha).
- Semântica de orçamento: rótulo “Valor Orçado” passa a “Orçamento de Materiais” (criação/edição/labels).
- Persistência: garantir que `updateObra` mantém todos os campos novos.

### Fase 2 — Análise de Mão de Obra (página de Obra)
- Nova seção “Análise de Mão de Obra” no dashboard da obra com:
  - KPIs: Horas Previstas (normais+extras), Horas Executadas (RDO), Saldo de Horas, Custo Est. de Mão de Obra.
  - Gráfico Comparativo Previsto x Realizado (barras).
  - Gráfico de Evolução Diária empilhado (Horas Normais vs. Extras).
- Usar dados RDO já retornados por `getIntegratedDataForObra` + campos de horas previstas da obra.

### Fase 3 — Visualizações Avançadas
- Timeline: adicionar eventos de RDO na vis-timeline junto com compras.
- Curva S de Horas: AV horas (reais) vs. PV horas (previstas) em `ui-dashboard`.
- Lista de RDOs: tabela simples com Data, Horas, Horas Extras.

### Pós-entrega
- `rg "�"` para checar encoding.
- `node tests/run.js` para sanity dos serviços.

## Execução (checklist)
1) Atualizar HTML do modal de edição (campos faltantes) e renomear labels.
2) Ajustar JS (`ui-forms.js`) para preencher/ler novos campos no edit.
3) Implementar seção nova de mão de obra no dashboard (`ui-dashboard.js` + containers no HTML).
4) Timeline com RDO + Curva S de horas + tabela de RDO.
5) Rodar testes, inspeção manual e garantir zero regressões visíveis.
