import { getRdoConfig } from '../../config/env.js';

// Integra RDO legado (compatível com dist/js/services/diarioDeObraApi.js)
// Usa token em env/localStorage e endpoint configurável.
const cfg = getRdoConfig();
const BASE_URL = cfg.BASE_URL || 'https://apiexterna.diariodeobra.app/v1';

const getToken = () => {
    const globalToken = cfg.TOKEN || (typeof window !== 'undefined' ? window.__RDO_API_TOKEN : '');
    if (globalToken) return globalToken;
    try {
        const local = localStorage.getItem('axel_rdo_token');
        if (local) return local;
    } catch { }
    return '';
};

async function fetchApi(path, options = {}) {
    const token = getToken();
    if (!token) {
        console.warn('[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token');
        return null;
    }
    const headers = {
        ...options.headers,
        token,
        'Content-Type': 'application/json',
    };
    const response = await fetch(`${BASE_URL}${path}`, { ...options, headers });
    console.info('[RDO] Request:', `${BASE_URL}${path}`, 'status:', response.status);
    if (!response.ok) {
        console.warn(`Erro na API RDO ao acessar ${path}: ${response.status} ${response.statusText}`);
        return null;
    }
    const json = await response.json();
    console.info('[RDO] Response data size:', Array.isArray(json) ? json.length : Object.keys(json || {}).length);
    return json;
}

export const RDOService = {
    getByObra: async (osNumber, startDate, endDate) => {
        const obra = await RDOService.getObraByOs(osNumber);
        if (!obra) return [];
        const relatorios = await RDOService.getRelatoriosByObra(obra._id);
        if (!relatorios || !relatorios.length) return [];

        const inRange = (dtStr) => {
            if (!dtStr) return true;
            const dt = new Date(dtStr);
            dt.setHours(12, 0, 0, 0);
            if (startDate) {
                const s = new Date(startDate);
                s.setHours(12, 0, 0, 0);
                if (dt < s) return false;
            }
            if (endDate) {
                const e = new Date(endDate);
                e.setHours(12, 0, 0, 0);
                if (dt > e) return false;
            }
            return true;
        };

        const details = [];
        for (const r of relatorios) {
            const det = await RDOService.getRelatorioDetalhe(obra._id, r._id);
            if (det && inRange(det?.data)) {
                details.push(det);
            }
        }
        return details;
    },

    getObraByOs: async (osNumber) => {
        const todas = await fetchApi('/obras');
        if (!Array.isArray(todas)) return null;
        const osStr = String(osNumber || '').trim();
        if (!osStr) return null;

        const byId = todas.find(o => String(o._id) === osStr);
        if (byId) return byId;

        const bySuffix = todas.find(o => {
            const match = (o.nome || '').match(/(\d+)$/);
            return match && match[1] === osStr;
        });
        if (bySuffix) return bySuffix;

        const byContains = todas.find(o => (o.nome || '').includes(osStr));
        if (byContains) return byContains;

        return null;
    },

    getRelatoriosByObra: async (obraId) => {
        const list = await fetchApi(`/obras/${obraId}/relatorios`);
        return Array.isArray(list) ? list : [];
    },

    getRelatorioDetalhe: async (obraId, relatorioId) => {
        return fetchApi(`/obras/${obraId}/relatorios/${relatorioId}`);
    },

    getIntegratedDataForObra: async (osNumber) => {
        const obra = await RDOService.getObraByOs(osNumber);
        if (!obra) {
            console.warn('[RDO] Obra não localizada para OS:', osNumber);
            return null;
        }
        console.info('[RDO] Obra encontrada para OS:', osNumber, '->', obra._id, obra.nome);

        const relatorios = await RDOService.getRelatoriosByObra(obra._id);
        if (!relatorios.length) {
            console.warn('[RDO] Nenhum relatório retornado para obra', obra._id);
            return { quantidadeRelatorios: 0, totalHoras: '0.00', totalHorasExtras: '0.00', reports: [] };
        }

        const details = (await Promise.all(relatorios.map(r => RDOService.getRelatorioDetalhe(obra._id, r._id)))).filter(Boolean);

        let totalHoras = 0;
        let totalExtras = 0;
        const HORAS_PADRAO_DIA = 9;

        const parseHoras = (tempoStr) => {
            if (!tempoStr || typeof tempoStr !== 'string') return 0;
            const [h, m] = tempoStr.split(':').map(Number);
            return (h || 0) + (m || 0) / 60;
        };

        details.forEach(det => {
            const padrao = det?.maoDeObra?.padrao || [];
            padrao.forEach(item => {
                const horas = Number(item.quantidade) || 0;
                totalHoras += horas;
                if (horas > HORAS_PADRAO_DIA) totalExtras += horas - HORAS_PADRAO_DIA;
            });
            const pers = det?.maoDeObra?.personalizada || [];
            pers.forEach(item => {
                const horas = parseHoras(item.horasTrabalhadas);
                totalHoras += horas;
                if (horas > HORAS_PADRAO_DIA) totalExtras += horas - HORAS_PADRAO_DIA;
            });
        });

        return {
            quantidadeRelatorios: details.length,
            totalHoras: totalHoras.toFixed(2),
            totalHorasExtras: totalExtras.toFixed(2),
            reports: details,
            relatoriosRaw: details
        };
    },

    // Processar dados de RDO para analise (alinhado com calcHorasReport do legado)
    processRDOData: (reports = []) => {
        const horasPorDia = {};
        const horasExtrasPorDia = {};
        const horasNormaisPorDia = {};
        const horasPorFuncao = {};
        const funcionariosPorDia = {};
        const ocorrenciasPorDia = {};
        let totalHoras = 0;
        let totalExtras = 0;
        const totalFuncionarios = new Set();
        const techIdsSet = new Set();
        const PADRAO_DIA = 9;
        const techHours = {};
        const techExtraHours = {};

        const parseHoras = (hstr) => {
            if (typeof hstr === 'number') return hstr;
            if (typeof hstr === 'string') {
                if (hstr.includes(':')) {
                    const [h, m] = hstr.split(':').map(Number);
                    return (h || 0) + (m || 0) / 60;
                }
                const num = Number(hstr);
                return Number.isNaN(num) ? 0 : num;
            }
            return 0;
        };

        const parseDate = (val) => {
            if (!val) return null;
            let d = null;
            if (val instanceof Date) d = new Date(val.getTime());
            else if (typeof val === 'number') d = new Date(val);
            if (typeof val === 'string') {
                let str = val;
                if (str.includes('T')) str = str.split('T')[0];
                if (str.includes('/') && str.split('/').length === 3) {
                    const [dayStr, monthStr, yearStr] = str.split('/');
                    const year = yearStr.length === 2 ? `20${yearStr}` : yearStr;
                    d = new Date(`${year}-${monthStr}-${dayStr}`);
                }
                if (str.includes('-')) {
                    const [y, m, day] = str.split('-');
                    d = new Date(Number(y), Number(m) - 1, Number(day));
                }
            }
            if (!d) return null;
            if (Number.isNaN(d.getTime())) return null;
            d.setHours(12, 0, 0, 0);
            d.setDate(d.getDate() + 1); // ajuste solicitado: deslocar +1 dia
            return d;
        };

        reports.forEach(rep => {
            const rawDate = rep.data || rep.data_inicio || rep.dataInicio || rep.createdAt || rep.dataReferencia || rep.dataServiço || rep.dataServico || rep.dataRelatorio || rep.dataRel;
            const parsedDate = parseDate(rawDate);
            if (!parsedDate || Number.isNaN(parsedDate.getTime())) return;
            const pad = (n) => String(n).padStart(2, '0');
            const dateKey = `${parsedDate.getFullYear()}-${pad(parsedDate.getMonth() + 1)}-${pad(parsedDate.getDate())}`;
            if (!horasPorDia[dateKey]) horasPorDia[dateKey] = 0;
            if (!horasExtrasPorDia[dateKey]) horasExtrasPorDia[dateKey] = 0;
            if (!horasNormaisPorDia[dateKey]) horasNormaisPorDia[dateKey] = 0;
            const ocorrRaw = rep.ocorrencias || rep.ocorrencia || rep.ocorrenciaTexto || rep.ocorrencia_texto || rep.ocorrenciaDescricao || rep.ocorrencia;
            const ocorrTexto = Array.isArray(ocorrRaw)
                ? ocorrRaw
                    .filter(Boolean)
                    .map(o => typeof o === 'string' ? o : JSON.stringify(o))
                    .join('; ')
                : (typeof ocorrRaw === 'string' ? ocorrRaw.trim() : '');
            if (ocorrTexto) {
                ocorrenciasPorDia[dateKey] = ocorrTexto;
            }
const padrao = rep?.maoDeObra?.padrao || [];
            const pers = rep?.maoDeObra?.personalizada || [];

            padrao.forEach(p => {
                const horas = Number(p.quantidade) || 0;
                const extraHoras = Math.max(0, horas - PADRAO_DIA);
                const norm = horas - extraHoras;
                horasPorDia[dateKey] += horas;
                horasExtrasPorDia[dateKey] += extraHoras;
                horasNormaisPorDia[dateKey] += norm;
                const funcao = p.funcao || 'Outros';
                horasPorFuncao[funcao] = (horasPorFuncao[funcao] || 0) + horas;
                const techId = p.funcionario_id || p.nome || p.funcionario || p.descricao;
                if (techId) {
                    if (!funcionariosPorDia[dateKey]) funcionariosPorDia[dateKey] = new Set();
                    funcionariosPorDia[dateKey].add(techId);
                    totalFuncionarios.add(p.funcionario_id || techId);
                    techIdsSet.add(techId);
                }
                const nome = p.nome || p.funcionario || p.descricao || 'Técnico';
                techHours[nome] = (techHours[nome] || 0) + horas;
                techExtraHours[nome] = (techExtraHours[nome] || 0) + extraHoras;
                totalHoras += horas;
                totalExtras += extraHoras;
            });

            pers.forEach(mo => {
                const horas = parseHoras(mo.horasTrabalhadas);
                const extraHoras = Math.max(0, horas - PADRAO_DIA);
                const norm = horas - extraHoras;
                horasPorDia[dateKey] += horas;
                horasExtrasPorDia[dateKey] += extraHoras;
                horasNormaisPorDia[dateKey] += norm;
                const funcao = mo.funcao || 'Outros';
                horasPorFuncao[funcao] = (horasPorFuncao[funcao] || 0) + horas;
                const techId = mo.funcionario_id || mo.nome || mo.funcionario || mo.descricao;
                if (techId) {
                    if (!funcionariosPorDia[dateKey]) funcionariosPorDia[dateKey] = new Set();
                    funcionariosPorDia[dateKey].add(techId);
                    totalFuncionarios.add(mo.funcionario_id || techId);
                    techIdsSet.add(techId);
                }
                const nome = mo.nome || mo.funcionario || mo.descricao || 'Técnico';
                techHours[nome] = (techHours[nome] || 0) + horas;
                techExtraHours[nome] = (techExtraHours[nome] || 0) + extraHoras;
                totalHoras += horas;
                totalExtras += extraHoras;
            });
        });

        const funcionariosPorDiaCount = {};
        Object.keys(funcionariosPorDia).forEach(date => {
            funcionariosPorDiaCount[date] = funcionariosPorDia[date].size;
        });

        const diarios = Object.keys(horasPorDia).sort().map(date => ({
            data: date,
            horasNormais: horasNormaisPorDia[date] || 0,
            horasExtras: horasExtrasPorDia[date] || 0,
            total: horasPorDia[date] || 0,
            funcionarios: funcionariosPorDiaCount[date] || 0,
            hasOcorrencia: !!ocorrenciasPorDia[date],
            ocorrenciaTexto: ocorrenciasPorDia[date] || ''
        }));

        const totalFuncionariosFinal = totalFuncionarios.size || techIdsSet.size;

        return {
            horasPorDia,
            horasNormaisPorDia,
            horasExtrasPorDia,
            horasPorFuncao,
            funcionariosPorDia: funcionariosPorDiaCount,
            ocorrenciasPorDia,
            totalHoras,
            totalExtras,
            totalFuncionarios: totalFuncionariosFinal,
            mediaHorasDia: totalHoras / Math.max(1, Object.keys(horasPorDia).length),
            mediaFuncionariosDia: Object.keys(funcionariosPorDiaCount).length ? (Object.values(funcionariosPorDiaCount).reduce((a, b) => a + b, 0) / Object.keys(funcionariosPorDiaCount).length) : 0,
            techHours,
            techExtraHours,
            diarios,
        };
    },

    getHolidays: () => cfg.HOLIDAYS || []
};




