# App Gestao de Compras Axel

Estrutura atual (todo o app roda direto da pasta `dist/`, sem usar `src/`):

```
.
+-- dist/               # front-end vanilla pronto para Firebase Hosting
+-- tests/              # testes automatizados (apontando para dist)
```

## Proximos passos

1. Se quiser usar bundler (Vite) no futuro, crie `package.json` e aponte a build para `dist/`.
2. Configure as chaves em `dist/env.js` (ou env.local.js) antes de publicar.

---

## Funcionalidades de BI e Análise de Dados

Esta seção descreve as funcionalidades avançadas de análise de dados implementadas no projeto.

### 1. Integração com API Externa (Diário de Obra)

O sistema agora se integra com a API do aplicativo "Diário de Obra" para buscar dados de mão de obra em tempo real.

- **Como funciona:** No dashboard de uma obra, o botão "Buscar dados do RDO" utiliza o "Número da OS" da obra para encontrar a correspondente na API externa.
- **Dados Coletados:**
    - Quantidade de Relatórios.
    - Total de Horas Apontadas.
    - Total de Horas Extras.
- **Custo de Mão de Obra:** Com base nas horas, o sistema calcula o "Custo Realizado (Mão de Obra)", que é exibido no dashboard e integrado ao gráfico financeiro.

### 2. Curva S (Planejado vs. Real)

O dashboard agora inclui um gráfico de Curva S que compara o custo planejado com o custo real ao longo do tempo.

- **Valor Planejado (PV):** Representado pela linha azul, mostra como o orçamento (`orcamento`) deveria ser gasto linearmente ao longo da duração do projeto (`data_inicio` a `data_fim`).
- **Valor Real (AV):** Representado pela linha vermelha, mostra o custo real acumulado. Este valor é a soma dos custos de `compras` e do `Custo Mão de Obra` (buscado da API externa).
- **Análise:** Este gráfico é uma ferramenta poderosa para visualizar rapidamente se o projeto está adiantado ou atrasado em termos de custos.

### 3. Testes Automatizados

Foi criada uma suíte de testes para garantir a qualidade e a corretude das novas funcionalidades. Como o projeto não utiliza um gerenciador de pacotes, foi criado um sistema de testes simples baseado em Node.js.

- **Como executar os testes:**
  Abra um terminal na raiz do projeto e execute o seguinte comando:
  ```sh
  node tests/run.js
  ```
- **O que é testado:**
    - A comunicação com a API externa (usando simulações/mocks).
    - Os cálculos de horas e custos.
    - A lógica de geração dos dados para a Curva S.

O console exibirá "All Tests Completed" se tudo estiver correto.
