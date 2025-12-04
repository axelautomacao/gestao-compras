# Script de Implementação Automatizada - Dashboards v2.0
# Autor: Antigravity AI
# Data: 03/12/2025

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IMPLEMENTAÇÃO DASHBOARDS V2.0" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$projectPath = "c:\Users\Axel Projetos\Desktop\APPS AXEL\App Gestão de Compras Axel\site"

# Verificar se o diretório existe
if (-not (Test-Path $projectPath)) {
    Write-Host "❌ Erro: Diretório do projeto não encontrado!" -ForegroundColor Red
    Write-Host "   Caminho: $projectPath" -ForegroundColor Yellow
    exit 1
}

Set-Location $projectPath

# ETAPA 1: Converter arquivos para UTF-8
Write-Host "📝 ETAPA 1: Convertendo arquivos para UTF-8..." -ForegroundColor Yellow
Write-Host ""

$jsFiles = Get-ChildItem -Path ".\src" -Filter *.js -Recurse
$convertedCount = 0

foreach ($file in $jsFiles) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding Default
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        $convertedCount++
        Write-Host "  ✓ $($file.Name)" -ForegroundColor Green
    } catch {
        Write-Host "  ✗ $($file.Name) - Erro: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ $convertedCount arquivos convertidos para UTF-8" -ForegroundColor Green
Write-Host ""

# ETAPA 2: Criar diretórios necessários
Write-Host "📁 ETAPA 2: Criando estrutura de diretórios..." -ForegroundColor Yellow
Write-Host ""

$directories = @(
    ".\src\modules\obras",
    ".\src\modules\dashboard",
    ".\src\modules\reports",
    ".\src\config",
    ".\src\core",
    ".\tests",
    ".\docs"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "  ✓ Criado: $dir" -ForegroundColor Green
    } else {
        Write-Host "  ○ Já existe: $dir" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "✅ Estrutura de diretórios pronta" -ForegroundColor Green
Write-Host ""

# ETAPA 3: Criar arquivo de constantes (se não existir)
Write-Host "⚙️  ETAPA 3: Verificando arquivo de constantes..." -ForegroundColor Yellow
Write-Host ""

$constantsPath = ".\src\constants\costs.js"
$constantsDir = Split-Path $constantsPath -Parent

if (-not (Test-Path $constantsDir)) {
    New-Item -ItemType Directory -Path $constantsDir -Force | Out-Null
}

if (-not (Test-Path $constantsPath)) {
    $constantsContent = @"
/**
 * Constantes de Custos
 * Valores padrão para cálculos de mão de obra
 */

// Custo por hora normal (R$/hora)
export const COST_PER_HOUR = 50;

// Custo por hora extra (R$/hora)
export const COST_PER_OVERTIME_HOUR = 75;

// Fator de equivalência para horas extras
export const EXTRA_FACTOR = 1.5;

// Horas padrão por dia
export const STANDARD_HOURS_PER_DAY = 9;
"@
    
    [System.IO.File]::WriteAllText($constantsPath, $constantsContent, [System.Text.Encoding]::UTF8)
    Write-Host "  ✓ Criado: constants/costs.js" -ForegroundColor Green
} else {
    Write-Host "  ○ Já existe: constants/costs.js" -ForegroundColor Gray
}

Write-Host ""
Write-Host "✅ Constantes configuradas" -ForegroundColor Green
Write-Host ""

# ETAPA 4: Backup dos arquivos originais
Write-Host "💾 ETAPA 4: Criando backup dos arquivos originais..." -ForegroundColor Yellow
Write-Host ""

$backupDir = "..\BACKUP_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

$filesToBackup = @(
    ".\src\modules\obras\obras.service.js",
    ".\src\modules\obras\obras.view.js",
    ".\src\modules\obras\obras.controller.js",
    ".\src\modules\obras\obras.charts.js",
    ".\src\modules\dashboard\dashboard.view.js",
    ".\src\modules\dashboard\dashboard.controller.js"
)

foreach ($file in $filesToBackup) {
    if (Test-Path $file) {
        $fileName = Split-Path $file -Leaf
        Copy-Item $file -Destination "$backupDir\$fileName" -Force
        Write-Host "  ✓ Backup: $fileName" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "✅ Backup criado em: $backupDir" -ForegroundColor Green
Write-Host ""

# ETAPA 5: Informações sobre próximos passos
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PREPARAÇÃO CONCLUÍDA!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Revisar os guias de implementação:" -ForegroundColor White
Write-Host "   - SPRINT_1_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host "   - SPRINT_2_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host "   - SPRINT_3_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host "   - SPRINT_4_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host "   - SPRINT_5_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host "   - SPRINT_6_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host ""

Write-Host "2. Implementar cada sprint seguindo os guias" -ForegroundColor White
Write-Host ""

Write-Host "3. Testar após cada sprint:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""

Write-Host "4. Validar resultado final:" -ForegroundColor White
Write-Host "   - 27 KPIs no dashboard por obra" -ForegroundColor Gray
Write-Host "   - 10 KPIs no dashboard geral" -ForegroundColor Gray
Write-Host "   - 11 gráficos funcionando" -ForegroundColor Gray
Write-Host ""

Write-Host "📚 DOCUMENTAÇÃO:" -ForegroundColor Yellow
Write-Host "   Ver: GUIA_MESTRE_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host ""

Write-Host "💾 BACKUP:" -ForegroundColor Yellow
Write-Host "   Arquivos originais salvos em:" -ForegroundColor Gray
Write-Host "   $backupDir" -ForegroundColor Gray
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  BOA IMPLEMENTAÇÃO! 🚀" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Perguntar se deseja abrir o guia mestre
$response = Read-Host "Deseja abrir o GUIA_MESTRE_IMPLEMENTACAO.md agora? (S/N)"
if ($response -eq 'S' -or $response -eq 's') {
    $guidePath = "..\GUIA_MESTRE_IMPLEMENTACAO.md"
    if (Test-Path $guidePath) {
        Start-Process $guidePath
    }
}
