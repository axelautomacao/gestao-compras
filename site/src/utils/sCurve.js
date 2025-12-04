// Curva S financeira (PV/AV) simplificada

const isValidDate = (d) => d instanceof Date && !isNaN(d);

export const getDaysArray = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (!isValidDate(startDate) || !isValidDate(endDate) || startDate > endDate) return [];
    const arr = [];
    for (let dt = new Date(startDate); dt <= endDate; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

export const formatDate = (date) => {
    if (!isValidDate(date)) return null;
    return date.toISOString().split('T')[0];
};

// Planejado (PV) distribuído linearmente
export const generatePlannedValue = (obra) => {
    if (!obra?.data_inicio || !obra?.data_prevista_fim) return [];
    const startDate = new Date(obra.data_inicio);
    const endDate = new Date(obra.data_prevista_fim);
    if (!isValidDate(startDate) || !isValidDate(endDate) || startDate > endDate) return [];
    const days = getDaysArray(startDate, endDate);
    const daily = days.length ? (obra.orcamento || 0) / days.length : 0;
    let acum = 0;
    return days.map(day => {
        acum += daily;
        const date = formatDate(day);
        return date ? { x: date, y: acum } : null;
    }).filter(Boolean);
};

// Real (AV) usando compras cumulativas + custo de horas (simplificado)
export const generateActualValue = (compras = [], horasPorDia = {}, costHour = 0, costExtra = 0, extraHours = {}) => {
    const daily = {};
    compras.forEach(c => {
        const dataMov = c.data_recebimento || c.data_emissao || c.previsao_entrega || c.data_solicitacao;
        if (!dataMov) return;
        const dateStr = formatDate(new Date(dataMov));
        if (!dateStr) return;
        const valor = Number(c.valor_total || c.valor_estimado || 0);
        daily[dateStr] = (daily[dateStr] || 0) + valor;
    });

    // Custo de mão de obra por dia
    Object.entries(horasPorDia || {}).forEach(([date, horas]) => {
        const h = Number(horas) || 0;
        const extra = Number(extraHours?.[date]) || 0;
        const norm = Math.max(0, h - extra);
        const custo = (norm * costHour) + (extra * costExtra || costHour);
        daily[date] = (daily[date] || 0) + custo;
    });

    const dates = Object.keys(daily).sort();
    let acum = 0;
    return dates.map(d => {
        acum += daily[d];
        return { x: d, y: acum };
    });
};
