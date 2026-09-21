# Scroll & Material Focus — V8

Esta versión elimina el encuadre inicial que dejaba zonas negras alrededor de la portada y mantiene el hero siempre a sangre, ocupando el 100% del viewport.

## Portada

- Secuencia full-bleed sin marco ni bordes negros.
- Tres fotografías locales de alta resolución con crossfade amplio.
- Zoom muy suave y desplazamiento vertical mínimo, ligados 1:1 al scroll nativo.
- Solo se animan `transform` y `opacity` para mantener el trabajo en el compositor.
- La primera imagen conserva `priority` y continúa siendo el LCP principal.

## Material constructivo en foco

Se ha añadido una escena sticky dedicada al encuentro de travertino y roble.

- La misma imagen existe en dos archivos locales: una versión pre-desenfocada y otra nítida.
- No se usa `filter: blur()` durante el scroll: la nitidez aparece mediante un crossfade entre ambos archivos.
- El producto se acerca lentamente desde `scale 1.12` hacia `1.01` y se estabiliza mientras gana definición.
- La animación usa `useScroll` + `useTransform`, sin GSAP, Lenis ni librerías de scroll adicionales.
- En móvil el recorrido se reduce manteniendo el mismo comportamiento.
- Con `prefers-reduced-motion` se muestra directamente la versión nítida y estática.

## Fluidez

- No se usan springs ni interpolaciones con retraso respecto al scroll.
- `will-change`, `translateZ(0)` y `backface-visibility` se limitan a las capas animadas.
- Se evita el blur CSS en movimiento, una de las operaciones más costosas para GPU.
- Los assets son locales y se sirven con `next/image`, `quality={90}`, AVIF/WebP mediante Next.js y `sizes` adaptado.
