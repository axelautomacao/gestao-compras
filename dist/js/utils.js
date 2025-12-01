// js/utils.js
export const Utils = {
    formatCurrency: (value) => (parseFloat(value) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),

    fmtBR: (iso) => {
        if (!iso) return 'N/D';
        const parts = iso.split('-');
        if (parts.length !== 3) return iso;
        const [y, m, d] = parts;
        return `${d}/${m}/${y}`;
    },

    escapeHtml: (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'),

    validatePdf: (file) => {
        const MAX_PDF_MB = 20;
        if (!file || file.size === 0) return true;
        const type = (file.type || '').toLowerCase();
        const name = (file.name || '').toLowerCase();
        const isPdf = type.includes('pdf') || name.endsWith('.pdf');
        if (!isPdf) throw new Error('Apenas arquivos PDF são permitidos.');
        if (file.size > MAX_PDF_MB * 1024 * 1024) throw new Error(`PDF maior que ${MAX_PDF_MB}MB.`);
        return true;
    },

    validateImage: (file) => {
        const MAX_IMG_MB = 10;
        if (!file || file.size === 0) return true;
        const type = (file.type || '').toLowerCase();
        if (!type.startsWith('image/') && !type.includes('pdf')) {
            throw new Error('Apenas imagens ou PDF são permitidos.');
        }
        if (file.size > MAX_IMG_MB * 1024 * 1024) throw new Error(`Arquivo maior que ${MAX_IMG_MB}MB.`);
        return true;
    },

    getFileExtension: (name = '') => {
        const parts = name.split('.');
        return parts.length > 1 ? '.' + parts.pop() : '';
    }, renderStatusBadge: (status, previsaoEntrega) => {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        let previsao = null;
        if (previsaoEntrega) {
            previsao = new Date(previsaoEntrega + 'T12:00:00');
        }

        if (status !== 'Recebido' && previsao && previsao < hoje) {
            return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-600 text-white">ATRASADO</span>`;
        }

        const normalized = (status || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
        if (normalized.includes('recebido')) return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">${status}</span>`;
        if (normalized.includes('comprado')) return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white">${status}</span>`;
        if (normalized.includes('aprov')) return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-500 text-white">${status}</span>`;
        if (normalized.includes('cot')) return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-gray-800">${status}</span>`;
        if (normalized.includes('nao') || normalized.includes('não')) return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-gray-500 text-white">${status}</span>`;
        return `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-gray-400 text-gray-800">${status || 'N/D'}</span>`;
    },

    formatCurrencyInput: (value, isBlur = false) => {
        if (typeof value === 'number') value = value.toFixed(2);
        let v = value.toString().replace(/\D/g, '');
        v = (v / 100).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        return isBlur ? 'R$ ' + v : v;
    },

    parseCurrency: (value) => {
        let v = value.toString().replace("R$ ", "").replace(/\./g, "").replace(",", ".");
        return parseFloat(v) || 0;
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

    // M7.1: Validação de CNPJ com check digit
    validateCNPJ: (cnpj) => {
        if (!cnpj) return true; // Campo opcional

        // Remove caracteres não numéricos
        const cleaned = cnpj.replace(/\D/g, '');

        // CNPJ deve ter 14 dígitos
        if (cleaned.length !== 14) return false;

        // Todos iguais é inválido
        if (/^(\d)\1{13}$/.test(cleaned)) return false;

        // Validar primeiro dígito
        let sum = 0;
        let mult = 5;
        for (let i = 0; i < 8; i++) {
            sum += parseInt(cleaned[i]) * mult;
            mult = mult === 2 ? 9 : mult - 1;
        }

        let remainder = sum % 11;
        let digit1 = remainder < 2 ? 0 : 11 - remainder;

        if (parseInt(cleaned[8]) !== digit1) return false;

        // Validar segundo dígito
        sum = 0;
        mult = 6;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cleaned[i]) * mult;
            mult = mult === 2 ? 9 : mult - 1;
        }

        remainder = sum % 11;
        let digit2 = remainder < 2 ? 0 : 11 - remainder;

        return parseInt(cleaned[9]) === digit2;
    },

    // M3.3: Debounce para evitar múltiplas chamadas
    debounce: (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    }
};
