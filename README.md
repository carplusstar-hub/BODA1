# Lovable app clone

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/carplusstar-5201s-projects/v0-lovable-app-clone)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/fvfGLhOMLrG)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/carplusstar-5201s-projects/v0-lovable-app-clone](https://vercel.com/carplusstar-5201s-projects/v0-lovable-app-clone)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/fvfGLhOMLrG](https://v0.app/chat/fvfGLhOMLrG)**

## Desarrollo Local

### Requisitos Previos

- Node.js (versión LTS recomendada) - [Descargar aquí](https://nodejs.org/)

### Instalación y Ejecución Rápida

#### Opción 1: Script Automatizado (Recomendado)

**Windows PowerShell:**
```powershell
.\setup-and-run.ps1
```

**Windows CMD (doble clic o desde terminal):**
```cmd
setup-and-run.bat
```

Este script automáticamente:
- ✅ Verifica si Node.js está instalado
- ✅ Instala pnpm si no está disponible
- ✅ Instala todas las dependencias del proyecto
- ✅ Inicia el servidor de desarrollo

#### Opción 2: Ejecución Manual

1. **Instalar dependencias:**
   ```bash
   pnpm install
   # o
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

3. **Abrir en el navegador:**
   - La aplicación estará disponible en `http://localhost:3000`

#### Scripts Rápidos (después de la primera instalación)

Si ya instalaste las dependencias, puedes usar los scripts rápidos:

**PowerShell:**
```powershell
.\run-dev.ps1
```

**CMD:**
```cmd
run-dev.bat
```

### Scripts Disponibles

- `setup-and-run.ps1` / `setup-and-run.bat` - Instalación completa y ejecución
- `run-dev.ps1` / `run-dev.bat` - Ejecución rápida (requiere dependencias instaladas)
- `npm run dev` / `pnpm dev` - Inicia el servidor de desarrollo
- `npm run build` / `pnpm build` - Construye la aplicación para producción
- `npm start` / `pnpm start` - Inicia el servidor de producción

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository