# Validación V5

Se han revisado las referencias de imágenes, el uso de `next/image`, los estilos responsive y la ausencia de URLs de Google Stitch en el código del proyecto.

El comando `npm run build` no puede ejecutarse en este entorno porque las dependencias del proyecto no están instaladas. Se intentó `npm install`, pero el acceso al registro npm agotó el tiempo de espera. Por ello `next` no está disponible localmente en esta sesión.

En GitHub/Vercel, con acceso normal al registro npm, la secuencia esperada es:

```bash
npm install
npm run build
```

El workflow incluido en `.github/workflows/build.yml` realiza esa comprobación automáticamente.
