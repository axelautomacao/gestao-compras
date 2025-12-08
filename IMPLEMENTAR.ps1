# Script de Preparação - Dashboards v2.0
# Funções: normalizar UTF-8, garantir pastas, criar constantes (se faltarem) e backup dos principais arquivos.

$projectPath = Join-Path $PSScriptRoot "site"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IMPLEMENTACAO DASHBOARDS V2.0" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Validar caminho
if (-not (Test-Path $projectPath)) {
    Write-Host "[ERRO] Diretório do projeto não encontrado:" $projectPath -ForegroundColor Red
    exit 1
}

Set-Location $projectPath

# Etapa 1: Converter arquivos .js para UTF-8
Write-Host "[1/5] Convertendo arquivos .js para UTF-8..." -ForegroundColor Yellow
$jsFiles = Get-ChildItem -Path ".\src" -Filter *.js -Recurse
$converted = 0
foreach ($file in $jsFiles) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding Default
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        $converted++
        Write-Host "  OK  $($file.FullName)" -ForegroundColor Green
    } catch {
        Write-Host "  FAIL $($file.FullName) -> $_" -ForegroundColor Red
    }
}
Write-Host "Convertidos: $converted arquivo(s)" -ForegroundColor Green
Write-Host ""

# Etapa 2: Estrutura de diretórios mínima
Write-Host "[2/5] Garantindo estrutura de diretórios..." -ForegroundColor Yellow
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
        Write-Host "  Criado: $dir" -ForegroundColor Green
    } else {
        Write-Host "  OK     $dir" -ForegroundColor DarkGray
    }
}
Write-Host ""

# Etapa 3: Arquivo de constantes (não sobrescreve se existir)
Write-Host "[3/5] Verificando constants/costs.js..." -ForegroundColor Yellow
$constantsPath = ".\src\constants\costs.js"
if (-not (Test-Path (Split-Path $constantsPath -Parent))) {
    New-Item -ItemType Directory -Path (Split-Path $constantsPath -Parent) -Force | Out-Null
}
if (-not (Test-Path $constantsPath)) {
    $constantsContent = @"
/**
 * Constantes de Custos
 * Valores padrão para cálculos de mão de obra
 */

// Custo por hora normal (R$/hora)
export const COST_PER_HOUR = 70;

// Custo por hora extra (R$/hora)
export const COST_PER_OVERTIME_HOUR = 105;

// Fator de equivalência para horas extras
export const EXTRA_FACTOR = 1.5;

// Horas padrão por dia
export const STANDARD_HOURS_PER_DAY = 9;
"@
    [System.IO.File]::WriteAllText($constantsPath, $constantsContent, [System.Text.Encoding]::UTF8)
    Write-Host "  Criado: $constantsPath" -ForegroundColor Green
} else {
    Write-Host "  OK     $constantsPath" -ForegroundColor DarkGray
}
Write-Host ""

# Etapa 4: Backup dos principais arquivos
Write-Host "[4/5] Criando backup dos arquivos principais..." -ForegroundColor Yellow
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
        Copy-Item $file -Destination (Join-Path $backupDir (Split-Path $file -Leaf)) -Force
        Write-Host "  Backup: $file" -ForegroundColor Green
    }
}
Write-Host "Backup salvo em: $backupDir" -ForegroundColor Green
Write-Host ""

# Etapa 5: Guia rápido
Write-Host "[5/5] Pronto! Próximos passos:" -ForegroundColor Yellow
Write-Host "  - Ler GUIA_MESTRE_IMPLEMENTACAO.md" -ForegroundColor Gray
Write-Host "  - Seguir SPRINT_1 a SPRINT_6" -ForegroundColor Gray
Write-Host "  - Rodar npm run dev para validar cada sprint" -ForegroundColor Gray
Write-Host ""
Write-Host "Processo concluído." -ForegroundColor Cyan

# Perguntar se deseja abrir o guia mestre
$resp = Read-Host "Deseja abrir o GUIA_MESTRE_IMPLEMENTACAO.md agora? (S/N)"
if ($resp -match '^[sS]$') {
    $guidePath = "..\GUIA_MESTRE_IMPLEMENTACAO.md"
    if (Test-Path $guidePath) {
        Start-Process $guidePath
    } else {
        Write-Host "Guia não encontrado em $guidePath" -ForegroundColor Red
    }
}
