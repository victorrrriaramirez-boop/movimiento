# V6 · Movimiento más lento y limpio

Esta revisión reduce la velocidad visual y la cantidad de movimiento simultáneo sin eliminar la narrativa ligada al scroll.

## Hero

- Recorrido ampliado a `240vh` en escritorio y `200vh` en móvil.
- Las tres imágenes siguen cambiando con crossfade, pero las transiciones ocupan más recorrido físico.
- Zoom reducido a un rango aproximado de `1.07 → 1.00`.
- Paneo horizontal y vertical limitado a desplazamientos subporcentuales.
- El texto permanece estable durante más tiempo y desaparece de forma más gradual.
- No se usa `spring`: la animación sigue vinculada directamente al scroll, sin retraso ni sensación elástica.

## Secuencia de intervención

- Recorrido ampliado a `360vh` en escritorio y `300vh` en móvil.
- Crossfades más largos entre preexistente, estructura y entrega final.
- Zoom más contenido (`~1.06 → 1.00`).
- Eliminado el paneo horizontal para que la composición sea más limpia.
- Desplazamiento vertical de imagen muy leve.
- Entrada y salida del texto reducida de 24 px a 18 px.
- Barra de progreso continua, sin saltos.

## Metodología

- Parallax de fondo reducido a ±2.4%.
- Eliminado el movimiento horizontal del fondo.
- Zoom de fondo más discreto.
- Aparición de los tres bloques alargada a 0.9 s con escalonado de 0.12 s.

## Materialidad tangible

- Eliminado el paneo horizontal por scroll.
- Parallax vertical reducido a ±2%.
- Zoom ligado al scroll reducido.
- Hover más suave: `scale(1.02)` con transición de 0.8 s.
- Fade-in más lento y limpio al entrar en viewport.

## Cabeceras interiores

- Eliminado el movimiento horizontal.
- Parallax vertical reducido.
- Zoom reducido a `1.055 → 1.015`.
- El texto se desplaza solo 20 px y mantiene la opacidad durante más recorrido.

## Rendimiento

Todos los movimientos siguen usando únicamente `transform` y `opacity`, con `will-change` en las capas animadas. `prefers-reduced-motion` mantiene la versión estática.
