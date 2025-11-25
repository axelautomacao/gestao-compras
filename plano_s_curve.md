### S-Curve Implementation Plan

**Objective:** Create an S-Curve chart that compares the planned progress of a project against the actual progress, both measured in cumulative cost over time.

---

### **Phase 1: Data Aggregation and Preparation**

To build the S-Curve, we need to generate two data series: Planned Value (PV) and Actual Value (AV).

*   **Task 1.1: Create a `PlannedValue` (PV) Series**
    *   **Goal:** Generate a cumulative cost plan over the project's duration.
    *   **Method:**
        1.  Get the project's `data_inicio`, `data_fim`, and total `orcamento`.
        2.  Calculate the total duration of the project in days.
        3.  Distribute the `orcamento` linearly across the duration. The daily planned cost will be `orcamento / total_days`.
        4.  Create a cumulative array of `[date, cumulative_planned_cost]` for each day from start to finish.

*   **Task 1.2: Create an `ActualValue` (AV) Series**
    *   **Goal:** Generate a cumulative record of actual costs incurred over time.
    *   **Method:**
        1.  **Aggregate Purchase Costs:** Create a map or object to store the total purchase cost for each day based on the `data_solicitacao` of each item in the `compras` array.
        2.  **Aggregate Labor Costs:** When data is fetched from the external API, iterate through the reports. For each report, calculate the daily labor cost (`custoRealizado`) and add it to a map for the report's date.
        3.  **Combine and Accumulate:** Create a single time series that combines purchase and labor costs. Iterate from the project start date to the current date. For each day, add the day's purchase cost and labor cost to a running total. This will produce a cumulative array of `[date, cumulative_actual_cost]`.

---

### **Phase 2: UI and Charting**

With the data series ready, the next step is to visualize them.

*   **Task 2.1: Add a New S-Curve Chart Component**
    *   **Goal:** Create a placeholder for the S-Curve on the dashboard.
    *   **File:** `src/pages/DashboardObra.js`
    *   **Steps:**
        1.  In the `renderDashboard` function, create a new chart container `div` specifically for the S-Curve (e.g., `<div id="s-curve-chart-container"></div>`).
        2.  Append this container to the main `chartsContainer`.

*   **Task 2.2: Implement Chart Rendering Logic**
    *   **Goal:** Use Chart.js to draw the S-Curve.
    *   **File:** `src/pages/DashboardObra.js`
    *   **Steps:**
        1.  Create a new function, e.g., `renderSCurveChart(plannedValueData, actualValueData)`.
        2.  This function will take the PV and AV data arrays as input and configure a Chart.js `line` chart.
        3.  The chart's `data` will have two datasets: one for "Planned Value" and one for "Actual Value".
        4.  The chart's `options` will be configured to display a time-series x-axis.
        5.  Modify the event listener for the "Buscar Dados do RDO" button. After successfully fetching external data and generating both the PV and AV series, it will call `renderSCurveChart` to draw or update the chart. Initially, the chart can be rendered with just the PV data.
