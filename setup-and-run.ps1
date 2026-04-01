# Script de PowerShell para instalar dependencias y ejecutar la aplicacion Next.js
# Ejecutar con: .\setup-and-run.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configuracion y Despliegue de la App" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Node.js esta instalado
Write-Host "Verificando Node.js..." -ForegroundColor Yellow
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if ($nodeCmd) {
    $nodeVersion = node --version 2>&1
    Write-Host "[OK] Node.js encontrado: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Node.js no esta instalado" -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor, instala Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Despues de instalar, reinicia la terminal y ejecuta este script nuevamente." -ForegroundColor Yellow
    exit 1
}

# Verificar si pnpm esta instalado
Write-Host ""
Write-Host "Verificando pnpm..." -ForegroundColor Yellow
$pnpmCmd = Get-Command pnpm -ErrorAction SilentlyContinue
$useNpm = $false

if ($pnpmCmd) {
    $pnpmVersion = pnpm --version 2>&1
    Write-Host "[OK] pnpm encontrado: v$pnpmVersion" -ForegroundColor Green
} else {
    Write-Host "[INFO] pnpm no esta instalado. Instalando..." -ForegroundColor Yellow
    $npmCmd = Get-Command npm -ErrorAction SilentlyContinue
    if ($npmCmd) {
        npm install -g pnpm 2>&1 | Out-Null
        $pnpmCmd = Get-Command pnpm -ErrorAction SilentlyContinue
        if ($pnpmCmd) {
            Write-Host "[OK] pnpm instalado correctamente" -ForegroundColor Green
        } else {
            Write-Host "[INFO] No se pudo instalar pnpm. Usando npm..." -ForegroundColor Yellow
            $useNpm = $true
        }
    } else {
        Write-Host "[ERROR] npm no esta disponible para instalar pnpm" -ForegroundColor Red
        exit 1
    }
}

# Verificar si npm esta disponible (como alternativa)
if ($useNpm -or -not $pnpmCmd) {
    Write-Host ""
    Write-Host "Verificando npm..." -ForegroundColor Yellow
    $npmCmd = Get-Command npm -ErrorAction SilentlyContinue
    if ($npmCmd) {
        $npmVersion = npm --version 2>&1
        Write-Host "[OK] npm encontrado: v$npmVersion" -ForegroundColor Green
        $useNpm = $true
    } else {
        Write-Host "[ERROR] npm no esta disponible" -ForegroundColor Red
        exit 1
    }
}

# Instalar dependencias
Write-Host ""
Write-Host "Instalando dependencias..." -ForegroundColor Yellow
if ($useNpm) {
    Write-Host "Usando npm..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Error al instalar dependencias" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Usando pnpm..." -ForegroundColor Cyan
    pnpm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Error al instalar dependencias" -ForegroundColor Red
        exit 1
    }
}
Write-Host "[OK] Dependencias instaladas correctamente" -ForegroundColor Green

# Iniciar servidor de desarrollo
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando servidor de desarrollo..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "La aplicacion estara disponible en: http://localhost:3000" -ForegroundColor Green
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

if ($useNpm) {
    npm run dev
} else {
    pnpm dev
}
