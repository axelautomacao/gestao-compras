# Plano de Integração com API Externa - Diário de Obra

O objetivo é conectar nosso aplicativo à API do "Diário de Obra", permitindo que os usuários busquem dados de horas e relatórios com um clique, e, futuramente, construir um dashboard de BI para análises avançadas.

---

### **Fase 1: Configuração e Criação do Serviço da API**

Primeiro, vamos preparar o terreno para a comunicação com a API externa.

*   **Passo 1.1: Armazenamento Seguro do Token da API:**
    *   Adicionar uma tela de configuração ou um arquivo de configuração seguro no projeto para que você possa inserir e armazenar o Token JWT da API do Diário de Obra.

*   **Passo 1.2: Criação de um Módulo de API Dedicado:**
    *   Desenvolver um novo serviço (ex: `src/services/diarioDeObraApi.js`) que será responsável por todas as chamadas à API externa. Ele irá incluir o token em todas as requisições e conterá funções para cada endpoint que precisarmos (buscar obras, buscar relatórios, etc.).

---

### **Fase 2: Lógica de Busca e Processamento dos Dados**

Com a comunicação estabelecida, vamos implementar a lógica para buscar e calcular os dados que você precisa.

*   **Passo 2.1: Implementar a Busca da Obra pelo "Número da OS":**
    *   Criar uma função que, ao receber o "Número da OS" da nossa aplicação, buscará na API externa a obra correspondente.
    *   **Como será feito:** A função irá chamar o endpoint `GET /obras` da API externa, percorrer a lista de obras recebidas e, para cada uma, buscar seu detalhe (`GET /obras/{obra-id}`) até encontrar aquela com o `numeroContrato` igual ao "Número da OS" fornecido.

*   **Passo 2.2: Extrair os Dados da Obra Encontrada:**
    *   Uma vez que a obra correta for encontrada na API externa, vamos usar o ID dela para buscar as informações que você solicitou:
        1.  **Quantidade de Relatórios:** Obter o número total de relatórios a partir do endpoint `GET /obras/{obra-id}` (campo `totalRelatorios`) ou contando os itens da resposta de `GET /obras/{obra-id}/relatorios`.
        2.  **Horas Apontadas e Extras:** Iterar sobre cada relatório da obra. Para cada um, buscar seus detalhes (`GET /obras/{obra-id}/relatorios/{relatorio-id}`) e acessar os dados de mão de obra (`maoDeObra.personalizada`).

*   **Passo 2.3: Calcular o Total de Horas:**
    *   Somar todas as `horasTrabalhadas` de todos os relatórios para obter o total de horas apontadas.
    *   Para as **horas extras**, como a API não fornece esse dado diretamente, proponho calcular da seguinte forma: para cada funcionário em cada relatório, considerar como "extra" qualquer tempo que exceda 8 horas de trabalho no dia. O total será a soma de todas essas horas extras.

---

### **Fase 3: Integração na Interface do Usuário (UI)**

Agora, vamos tornar essa funcionalidade acessível para o usuário.

*   **Passo 3.1: Adicionar o Botão "Buscar Dados do RDO":**
    *   No dashboard, ao lado de cada obra listada, adicionar um novo botão (ex: "Buscar Dados do RDO").

*   **Passo 3.2: Exibir os Dados Coletados:**
    *   Ao clicar no botão, o sistema executará a lógica da Fase 2 em segundo plano.
    *   Após a conclusão, os três dados (Quantidade de Relatórios, Horas Apontadas e Horas Extras) serão exibidos de forma clara na tela, talvez em um card ou modal ao lado da obra consultada.

---

### **Fase 4 (Futuro): Dashboard de Business Intelligence (BI)**

Esta é uma etapa futura, que poderá ser iniciada após a conclusão bem-sucedida das fases anteriores.

*   **Passo 4.1: Análise "Orçado vs. Realizado":**
    *   Criar um novo painel de BI que cruzará os dados de **custo orçado** (do nosso sistema) com os dados de **horas realizadas** (buscados da API externa), fornecendo uma visão clara do andamento financeiro e de produtividade da obra.
*   **Passo 4.2: Visualização da Curva S:**
    *   Implementar um gráfico de Curva S que mostrará o progresso planejado versus o progresso real da obra ao longo do tempo, utilizando os dados de avanço físico e as horas trabalhadas.
