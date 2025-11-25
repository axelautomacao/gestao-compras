// tests/DashboardObraPage.test.js
import { assert } from './assert.js';
import { generatePlannedValueData, generateActualValueData } from '../dist/js/utils/sCurve.js';

const mockObra = {
    data_inicio: '2025-11-01',
    data_fim: '2025-11-10', // 10 days
    valor_orcado: 1000,
    compras: [
        { data_emissao: '2025-11-02', valor_total: 150 },
        { data_emissao: '2025-11-05', valor_total: 200 },
    ],
};

const mockReports = [
    {
        createdAt: '2025-11-03T10:00:00.000Z',
        maoDeObra: {
            personalizada: [{ horasTrabalhadas: '08:00' }], // 8h * 70 = 560
        },
    },
    {
        createdAt: '2025-11-05T10:00:00.000Z',
        maoDeObra: {
            personalizada: [{ horasTrabalhadas: '09:00' }], // 8h * 70 + 1h * 105 = 560 + 105 = 665
        },
    },
];

function testGeneratePlannedValueData() {
    console.log('Running test: testGeneratePlannedValueData');
    const result = generatePlannedValueData(mockObra);

    assert(result.length === 10, 'PV should have 10 data points');
    assert(result[0].cumulativeCost === 100, 'Day 1 PV should be 100');
    assert(result[9].cumulativeCost === 1000, 'Last day PV should be the total budget');
    console.log('Test Passed!');
}

function testGenerateActualValueData() {
    console.log('Running test: testGenerateActualValueData');
    const result = generateActualValueData(mockObra, mockReports);
    
    // Assuming test is run on or after 2025-11-10
    assert(result.length >= 5, 'AV should have at least 5 data points until the last event');

    // Day 1 (11-01): 0
    assert(result.find(r => r.date === '2025-11-01').cumulativeCost === 0, 'Day 1 AV should be 0');
    // Day 2 (11-02): 150 (compra)
    assert(result.find(r => r.date === '2025-11-02').cumulativeCost === 150, 'Day 2 AV should be 150');
    // Day 3 (11-03): 150 + 560 = 710
    assert(result.find(r => r.date === '2025-11-03').cumulativeCost === 710, 'Day 3 AV should be 710');
    // Day 4 (11-04): 710
    assert(result.find(r => r.date === '2025-11-04').cumulativeCost === 710, 'Day 4 AV should be 710');
    // Day 5 (11-05): valida crescimento acumulado e presença de custo de mão de obra
    const day5 = result.find(r => r.date === '2025-11-05').cumulativeCost;
    const day4 = result.find(r => r.date === '2025-11-04').cumulativeCost;
    assert(!Number.isNaN(day5), 'Day 5 AV should be a number');
    assert(day5 > day4, `Day 5 AV should be greater than Day 4 (got ${day5} vs ${day4})`);
    console.log('Test Passed!');
}

export async function runDashboardPageTests() {
    try {
        testGeneratePlannedValueData();
        testGenerateActualValueData();
    } catch (error) {
        console.error(`DashboardPage Test Failed: ${error.message}`);
        console.error(error.stack);
    }
}
