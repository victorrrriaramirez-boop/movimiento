# V5 · Zoom, movimiento y cambio de imágenes

Esta versión amplía la narrativa visual sin alterar los textos ni el lenguaje gráfico del proyecto.

## Portada

- La portada se convierte en una secuencia sticky de 185vh en escritorio y 165vh en móvil.
- Tres imágenes locales de alta resolución se superponen y cambian mediante crossfade ligado directamente al scroll.
- Cada imagen hace zoom-out progresivo y un desplazamiento horizontal/vertical muy suave.
- El titular desaparece gradualmente al avanzar para dejar protagonismo a las imágenes.
- Solo la primera imagen mantiene `priority`, preservando el LCP.

## Secuencia de intervención

- Se conservan las tres fases y sus textos.
- El crossfade sigue ligado 1:1 a `scrollYProgress`.
- Además del cambio de imagen, cada fase realiza un zoom suave y un paneo diferente para que el movimiento nunca se perciba estático.
- La barra de progreso permanece continua.

## Metodología

- La fotografía de fondo ahora tiene parallax, zoom y paneo progresivo durante el recorrido de la sección.
- Los bloques de texto mantienen su entrada escalonada.

## Materialidad tangible

- Cada fotografía se desplaza suavemente en sentido vertical y horizontal según atraviesa el viewport.
- El zoom se adapta al progreso de scroll.
- Se mantiene un zoom adicional de 0.6 s al pasar el cursor.

## Cabeceras interiores

- Las imágenes de Servicios, Proyectos, Sobre Nosotros y Contacto incorporan zoom-out, desplazamiento y parallax ligados al scroll.

## Accesibilidad y rendimiento

- `prefers-reduced-motion` elimina todos los movimientos y deja las imágenes estáticas.
- Todos los movimientos usan `transform` y `opacity` con `will-change` para evitar reflow.
- Las imágenes siguen siendo locales y se sirven con `next/image`, calidad 90 y formatos AVIF/WebP.
