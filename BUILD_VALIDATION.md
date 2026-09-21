# Validación de build

## Comprobaciones realizadas en esta entrega

- Todos los archivos TypeScript/TSX pasan una comprobación de sintaxis con TypeScript.
- `app/globals.css` se ha parseado sin errores y sus llaves están balanceadas.
- No existen etiquetas `<img>` en `app/`, `components/` o `lib/`; las imágenes de interfaz usan `next/image`.
- No existen URLs `lh3.googleusercontent.com/aida-public` ni `remotePatterns` de Google en el código.
- Solo el hero utiliza `priority` en `next/image`.
- Todas las imágenes de `/public/images/` tienen 3000 px de ancho.
- Todas las imágenes de contenido tienen `quality={90}` y `sizes` definido.
- AVIF y WebP están configurados en `next.config.ts`.

## `npm run build`

Se intentó ejecutar el build en el entorno de generación. El comando no pudo arrancar porque este entorno no tiene las dependencias npm instaladas y tampoco tiene resolución de red hacia `registry.npmjs.org`; por ello `next` no está disponible localmente.

El proyecto incluye `.github/workflows/build.yml` para ejecutar automáticamente `npm install` y `npm run build` al hacer push o abrir un pull request en GitHub. Vercel también instalará las dependencias antes de ejecutar el build.
