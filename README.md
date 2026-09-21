# Atelier Architecture — Next.js production rebuild v3

Reimplementación del diseño de Google Stitch como proyecto independiente en Next.js App Router, TypeScript y Framer Motion, preparado para GitHub y Vercel.

## Cambios principales de v3

### Scroll realmente continuo

Las escenas narrativas ya no usan `useSpring`.

- `Hero.tsx`, `BeforeAfter.tsx` y `Methodology.tsx` conectan `useScroll` directamente con `useTransform`.
- El progreso visual sigue el scroll 1:1 y no continúa “alcanzando” al usuario después de que el trackpad o la rueda se hayan detenido.
- Se han eliminado los tramos largos sin movimiento perceptible.
- Textos, fotografías, badges e indicadores mantienen desplazamiento progresivo mientras están visibles.

### Portada con zoom por scroll

La portada ahora es una escena sticky:

- Escritorio: `170svh`.
- Móvil: `155svh`.
- La fotografía crece progresivamente de `1.00` a `1.18` mientras se hace scroll.
- El encuadre sube ligeramente y el overlay se aclara para enseñar mejor la reforma.
- El texto se desplaza y desaparece de forma gradual antes de pasar a la siguiente sección.

### Mayor nitidez de fotografías

Las fotografías continúan usando `next/image`, pero las URLs remotas heredadas de Google Stitch se renderizan con `unoptimized`.

Esto evita una segunda recompresión en Next/Vercel y muestra directamente la máxima calidad disponible en el archivo remoto original. También se han eliminado promociones permanentes de capa en los bloques fotográficos que podían mantener una textura rasterizada a menor resolución durante los transforms.

Las imágenes críticas de las secuencias de scroll se solicitan de forma anticipada para reducir tirones durante los fundidos.

> El HTML de Stitch solo aporta URLs remotas, no los originales fotográficos. Si se reciben fotografías propias en alta resolución, lo ideal para la versión definitiva es guardarlas en `/public/images/` como WebP/AVIF de 2000–3000 px y dejar que Next.js las optimice desde local.

## Qué incluye

- Home y rutas limpias: `/servicios`, `/proyectos`, `/sobre-nosotros`, `/contacto`.
- Animaciones sticky de portada, “Secuencia de intervención” y “Metodología”.
- `next/image` en todas las fotografías.
- Metadatos únicos, canonical, Open Graph y Twitter Cards por página.
- `sitemap.xml` y `robots.txt` generados por Next.js.
- Schema.org `ProfessionalService`.
- HTML semántico, navegación móvil, skip link, ALT y soporte `prefers-reduced-motion`.
- Favicon, Apple Touch Icon y Open Graph image locales.
- Google Tag Manager / GA4 preparados por variables de entorno.
- Formulario con validación, honeypot y endpoint `/api/contact`, preparado para webhook.
- Sin dependencia de Google Stitch en ejecución.

## Variables de entorno

Copia `.env.example` a `.env.local` y completa lo necesario:

- `NEXT_PUBLIC_SITE_URL`: dominio final usado en canonical, sitemap y Open Graph.
- `NEXT_PUBLIC_GTM_ID`: ID de Google Tag Manager.
- `NEXT_PUBLIC_GA_ID`: ID de Google Analytics 4 si no se usa GTM.
- `CONTACT_WEBHOOK_URL`: URL HTTPS que recibirá el formulario como JSON.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm start
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Atelier Architecture production v3"
git branch -M main
git remote add origin TU_URL_DEL_REPOSITORIO
git push -u origin main
```

## Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel pulsa **Add New → Project**.
3. Importa el repositorio.
4. Framework Preset: **Next.js**.
5. Build Command: deja el valor automático (`npm run build`).
6. Añade las variables de entorno necesarias.
7. Pulsa **Deploy**.
8. Cuando tengas el dominio definitivo, configura `NEXT_PUBLIC_SITE_URL=https://tudominio.com` y vuelve a desplegar.

## Antes de publicar

Las páginas `/privacidad` y `/aviso-legal` siguen siendo marcadores no indexables porque el material fuente no aporta los datos fiscales/titularidad necesarios para redactar textos legales reales. Sustitúyelos antes del lanzamiento definitivo.

Consulta también `SCROLL_IMAGE_QUALITY.md` y `DEPLOY_GITHUB_VERCEL.md`.
