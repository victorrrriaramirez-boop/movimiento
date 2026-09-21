# Atelier Architecture — Next.js production rebuild v2

Reimplementación del diseño de Google Stitch como proyecto independiente en Next.js App Router, TypeScript y Framer Motion, preparado para GitHub y Vercel.

## Cambios de esta versión

### Scroll mucho más fluido

Las dos secuencias sticky principales ya no dependen de cambios visuales por tramos bruscos:

- `BeforeAfter.tsx` y `Methodology.tsx` usan `useScroll` + `useSpring` + `useTransform`.
- El progreso de scroll se amortigua mediante un `MotionValue` con spring, de forma que cada píxel de scroll produce una transición progresiva.
- Textos, fotografías, badges y barras de progreso se interpolan continuamente.
- Se han eliminado los cambios de clase visuales basados en estado que podían producir sensación de salto.
- Las fotografías ya no se escalan agresivamente durante el scroll, evitando pérdida aparente de nitidez.

### Imágenes a máxima calidad

- Todas las fotografías se sirven mediante `next/image`.
- Las imágenes principales utilizan `quality={100}`.
- Se mantiene WebP en `next.config.ts`.
- Next.js puede generar variantes de alta resolución para pantallas Retina/HiDPI.
- Se ha aumentado la caché de imágenes optimizadas para producción.
- Los `sizes` de las imágenes sticky se han ajustado al tamaño real del layout.

> Importante: el material de Google Stitch solo incluía URLs remotas de `lh3.googleusercontent.com`, no los archivos fotográficos originales. Esta versión evita compresión adicional visible y solicita la máxima calidad disponible en esas fuentes. Si una imagen concreta de Stitch ya estuviera limitada de resolución en origen, para mejorarla todavía más hay que sustituirla por el archivo original de alta resolución en `public/images/`.

## Qué incluye

- Home y rutas limpias: `/servicios`, `/proyectos`, `/sobre-nosotros`, `/contacto`.
- Animaciones sticky de “Secuencia de intervención” y “Metodología” con Framer Motion.
- `next/image` + WebP a alta calidad.
- Metadatos únicos, canonical, Open Graph y Twitter Cards por página.
- `sitemap.xml` y `robots.txt` generados por Next.js.
- Schema.org `ProfessionalService`.
- HTML semántico, navegación móvil, skip link, ALT y soporte `prefers-reduced-motion`.
- Favicon, Apple Touch Icon y Open Graph image locales.
- Google Tag Manager / GA4 preparados por variables de entorno.
- Formulario con validación, honeypot y endpoint `/api/contact`, preparado para webhook.
- Sin dependencias de Google Stitch en el código de ejecución.

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
git commit -m "Atelier Architecture production v2"
git branch -M main
git remote add origin TU_URL_DEL_REPOSITORIO
git push -u origin main
```

## Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel pulsa **Add New → Project**.
3. Importa el repositorio.
4. Framework Preset: **Next.js**.
5. No es necesario cambiar Build Command: Vercel usará `npm run build`.
6. Añade las variables de entorno necesarias.
7. Pulsa **Deploy**.
8. Cuando tengas el dominio definitivo, configura `NEXT_PUBLIC_SITE_URL` con `https://tudominio.com` y vuelve a desplegar.

También se incluye `DEPLOY_GITHUB_VERCEL.md` con el proceso de publicación resumido.

## Antes de publicar

Las páginas `/privacidad` y `/aviso-legal` siguen siendo marcadores no indexables porque el material fuente no aporta los datos fiscales/titularidad necesarios para crear textos legales reales. Sustitúyelos antes del lanzamiento definitivo.
