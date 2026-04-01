@echo off
REM Script batch para instalar dependencias y ejecutar la aplicación Next.js
REM Ejecutar haciendo doble clic o desde la terminal

echo ========================================
echo   Configuración y Despliegue de la App
echo ========================================
echo.

REM Verificar si Node.js está instalado
echo Verificando Node.js...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js no está instalado
    echo.
    echo Por favor, instala Node.js desde: https://nodejs.org/
    echo Después de instalar, reinicia la terminal y ejecuta este script nuevamente.
    pause
    exit /b 1
)

node --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo [OK] Node.js encontrado: %NODE_VERSION%
)

REM Verificar si pnpm está instalado
echo.
echo Verificando pnpm...
where pnpm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo pnpm no está instalado. Instalando...
    call npm install -g pnpm
    if %ERRORLEVEL% NEQ 0 (
        echo [ADVERTENCIA] No se pudo instalar pnpm. Usando npm...
        set USE_NPM=1
    ) else (
        echo [OK] pnpm instalado correctamente
    )
) else (
    for /f "tokens=*" %%i in ('pnpm --version') do set PNPM_VERSION=%%i
    echo [OK] pnpm encontrado: v%PNPM_VERSION%
)

REM Verificar si npm está disponible (como alternativa)
if defined USE_NPM (
    echo.
    echo Verificando npm...
    where npm >nul 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] npm no está disponible
        pause
        exit /b 1
    )
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo [OK] npm encontrado: v%NPM_VERSION%
)

REM Instalar dependencias
echo.
echo Instalando dependencias...
if defined USE_NPM (
    echo Usando npm...
    call npm install
) else (
    echo Usando pnpm...
    call pnpm install
)

if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Error al instalar dependencias
    pause
    exit /b 1
)

echo [OK] Dependencias instaladas correctamente

REM Iniciar servidor de desarrollo
echo.
echo ========================================
echo   Iniciando servidor de desarrollo...
echo ========================================
echo.
echo La aplicación estará disponible en: http://localhost:3000
echo Presiona Ctrl+C para detener el servidor
echo.

if defined USE_NPM (
    call npm run dev
) else (
    call pnpm dev
)

pause
