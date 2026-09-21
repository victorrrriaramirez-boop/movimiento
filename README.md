# Atelier Architecture — V8 — Next.js / Vercel

Web de arquitectura y reformas preparada para producción con Next.js 15, React 19 y Framer Motion.

## V8 — scroll limpio, full-bleed y enfoque progresivo

Esta versión elimina el encuadre que dejaba bandas oscuras alrededor del hero y simplifica el movimiento para que toda la navegación resulte más fluida y limpia:

- Hero siempre a sangre, ocupando todo el viewport, sin marco ni bordes negros.
- Tres fotografías de alta resolución con crossfade largo, zoom muy contenido y paneo vertical mínimo.
- Animaciones ligadas 1:1 al scroll nativo, sin springs, Lenis, GSAP ni inercias artificiales.
- Nueva escena sticky de material constructivo con travertino y roble: comienza suave y se resuelve progresivamente hasta quedar totalmente nítida.
- La nitidez se consigue con dos assets locales y crossfade por opacidad, evitando `filter: blur()` en tiempo real.
- La secuencia de intervención mantiene imágenes full-bleed, crossfade continuo y texto sincronizado.
- `prefers-reduced-motion` muestra contenido estático y nítido.
- Se reduce el blur del header fijo para disminuir trabajo de GPU durante el scroll.

## Imágenes

- Activos locales en `/public/images/`.
- Originales principales a 3000 px de ancho.
- Renderizado exclusivamente mediante `next/image`.
- `quality={90}`.
- AVIF y WebP habilitados en `next.config.ts`.
- `priority` reservado exclusivamente para la imagen LCP del hero.
- `placeholder="blur"` en los originales nítidos.
- Sin `remotePatterns` ni dependencias de Google Stitch.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube el contenido del proyecto a un repositorio de GitHub.
2. En Vercel, pulsa **Add New → Project**.
3. Importa el repositorio.
4. Framework Preset: **Next.js**.
5. Build Command: `npm run build`.
6. Output Directory: dejar por defecto.
7. Configura `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.
8. Añade GA/GTM solo si se van a utilizar.

## Variables de entorno

Consulta `.env.example`.

Variables previstas:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `CONTACT_WEBHOOK_URL`

Consulta `SCROLL_FOCUS_V8.md` para el detalle técnico del nuevo movimiento y `BUILD_VALIDATION.md` para las comprobaciones realizadas.
