# Atelier Architecture — Next.js production rebuild

Reimplementación del diseño original de Google Stitch como un proyecto independiente en Next.js App Router, TypeScript y Framer Motion.

## Qué incluye

- Home y rutas limpias: `/servicios`, `/proyectos`, `/sobre-nosotros`, `/contacto`.
- Animaciones sticky de “Secuencia de intervención” y “Metodología” con `useScroll` + `useTransform` de Framer Motion.
- `next/image` en todas las imágenes y negociación WebP configurada en `next.config.ts`.
- Metadatos únicos, canonical, Open Graph y Twitter Cards por página.
- `sitemap.xml` y `robots.txt` generados por Next.js.
- Schema.org `ProfessionalService` con los datos presentes en el diseño fuente.
- HTML semántico, navegación móvil, skip link, ALT y soporte `prefers-reduced-motion`.
- Favicon, Apple Touch Icon y Open Graph image locales.
- Google Tag Manager / GA4 preparados por variables de entorno.
- Formulario con validación, honeypot y endpoint `/api/contact`, listo para enviar a un webhook.
- Sin Tailwind, Material Symbols ni scripts del HTML exportado de Stitch.

## Variables de entorno

Copia `.env.example` a `.env.local` y completa lo necesario.

- `NEXT_PUBLIC_SITE_URL`: dominio final usado en canonical, sitemap y Open Graph.
- `NEXT_PUBLIC_GTM_ID`: ID de Google Tag Manager. Si existe, tiene prioridad sobre la carga directa de GA4.
- `NEXT_PUBLIC_GA_ID`: ID de Google Analytics 4 si no se usa GTM.
- `CONTACT_WEBHOOK_URL`: URL HTTPS que recibirá el formulario como JSON.

## Imágenes

El HTML fuente solo contenía URLs públicas de `lh3.googleusercontent.com`, no archivos originales. Se conservan esas imágenes para mantener la fidelidad visual. Todas se renderizan con `next/image`; la configuración de Next solicita/entrega WebP cuando el navegador lo soporta.

Para una independencia total de cualquier URL externa de imagen, sustituye los valores de `lib/content.ts` por originales locales dentro de `public/images/` cuando estén disponibles.

## Desarrollo y despliegue

```bash
npm install
npm run dev
npm run build
npm start
```

Vercel detecta Next.js automáticamente. También se incluye `vercel.json`.

## Antes de publicar

Las páginas `/privacidad` y `/aviso-legal` se han dejado deliberadamente como marcadores no indexables: el archivo fuente no aporta datos fiscales/titularidad suficientes para redactar textos legales reales. Deben sustituirse por textos validados antes del lanzamiento.
