// Quick manual check for calculateFinancialSummary (run: node tests/manual/financial-summary.sample.js)
import { ObrasService } from '../../site/src/modules/obras/obras.service.js';

const mockObraId = 'obra-teste';
const mockObra = {
  id: mockObraId,
  valor_orcado: 100000,
  horas_previstas: 100,
  horas_extras_previstas: 20
};

const mockCompras = [
  { valor_total: 25000 },
  { valor_total: 15000 },
];

const mockRdo = {
  totalHoras: 80,
  totalExtras: 10
};

async function run() {
  // Monkey-patch getObraById to avoid Firestore access in this sample
  ObrasService.getObraById = async () => mockObra;

  const summary = await ObrasService.calculateFinancialSummary(mockObraId, mockCompras, mockRdo);
  console.log('Resumo financeiro (amostra):', summary);
}

run().catch(console.error);
