# Atelier Architecture — Next.js / Vercel

Web de arquitectura y reformas preparada para producción con Next.js 15, React 19 y Framer Motion.

## V7 — scroll cinematográfico tipo product story

Esta versión reorganiza el movimiento para que la navegación se sienta más cercana a una presentación editorial de producto de alta gama:

- Hero fijado durante un recorrido largo de scroll.
- La escena inicial comienza ligeramente encuadrada y se expande suavemente hasta ocupar todo el viewport.
- Tres fotografías del hero se suceden con crossfade largo, zoom-out muy contenido y desplazamiento vertical mínimo.
- El titular permanece estable al inicio y desaparece progresivamente mientras la imagen gana protagonismo.
- Barra de progreso inferior ligada 1:1 al scroll.
- "Secuencia de intervención" ampliada a 420vh en escritorio y 330vh en móvil, con imágenes full-bleed apiladas, crossfade continuo y zoom 1.08 → 1.00.
- Textos de cada fase sincronizados con el avance real del scroll, sin springs ni inercias artificiales.
- Metodología, galería y cifras reaccionan directamente a la posición del scroll con movimientos cortos y limpios.
- Todas las animaciones usan transform/opacidad y respetan `prefers-reduced-motion`.

## Imágenes

- Activos locales en `/public/images/`.
- 3000 px de ancho.
- Renderizado exclusivamente mediante `next/image`.
- `quality={90}`.
- AVIF y WebP habilitados en `next.config.ts`.
- `priority` reservado exclusivamente para la imagen LCP del hero.
- `placeholder="blur"` y `blurDataURL` local.
- Sin `remotePatterns` de proveedores externos.

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

Consulta `SCROLL_APPLE_V7.md` para el detalle del comportamiento de las animaciones.
