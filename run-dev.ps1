# Script rápido para ejecutar la app (asume que las dependencias ya están instaladas)
# Ejecutar con: .\run-dev.ps1

Write-Host "Iniciando servidor de desarrollo..." -ForegroundColor Cyan
Write-Host "La aplicación estará disponible en: http://localhost:3000" -ForegroundColor Green
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

# Verificar si pnpm está disponible
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm dev
} elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    npm run dev
} else {
    Write-Host "Error: No se encontró pnpm ni npm" -ForegroundColor Red
    Write-Host "Ejecuta primero: .\setup-and-run.ps1" -ForegroundColor Yellow
    exit 1
}
