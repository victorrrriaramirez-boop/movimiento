# Validación V8

Validaciones realizadas en el proyecto:

- 28 archivos TypeScript/TSX transpilan sin errores sintácticos con TypeScript 5.8.3.
- CSS con llaves balanceadas.
- No existen etiquetas `<img>` en componentes TSX.
- No quedan referencias a `lh3.googleusercontent.com` ni `aida-public`.
- Todas las imágenes de contenido están alojadas en `/public/images/`.
- Los originales nítidos principales tienen 3000 px de ancho.
- La nueva escena de material usa `next/image`, `quality={90}`, `sizes="100vw"` y transformaciones compositor-friendly.
- La versión desenfocada del travertino se genera previamente como archivo local para evitar `filter: blur()` durante el scroll.

## `npm run build`

Se intentó instalar las dependencias con `npm install --no-audit --no-fund`, pero la operación agotó el tiempo de espera de red en este entorno antes de crear `node_modules`. Por tanto no es posible ejecutar aquí un build real de Next.js.

El workflow `.github/workflows/build.yml` permanece incluido y ejecuta `npm install` y `npm run build` al subir el proyecto a GitHub.
