# H-B Spa: e-Commerce

Sitio web de H-B implementado en React (Vite) + Django.

## Ejecutar el FrontEnd (Vite)

Requisitos:
- Node.js 18+ (recomendado 20 LTS) y npm.

Si no tienes Node/npm:
- Opción 1 (recomendada): usa nvm para instalar Node 20 LTS.
  - Instala nvm (macOS): sigue https://github.com/nvm-sh/nvm#installing-and-updating
  - Luego: `nvm install 20 && nvm use 20`
- Opción 2: Homebrew en macOS: `brew install node`

Pasos para arrancar el sitio:
1) Ir al proyecto de Vite: `cd FrontEnd/react-app`
2) Instalar dependencias (usa el lockfile): `npm ci` (o `npm install` si falla)
3) Levantar el servidor de dev: `npm run dev`
4) Abre: http://localhost:5173

Tips / problemas comunes:
- Puerto en uso: `npm run dev -- --port 5174` y abre http://localhost:5174
- Borrar caché: `rm -rf node_modules package-lock.json && npm install`
- Permisos/Entitlements en macOS: si npm no se encuentra, cierra/abre la terminal para refrescar el PATH.

## Ejecutar el BackEnd (Django)

Requisitos:
- Python 3.10+ (el repo usa 3.13), pip y venv.

Pasos básicos:
1) `cd BackEnd`
2) (opcional) crear entorno: `python3 -m venv .venv && source .venv/bin/activate`
3) Instalar dependencias (si hay requirements.txt)
4) Migraciones: `python manage.py migrate`
5) Correr: `python manage.py runserver` (http://127.0.0.1:8000)

## Estructura relevante
- `FrontEnd/react-app/`: app de Vite/React
- `BackEnd/`: proyecto Django

## Notas
- `BackEnd/db.sqlite3` y carpetas de build/node_modules están ignoradas por Git.
- Si antes `FrontEnd` era un repo separado, ya fue convertido a carpeta normal dentro de este repo.
