// tests/diarioDeObraApi.test.js
import { assert } from './assert.js';
import * as api from '../dist/js/services/diarioDeObraApi.js';

// Config de token fake para os testes
global.__RDO_API_CONFIG = { TOKEN: 'TEST_TOKEN' };

// Mocking global fetch
global.fetch = async (url, options) => {
    console.log(`Mock Fetch URL: ${url}`);
    
    if (url.includes('/obras/ID_DA_OBRA/relatorios/RELATORIO_1')) {
        return {
            ok: true,
            json: async () => ({
                _id: 'RELATORIO_1',
                createdAt: '2025-11-20T10:00:00.000Z',
                maoDeObra: {
                    personalizada: [
                        { nome: 'Funcionario A', horasTrabalhadas: '09:00' }, // 9h -> 1h extra
                        { nome: 'Funcionario B', horasTrabalhadas: '08:00' }, // 8h
                    ],
                },
            }),
        };
    }
    
    if (url.includes('/obras/ID_DA_OBRA/relatorios/RELATORIO_2')) {
        return {
            ok: true,
            json: async () => ({
                _id: 'RELATORIO_2',
                createdAt: '2025-11-21T10:00:00.000Z',
                maoDeObra: {
                    personalizada: [
                        { nome: 'Funcionario A', horasTrabalhadas: '10:30' }, // 10.5h -> 2.5h extra
                    ],
                },
            }),
        };
    }

    if (url.includes('/obras/ID_DA_OBRA/relatorios')) {
        return {
            ok: true,
            json: async () => ([
                { _id: 'RELATORIO_1' },
                { _id: 'RELATORIO_2' },
            ]),
        };
    }

    if (url.includes('/obras')) {
        return {
            ok: true,
            json: async () => ([
                { _id: 'ID_DA_OBRA', nome: 'PROJETO TESTE - 12345' },
                { _id: 'ID_OUTRA_OBRA', nome: 'OUTRO PROJETO - 54321' },
            ]),
        };
    }

    return {
        ok: false,
        statusText: 'Not Found',
        json: async () => ({ message: 'Not Found' }),
    };
};

async function testGetIntegratedDataForObra_Success() {
    console.log('Running test: testGetIntegratedDataForObra_Success');
    const result = await api.getIntegratedDataForObra('12345');
    
    assert(result !== null, 'Result should not be null');
    assert(result.quantidadeRelatorios === 2, `Expected 2 reports, but got ${result.quantidadeRelatorios}`);
    assert(result.totalHoras === '27.50', `Expected 27.50 total hours, but got ${result.totalHoras}`);
    assert(result.totalHorasExtras === '1.50', `Expected 1.50 extra hours, but got ${result.totalHorasExtras}`);
    assert(result.reports.length === 2, `Expected 2 detailed reports, but got ${result.reports.length}`);
    assert(result.reports[0]._id === 'RELATORIO_1', 'First report ID is incorrect');
    console.log('Test Passed!');
}

async function testGetIntegratedDataForObra_NotFound() {
    console.log('Running test: testGetIntegratedDataForObra_NotFound');
    const result = await api.getIntegratedDataForObra('99999'); // Non-existent OS
    assert(result === null, 'Result should be null for a non-existent OS number');
    console.log('Test Passed!');
}

export async function runApiTests() {
    try {
        await testGetIntegratedDataForObra_Success();
        await testGetIntegratedDataForObra_NotFound();
    } catch (error) {
        console.error(`API Test Failed: ${error.message}`);
        console.error(error.stack);
    }
}
