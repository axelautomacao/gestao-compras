### Final Plan: External API Integration

This plan outlines the final steps to integrate the "Diário de Obra" API into the application.

**Phase 1: UI Integration in Dashboard**

*   **Task 1.1: Add UI Elements to `DashboardObraPage`**
    *   **Goal:** Add a button to trigger the data fetch and a container to display the results.
    *   **File:** `src/pages/DashboardObra.js`
    *   **Steps:**
        1.  Create a new container `div` for the external API data. It will initially be hidden or show a default message.
        2.  Create a button with the text "Buscar Dados do RDO".
        3.  Append the button and the results container to the main layout, probably next to the summary cards.

*   **Task 1.2: Implement Fetch Logic on Button Click**
    *   **Goal:** Wire the button to fetch and display data from the external API.
    *   **File:** `src/pages/DashboardObra.js`
    *   **Steps:**
        1.  Add an event listener to the "Buscar Dados do RDO" button.
        2.  Inside the listener, get the `numero_os` from the `currentObra` object.
        3.  Show a loading message in the results container (e.g., "Buscando...").
        4.  Import and call `getIntegratedDataForObra(numero_os)` from `src/services/diarioDeObraApi.js`.
        5.  Use a `try/catch` block to handle the asynchronous call.
        6.  On success, render the `quantidadeRelatorios`, `totalHoras`, and `totalHorasExtras` inside the results container.
        7.  On failure, display an error message (e.g., "Erro ao buscar dados.").

**Phase 2: BI Integration (Future Task)**

*   **Task 2.1: Create Cost Analysis (`Orçado x Realizado`)**
    *   **Goal:** Create a new dashboard component that compares the budgeted cost with the actual cost from worked hours.
    *   **Details:**
        1.  Fetch the `totalHoras` and `totalHorasExtras` from the API.
        2.  Calculate the `custoRealizado` using the predefined hour costs: `(totalHoras * 70) + (totalHorasExtras * 105)`.
        3.  Compare this `custoRealizado` with the `orcamento` from the `currentObra`.
        4.  Display this comparison in a new chart or summary card.

*   **Task 2.2: S-Curve Implementation**
    *   **Goal:** Develop the S-Curve visualization.
    *   **Details:** This is a more complex task that requires historical data and progress tracking, and should be tackled separately after the main functionality is complete.
