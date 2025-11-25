/**
 * @file Funções utilitárias para gerar os dados da Curva S.
 */

import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from '../constants/costs.js';

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

// Apenas dias úteis (segunda a sexta)
export const getWorkdaysArray = (start, end) => {
    return getDaysArray(start, end).filter(d => {
        const day = d.getDay();
        return day !== 0 && day !== 6;
    });
};

export const formatDate = (date) => {
    if (!isValidDate(date)) return null;
    return date.toISOString().split('T')[0];
};

// Converte uma string "HH:mm" em horas decimais
export const parseHoras = (tempoStr) => {
    if (!tempoStr || typeof tempoStr !== 'string') return 0;
    const [horas, minutos] = tempoStr.split(':').map(Number);
    return (horas || 0) + (minutos || 0) / 60;
};

// Planejado (PV)
export const generatePlannedValueData = (obra) => {
    if (!obra?.data_inicio || !obra?.data_fim) return [];
    const startDate = new Date(obra.data_inicio);
    const endDate = new Date(obra.data_fim);
    if (!isValidDate(startDate) || !isValidDate(endDate) || startDate > endDate) return [];

    const days = getDaysArray(startDate, endDate);
    const dailyCost = days.length > 0 ? (obra.valor_orcado || 0) / days.length : 0;
    let cumulativeCost = 0;

    return days.map(day => {
        cumulativeCost += dailyCost;
        const date = formatDate(day);
        return date ? { date, cumulativeCost } : null;
    }).filter(Boolean);
};

// Real (AV) - soma compras + custo de mão de obra
export const generateActualValueData = (obra, reports = []) => {
    if (!obra?.data_inicio) return [];
    const startDate = new Date(obra.data_inicio);
    if (!isValidDate(startDate)) return [];

    const today = new Date();
    const dataFim = obra.data_fim ? new Date(obra.data_fim) : null;
    const endDate = (dataFim && isValidDate(dataFim)) ? (today > dataFim ? dataFim : today) : today;
    if (startDate > endDate) return [];

    const days = getDaysArray(startDate, endDate);
    if (!days.length) return [];

    const PADRAO_DIA = 9;
    const dailyCosts = {};

    (obra.compras || []).forEach(compra => {
        if (!compra?.data_emissao) return;
        const dateStr = formatDate(new Date(compra.data_emissao));
        if (!dateStr) return;
        dailyCosts[dateStr] = (dailyCosts[dateStr] || 0) + (compra.valor_total || 0);
    });

    (reports || []).forEach(report => {
        const dateField = report?.createdAt || report?.data || report?.data_inicio || report?.dataInicio;
        const dateStr = dateField ? formatDate(new Date(dateField)) : null;
        if (!dateStr) return;

        let laborCost = 0;
        (report?.maoDeObra?.padrao || []).forEach(item => {
            const horas = Number(item.quantidade) || 0;
            const extra = Math.max(0, horas - PADRAO_DIA);
            const normal = horas - extra;
            laborCost += normal * COST_PER_HOUR + extra * COST_PER_OVERTIME_HOUR;
        });
        (report?.maoDeObra?.personalizada || []).forEach(mo => {
            const horas = parseHoras(mo.horasTrabalhadas);
            const extra = Math.max(0, horas - PADRAO_DIA);
            const normal = horas - extra;
            laborCost += normal * COST_PER_HOUR + extra * COST_PER_OVERTIME_HOUR;
        });

        dailyCosts[dateStr] = (dailyCosts[dateStr] || 0) + laborCost;
    });

    let cumulativeCost = 0;
    return days.map(day => {
        const dateStr = formatDate(day);
        if (!dateStr) return null;
        cumulativeCost += (dailyCosts[dateStr] || 0);
        return { date: dateStr, cumulativeCost };
    }).filter(Boolean);
};
