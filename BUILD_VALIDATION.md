# Validación V7

Comprobaciones realizadas en el proyecto generado:

- Sintaxis TS/TSX validada mediante el compilador TypeScript en todos los archivos de aplicación y componentes.
- Balance de llaves CSS correcto.
- Todas las rutas locales `/images/...` utilizadas en código existen en `/public/images/`.
- No se utiliza ninguna etiqueta `<img>` en los componentes.
- Las seis instancias de `next/image` incluyen `quality={90}`.
- Solo la imagen inicial del hero utiliza `priority`.
- `next.config.ts` no contiene `remotePatterns`.
- AVIF y WebP permanecen habilitados.

## npm run build

Se ejecutó `npm run build` en este entorno. No puede iniciarse porque no existe `node_modules` y el binario `next` no está instalado localmente (`next: not found`). El entorno de ejecución no dispone de acceso a npm para instalar las dependencias.

El workflow `.github/workflows/build.yml` permanece incluido para ejecutar la instalación y el build automáticamente al subir el repositorio a GitHub.
