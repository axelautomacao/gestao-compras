/**
 * @file Funções utilitárias para gerar os dados da Curva S.
 */

import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from '../constants/costs.js';

/**
 * Gera um array de objetos Date entre uma data de início e de fim.
 * @param {Date | string} start - A data de início.
 * @param {Date | string} end - A data de fim.
 * @returns {Date[]} Um array de datas.
 */
export const getDaysArray = (start, end) => {
    const arr = [];
    for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

/**
 * Formata um objeto Date para uma string no formato 'YYYY-MM-DD'.
 * @param {Date} date - O objeto Date a ser formatado.
 * @returns {string} A data formatada.
 */
export const formatDate = (date) => date.toISOString().split('T')[0];

/**
 * Converte uma string de tempo "HH:mm" para um número decimal de horas.
 * @param {string} tempoStr - A string de tempo a ser convertida (ex: "08:30").
 * @returns {number} O número de horas (ex: 8.5).
 */
export const parseHoras = (tempoStr) => {
    if (!tempoStr) return 0;
    const [horas, minutos] = tempoStr.split(':').map(Number);
    return (horas || 0) + (minutos || 0) / 60;
};

/**
 * Gera os dados para a curva de Valor Planejado (PV - Planned Value).
 * Distribui o orçamento total linearmente ao longo da duração do projeto.
 * @param {object} obra - O objeto da obra, contendo `data_inicio`, `data_fim` e `orcamento`.
 * @returns {{date: string, cumulativeCost: number}[]} Um array de pontos de dados para a curva PV.
 */
export const generatePlannedValueData = (obra) => {
    if (!obra.data_inicio || !obra.data_fim) return [];
    const startDate = new Date(obra.data_inicio);
    const endDate = new Date(obra.data_fim);
    if (startDate > endDate) return [];
    const days = getDaysArray(startDate, endDate);
    const dailyCost = days.length > 0 ? (obra.valor_orcado || 0) / days.length : 0;
    let cumulativeCost = 0;
    return days.map(day => {
        cumulativeCost += dailyCost;
        return { date: formatDate(day), cumulativeCost };
    });
};

/**
 * Gera os dados para a curva de Valor Real (AV - Actual Value).
 * Combina os custos de compras e de mão de obra para calcular o custo real acumulado.
 * @param {object} obra - O objeto da obra, contendo `data_inicio`, `data_fim` e `compras`.
 * @param {object[]} [reports=[]] - Um array de relatórios detalhados da API externa.
 * @returns {{date: string, cumulativeCost: number}[]} Um array de pontos de dados para a curva AV.
 */
export const generateActualValueData = (obra, reports = []) => {
    if (!obra.data_inicio) return [];
    const startDate = new Date(obra.data_inicio);
    const today = new Date();
    const endDate = today > new Date(obra.data_fim) ? new Date(obra.data_fim) : today;
    if (startDate > endDate) return [];
    const days = getDaysArray(startDate, endDate);

    const dailyCosts = {};
    (obra.compras || []).forEach(compra => {
        const date = formatDate(new Date(compra.data_emissao));
        dailyCosts[date] = (dailyCosts[date] || 0) + compra.valor_total;
    });

    (reports || []).forEach(report => {
        const date = formatDate(new Date(report.createdAt));
        const laborCost = (report.maoDeObra.personalizada || []).reduce((acc, mo) => {
            const horas = parseHoras(mo.horasTrabalhadas);
            const extra = Math.max(0, horas - 8);
            return acc + (horas - extra) * COST_PER_HOUR + extra * COST_PER_OVERTIME_HOUR;
        }, 0);
        dailyCosts[date] = (dailyCosts[date] || 0) + laborCost;
    });

    let cumulativeCost = 0;
    return days.map(day => {
        const dateStr = formatDate(day);
        cumulativeCost += (dailyCosts[dateStr] || 0);
        return { date: dateStr, cumulativeCost };
    });
};
