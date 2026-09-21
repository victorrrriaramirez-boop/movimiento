# Atelier Architecture — Next.js / Vercel

Web de arquitectura y reformas preparada para producción con Next.js 15, React 19 y Framer Motion.

## Cambios de esta versión

- Imágenes servidas desde `/public/images/`, sin dependencias de Google Stitch ni `lh3.googleusercontent.com`.
- Todos los activos visuales tienen 3000 px de ancho y se renderizan con `next/image`.
- `quality={90}` en todas las imágenes.
- AVIF y WebP habilitados en `next.config.ts`.
- `priority` reservado exclusivamente para la imagen LCP del hero.
- `placeholder="blur"` y `blurDataURL` local para el resto de imágenes.
- Hero con parallax ligado al scroll y fade progresivo del contenido.
- "Secuencia de intervención" reconstruida como experiencia sticky de 300vh (250vh en móvil), con crossfade continuo, zoom sutil y barra de progreso ligada al scroll.
- Metodología con entradas `whileInView` escalonadas.
- Galería con fade-in escalonado y zoom hover de 0.6s.
- Cifras con contador ascendente al entrar en viewport.
- Compatibilidad con `prefers-reduced-motion`, mostrando una alternativa estática para la secuencia sticky.

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

## Imágenes

Los archivos utilizados por la interfaz están en:

```text
/public/images/
```

No hay `remotePatterns` de Google ni imágenes dependientes de Google Stitch.
