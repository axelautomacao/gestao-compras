/**
 * Configuração de Cores para Gráficos
 * Sprint 6 - Padronização visual
 */

export const CHART_COLORS = {
    // Cores primárias do tema industrial
    primary: '#FFA500',      // Laranja primário (primary)
    primaryLight: '#FFB733',
    primaryDark: '#CC8400',
    
    // Cores de status
    success: '#10b981',      // Verde (primary)
    warning: '#fbbf24',      // Amarelo/Âmbar
    danger: '#ef4444',       // Vermelho (alert)
    info: '#3b82f6',         // Azul
    
    // Cores neutras
    gray: '#9ca3af',
    grayLight: '#d1d5db',
    grayDark: '#6b7280',
    
    // Cores de texto
    text: '#d1d5db',         // text-text
    textMuted: '#9ca3af',    // text-muted
    
    // Cores de fundo
    canvas: '#18181b',       // bg-canvas
    surface: '#27272a',      // bg-surface
    border: '#3f3f46',       // border-border
    
    // Paleta de gráficos (sequencial)
    chartPalette: [
        '#FFA500',  // Primary Orange
        '#3b82f6',  // Blue
        '#10b981',  // Green
        '#fbbf24',  // Amber
        '#ef4444',  // Red
        '#8b5cf6',  // Purple
        '#ec4899',  // Pink
        '#14b8a6',  // Teal
        '#f97316',  // Orange Alt
        '#06b6d4',  // Cyan
    ],
    
    // Cores para status de compras
    statusColors: {
        'Solicitado': '#9ca3af',     // Gray
        'Em Cotação': '#60a5fa',     // Light Blue
        'Aprovado': '#34d399',       // Light Green
        'Comprado': '#fbbf24',       // Amber
        'Recebido': '#10b981',       // Green
        'Entregue': '#10b981',       // Green
        'Cancelado': '#ef4444',      // Red
        'Devolvido': '#f97316',      // Orange Red
    },
    
    // Cores para gráficos EVM
    evm: {
        PV: '#9ca3af',      // Planned Value - Gray
        EV: '#3b82f6',      // Earned Value - Blue
        AC: '#ef4444',      // Actual Cost - Red
    },
    
    // Transparências
    alpha: {
        light: '0.1',
        medium: '0.3',
        strong: '0.5',
        opaque: '0.8',
    }
};

/**
 * Retorna cor com transparência
 * @param {string} color - Cor em hexadecimal
 * @param {number} alpha - Valor de transparência (0-1)
 */
export const withAlpha = (color, alpha) => {
    if (!color.startsWith('#')) return color;
    
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Retorna cor baseada em status
 */
export const getStatusColor = (status, type = 'bg') => {
    const colors = CHART_COLORS.statusColors;
    const color = colors[status] || CHART_COLORS.gray;
    
    if (type === 'bg') {
        return withAlpha(color, 0.2);
    }
    
    return color;
};

/**
 * Configuração padrão para gráficos Chart.js
 */
export const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: CHART_COLORS.text,
                font: {
                    family: 'Orbitron, monospace',
                    size: 11,
                    weight: '500'
                }
            }
        },
        tooltip: {
            backgroundColor: CHART_COLORS.surface,
            titleColor: CHART_COLORS.text,
            bodyColor: CHART_COLORS.textMuted,
            borderColor: CHART_COLORS.border,
            borderWidth: 1,
            cornerRadius: 6,
            padding: 12,
            bodyFont: {
                family: 'Roboto Mono, monospace',
            },
            titleFont: {
                family: 'Orbitron, monospace',
                weight: 'bold'
            }
        }
    },
    scales: {
        x: {
            grid: {
                color: withAlpha(CHART_COLORS.border, 0.5),
                borderColor: CHART_COLORS.border,
            },
            ticks: {
                color: CHART_COLORS.textMuted,
                font: {
                    family: 'Roboto Mono, monospace',
                    size: 10
                }
            }
        },
        y: {
            grid: {
                color: withAlpha(CHART_COLORS.border, 0.5),
                borderColor: CHART_COLORS.border,
            },
            ticks: {
                color: CHART_COLORS.textMuted,
                font: {
                    family: 'Roboto Mono, monospace',
                    size: 10
                }
            }
        }
    }
};
