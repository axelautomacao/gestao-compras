import { runApiTests } from './diarioDeObraApi.test.js';
import { runDashboardPageTests } from './DashboardObraPage.test.js';

async function runAllTests() {
  console.log('--- Starting All Tests ---');

  await runApiTests();
  console.log('--- API Service Tests Finished ---');

  await runDashboardPageTests();
  console.log('--- Dashboard Page Logic Tests Finished ---');

  console.log('--- All Tests Completed ---');
}

runAllTests();
