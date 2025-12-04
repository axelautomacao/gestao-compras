export const Utils = {
    formatCurrency: (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    },

    formatDate: (dateString) => {
        if (!dateString) return '-';
        const d = new Date(dateString);
        if (Number.isNaN(d.getTime())) return '-';
        return d.toLocaleDateString('pt-BR');
    },

    formatDateTime: (dateValue) => {
        if (!dateValue) return '-';
        const d = dateValue?.toDate ? dateValue.toDate() : new Date(dateValue);
        if (Number.isNaN(d.getTime())) return '-';
        const dateStr = d.toLocaleDateString('pt-BR');
        const timeStr = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        return `${dateStr} às ${timeStr}`;
    },

    formatLastUpdate: (data = {}) => {
        const updated =
            data.ultima_atualizacao ||
            data.ultimaAtualizacao ||
            data.last_update ||
            data.atualizado_em ||
            data.updated_at ||
            data.updatedAt ||
            data.updated ||
            null;
        const user =
            data.atualizado_por ||
            data.atualizadoPor ||
            data.updated_by ||
            data.lastUpdatedBy ||
            data.modificado_por ||
            data.last_update_user ||
            data.criado_por ||
            '';

        const ts = updated?.toDate ? updated.toDate() : updated ? new Date(updated) : null;
        if (ts && !Number.isNaN(ts.getTime())) {
            const stamp = Utils.formatDateTime(ts);
            return user ? `${user} • ${stamp}` : stamp;
        }
        return user || '-';
    },

    // Máscara amigável para inputs de moeda
    formatCurrencyInput: (value, isBlur = false) => {
        const raw = typeof value === 'number' ? value.toFixed(2) : String(value ?? '');
        let v = raw.replace(/\D/g, '');
        v = (v / 100).toFixed(2) + '';
        v = v.replace('.', ',');
        v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        return isBlur ? `R$ ${v}` : v;
    },

    parseCurrency: (value) => {
        if (typeof value === 'number') return value;
        if (!value) return 0;
        const cleaned = String(value).replace('R$ ', '').replace(/\./g, '').replace(',', '.');
        const parsed = parseFloat(cleaned);
        return Number.isNaN(parsed) ? 0 : parsed;
    },

    formatCnpjInput: (value) => {
        if (!value) return '';
        let v = value.replace(/\D/g, '');
        v = v.substring(0, 14);
        v = v.replace(/^(\d{2})(\d)/, '$1.$2');
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
        v = v.replace(/(\d{4})(\d)/, '$1-$2');
        return v;
    },

    validateCNPJ: (cnpj) => {
        if (!cnpj) return true; // Campo opcional
        const cleaned = cnpj.replace(/\D/g, '');
        if (cleaned.length !== 14) return false;
        if (/^(\d)\1{13}$/.test(cleaned)) return false;
        let sum = 0;
        let mult = 5;
        for (let i = 0; i < 8; i++) {
            sum += parseInt(cleaned[i], 10) * mult;
            mult = mult === 2 ? 9 : mult - 1;
        }
        let remainder = sum % 11;
        let digit1 = remainder < 2 ? 0 : 11 - remainder;
        if (parseInt(cleaned[8], 10) !== digit1) return false;
        sum = 0;
        mult = 6;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cleaned[i], 10) * mult;
            mult = mult === 2 ? 9 : mult - 1;
        }
        remainder = sum % 11;
        let digit2 = remainder < 2 ? 0 : 11 - remainder;
        return parseInt(cleaned[9], 10) === digit2;
    },

    renderStatusBadge: (status, previsaoEntrega) => {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        let previsao = null;
        if (previsaoEntrega) {
            const dt = new Date(previsaoEntrega);
            if (!Number.isNaN(dt.getTime())) {
                previsao = dt;
            }
        }
        const normalized = (status || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const isAtrasado = normalized !== 'recebido' && previsao && previsao < hoje;
        if (isAtrasado) {
            return `<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>`;
        }
        if (normalized.includes('recebido') || normalized.includes('entregue')) {
            return `<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${status}</span>`;
        }
        if (normalized.includes('comprado')) {
            return `<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${status}</span>`;
        }
        if (normalized.includes('aprov')) {
            return `<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${status}</span>`;
        }
        if (normalized.includes('cot') || normalized.includes('cota')) {
            return `<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${status}</span>`;
        }
        return `<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${status || 'N/D'}</span>`;
    },

    debounce: (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    },

    /**
     * Retorna saudação baseada no horário
     */
    getGreeting: () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Bom dia';
        if (hour < 18) return 'Boa tarde';
        return 'Boa noite';
    },

    /**
     * Gera mensagem contextual baseada nas estatísticas
     */
    getContextualMessage: (stats) => {
        const messages = [];

        // Mensagem baseada em urgências
        if (stats.urgentes > 0) {
            messages.push(`Você tem <strong>${stats.urgentes} compras urgentes</strong> que precisam de atenção`);
        } else if (stats.aguardandoAcao > 0) {
            messages.push(`Há <strong>${stats.aguardandoAcao} compras aguardando</strong> sua ação`);
        } else if (stats.pendentes === 0 && stats.emCotacao === 0) {
            messages.push('Tudo em dia! Continue o ótimo trabalho 💪');
        } else {
            messages.push('Aqui está o resumo das suas compras');
        }

        // Adicionar info de performance se SLA estiver bom
        if (stats.sla >= 90) {
            messages.push(`Seu SLA está excelente: <strong>${stats.sla.toFixed(1)}%</strong> 🏆`);
        }

        return messages.join(' • ');
    },

    /**
     * Formata tempo relativo (ex: "há 2 horas", "ontem")
     */
    formatRelativeTime: (dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'agora mesmo';
        if (diffMins < 60) return `há ${diffMins} minuto${diffMins > 1 ? 's' : ''}`;
        if (diffHours < 24) return `há ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
        if (diffDays === 1) return 'ontem';
        if (diffDays < 7) return `há ${diffDays} dias`;
        if (diffDays < 30) return `há ${Math.floor(diffDays / 7)} semana${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
        return Utils.formatDate(dateString);
    },

    /**
     * Calcula dias entre duas datas
     */
    daysBetween: (date1, date2) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diffTime = Math.abs(d2 - d1);
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }
};
