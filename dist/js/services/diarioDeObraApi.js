/**
 * @file Módulo para interagir com a API externa do Diário de Obra (RDO).
 */

// A configuração agora é lida do objeto global definido em env.js
const getToken = () => (globalThis.__RDO_API_CONFIG || globalThis.window?.__RDO_API_CONFIG || {}).TOKEN;
const BASE_URL = 'https://apiexterna.diariodeobra.app/v1'; // Hardcoded como não está no env.js
const HORAS_PADRAO_DIA = 9;

/**
 * Converte uma string de tempo "HH:mm" para um número decimal de horas.
 * @param {string} tempoStr - A string de tempo.
 * @returns {number} O número de horas.
 * @private
 */
function parseHoras(tempoStr) {
  if (!tempoStr || typeof tempoStr !== 'string') return 0;
  const [horas, minutos] = tempoStr.split(':').map(Number);
  return (horas || 0) + (minutos || 0) / 60;
}

/**
 * Função genérica para realizar chamadas à API do Diário de Obra.
 * @param {string} path - O caminho do endpoint da API (ex: '/obras').
 * @param {object} [options={}] - Opções para a requisição fetch.
 * @returns {Promise<any>} A resposta da API em formato JSON.
 * @private
 */
async function fetchApi(path, options = {}) {
  const token = getToken();
  if (!token) {
    throw new Error('Token da API do Diario de Obra nao encontrado. Verifique a configuracao em env.js.');
  }

  const headers = {
    ...options.headers,
    'token': token,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  if (!response.ok) {
    console.error(`Erro na API RDO ao acessar ${path}: ${response.statusText}`);
    throw new Error(`Erro na API RDO: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Busca a lista de todas as obras na API externa.
 * @returns {Promise<object[]>} Uma promessa que resolve para um array de objetos de obra.
 */
export async function getAllObras() {
  return fetchApi('/obras');
}

/**
 * Busca os detalhes de um relatório específico.
 * @param {string} obraId - O ID da obra.
 * @param {string} relatorioId - O ID do relatório.
 * @returns {Promise<object>} Uma promessa que resolve para o objeto de detalhes do relatório.
 */
export async function getRelatorioDetails(obraId, relatorioId) {
  return fetchApi(`/obras/${obraId}/relatorios/${relatorioId}`);
}

/**
 * Encontra uma obra na API externa com base no número da OS no final do nome.
 * @param {string} osNumber - O número da OS a ser buscado.
 * @returns {Promise<object|null>} Uma promessa que resolve para o objeto da obra encontrada, ou null se não for encontrada.
 */
export async function findObraByOsNumberInName(osNumber) {
  const todasObras = await getAllObras();
  if (!todasObras || todasObras.length === 0) {
    return null;
  }
  const osString = String(osNumber);
  return todasObras.find(obra => {
    const match = obra.nome.match(/(\d+)$/);
    return match && match[1] === osString;
  });
}

/**
 * Busca a lista de todos os relatórios de uma obra específica.
 * @param {string} obraId - O ID da obra.
 * @returns {Promise<object[]>} Uma promessa que resolve para um array de objetos de relatório (versão simplificada).
 */
export async function getRelatorios(obraId) {
  return fetchApi(`/obras/${obraId}/relatorios`);
}

/**
 * Orquestra a busca de dados integrados de uma obra a partir do número da OS.
 * Busca a obra, seus relatórios, e calcula as horas totais e extras.
 * @param {string} osNumber - O número da OS da obra.
 * @returns {Promise<{quantidadeRelatorios: number, totalHoras: string, totalHorasExtras: string, reports: object[]}|null>} 
 * Uma promessa que resolve para um objeto com os dados integrados, ou null se a obra não for encontrada.
 */
export async function getIntegratedDataForObra(osNumber) {
  console.log(`Buscando dados integrados para a OS RDO: ${osNumber}`);
  const obra = await findObraByOsNumberInName(osNumber);

  if (!obra) {
    console.log('Obra não encontrada na API RDO.');
    return null;
  }

  const relatoriosList = await getRelatorios(obra._id);
  if (!relatoriosList || relatoriosList.length === 0) {
    return { quantidadeRelatorios: 0, totalHoras: '0.00', totalHorasExtras: '0.00', reports: [] };
  }

  const reportDetailPromises = relatoriosList.map(relatorioInfo =>
    getRelatorioDetails(obra._id, relatorioInfo._id)
  );
  const detailedReports = (await Promise.all(reportDetailPromises)).filter(Boolean);

  let totalHoras = 0;
  let totalHorasExtras = 0;

  for (const detalhesRelatorio of detailedReports) {
    if (detalhesRelatorio.maoDeObra) {
      // 1. Processar Mão de Obra Padrão (onde as horas geralmente estão, no campo 'quantidade')
      if (detalhesRelatorio.maoDeObra.padrao && Array.isArray(detalhesRelatorio.maoDeObra.padrao)) {
        for (const item of detalhesRelatorio.maoDeObra.padrao) {
          const horas = Number(item.quantidade) || 0;
          totalHoras += horas;
          if (horas > HORAS_PADRAO_DIA) {
            totalHorasExtras += horas - HORAS_PADRAO_DIA;
          }
        }
      }

      // 2. Processar Mão de Obra Personalizada (mantendo compatibilidade)
      if (detalhesRelatorio.maoDeObra.personalizada && Array.isArray(detalhesRelatorio.maoDeObra.personalizada)) {
        for (const maoDeObra of detalhesRelatorio.maoDeObra.personalizada) {
          const horasTrabalhadas = parseHoras(maoDeObra.horasTrabalhadas);
          totalHoras += horasTrabalhadas;
          if (horasTrabalhadas > HORAS_PADRAO_DIA) {
            totalHorasExtras += horasTrabalhadas - HORAS_PADRAO_DIA;
          }
        }
      }
    }
  }

  const result = {
    quantidadeRelatorios: detailedReports.length,
    totalHoras: totalHoras.toFixed(2),
    totalHorasExtras: totalHorasExtras.toFixed(2),
    reports: detailedReports,
  };

  console.log('Dados integrados RDO processados:', result);
  return result;
}



