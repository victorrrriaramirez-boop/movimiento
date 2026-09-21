# Scroll cinematográfico V7

## Criterio visual

El movimiento se ha replanteado como una narración ligada directamente al desplazamiento de la página: escenas largas, transformaciones pequeñas, transiciones solapadas y ausencia de efectos bruscos.

## Hero

- Recorrido desktop: 420vh.
- Recorrido móvil: 320vh.
- Sticky: 100svh.
- La escena abre a escala 0.91 y llega a 1.00 durante el primer tramo.
- El radio visual desaparece progresivamente al expandirse la escena.
- Las tres imágenes están apiladas y realizan crossfade con ventanas amplias.
- Cada imagen realiza un zoom-out suave entre aproximadamente 1.075 y 1.00.
- El texto se mantiene al principio y desaparece antes de los cambios principales de escena.
- Progreso inferior continuo ligado a `scrollYProgress`.

## Secuencia de intervención

- Recorrido desktop: 420vh.
- Recorrido móvil: 330vh.
- Sticky: 100svh.
- Tres capas de imagen apiladas a pantalla completa.
- Crossfade amplio entre fases, sin saltos de estado.
- Zoom-out 1.08 → 1.00 en cada fase.
- Paneo vertical inferior al 2%.
- El texto entra desde 32 px, se estabiliza y sale 24 px hacia arriba.
- El indicador de estado y la barra se sincronizan con el mismo progreso.
- En móvil, fotografía arriba y contenido debajo dentro del mismo sticky.

## Resto de la Home

- Metodología: parallax de fondo muy corto y aparición de tarjetas ligada al scroll real.
- Materialidad: fade + desplazamiento vertical de 34 px, además de un zoom de imagen muy contenido.
- Estadísticas: entrada vertical corta y contador ascendente.

## Rendimiento

No se usa smooth-scroll externo, GSAP ni listeners manuales de `scroll`. El navegador mantiene el desplazamiento nativo y Framer Motion transforma `scrollYProgress` únicamente en `transform` y `opacity` para minimizar reflow.
