@echo off
REM Script rápido para ejecutar la app (asume que las dependencias ya están instaladas)
REM Ejecutar haciendo doble clic o desde la terminal

echo Iniciando servidor de desarrollo...
echo La aplicación estará disponible en: http://localhost:3000
echo Presiona Ctrl+C para detener el servidor
echo.

where pnpm >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    call pnpm dev
) else (
    where npm >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        call npm run dev
    ) else (
        echo [ERROR] No se encontró pnpm ni npm
        echo Ejecuta primero: setup-and-run.bat
        pause
        exit /b 1
    )
)
