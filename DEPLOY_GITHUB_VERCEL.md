# Subida a GitHub y despliegue en Vercel — v3

## 1. Qué debes subir

Sube la carpeta completa del proyecto, incluyendo:

- `app/`
- `components/`
- `lib/`
- `public/`
- `.env.example`
- `.gitignore`
- `next.config.ts`
- `package.json`
- `tsconfig.json`
- `vercel.json`
- `README.md`
- `SCROLL_IMAGE_QUALITY.md`

No subas `.env.local`, `.next/` ni `node_modules/`.

## 2. GitHub

Desde la raíz del proyecto:

```bash
git init
git add .
git commit -m "Atelier Architecture production v3"
git branch -M main
git remote add origin TU_URL_DEL_REPOSITORIO
git push -u origin main
```

## 3. Vercel

1. En Vercel crea **Add New → Project**.
2. Importa el repositorio de GitHub.
3. Framework Preset: **Next.js**.
4. Build Command: automático (`npm run build`).
5. Output Directory: automático de Next.js.
6. Node.js: 20 o superior.
7. Pulsa **Deploy**.

## 4. Variables de entorno

Añade en **Project Settings → Environment Variables** solo las que vayas a utilizar:

```text
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_WEBHOOK_URL=https://tu-endpoint-de-formulario.com
```

Después de cambiar `NEXT_PUBLIC_SITE_URL`, vuelve a desplegar para que canonical, Open Graph y sitemap utilicen el dominio definitivo.

## 5. Qué se ha corregido en esta versión

### Scroll

- Ya no se usa `useSpring` en las escenas principales.
- `useScroll` alimenta directamente a `useTransform`.
- El movimiento responde al scroll en cada frame sin retardo ni efecto de “enganche”.
- La portada es sticky y la fotografía se amplía progresivamente mientras haces scroll.

### Imágenes

- Se mantiene `next/image`.
- Las imágenes remotas heredadas de Stitch usan `unoptimized` para evitar una segunda recompresión por Next/Vercel.
- Hero y secuencias críticas se cargan con prioridad/eager según su posición.
- Se han reducido capas promovidas de forma permanente durante los transforms para evitar pérdida de nitidez aparente.

## 6. Comprobación después del deploy

Revisa especialmente:

- El zoom continuo de la portada.
- Que la animación siga el trackpad/rueda sin quedarse retrasada.
- La transición continua entre los tres estados de la reforma.
- La metodología sobre fondo oscuro.
- La nitidez de las fotografías en monitor Retina/HiDPI.
- Móvil y tablet.
- Menú responsive.
- Formulario.
- `/sitemap.xml`.
- `/robots.txt`.
- Canonical, favicon y Open Graph.

## 7. Si quieres todavía más calidad fotográfica

La limitación restante depende de los archivos originales proporcionados por Google Stitch. Para una entrega final con fotografía de máxima calidad:

1. Sustituye las URLs de `lib/content.ts` por archivos propios.
2. Guarda los originales en `public/images/`.
3. Recomendación: 2000–3000 px en el lado largo.
4. Exporta WebP o AVIF con calidad alta.
5. Retira `unoptimized` de esas imágenes locales para que Next genere los tamaños responsive.
