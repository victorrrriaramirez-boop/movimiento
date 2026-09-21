# Scroll e imágenes — implementación actual

## Hero

La imagen principal es el único recurso visual con `priority`. El desplazamiento usa `useScroll` y `useTransform`: la fotografía se mueve a una velocidad visual inferior a la página y el contenido se desvanece al abandonar el viewport. Solo se animan `transform` y `opacity`.

## Secuencia de intervención

La sección ocupa `300vh` en escritorio/tablet y `250vh` en móvil. El viewport interior usa `position: sticky; top: 0; height: 100vh`.

Las tres fases están apiladas y se controlan directamente mediante el progreso de `useScroll`. Los crossfades duran aproximadamente el 15% del recorrido entre fases. Cada fotografía pasa de `scale(1.05)` a `scale(1)` y el texto entra desde `24px` con fade.

La barra inferior utiliza `scaleX` ligada directamente al progreso del scroll, sin springs ni animaciones con retardo que puedan producir sensación de bloqueo.

En móvil la fotografía ocupa la parte superior del viewport sticky y el texto aparece debajo, sobre fondo claro.

## Reduced motion

Con `prefers-reduced-motion: reduce` se desactiva el comportamiento sticky animado y se muestra una versión editorial estática de las tres fases. Las animaciones restantes dejan de transformar el contenido.

## Calidad de imagen

Todos los archivos de `/public/images/` tienen 3000 px de ancho. `next/image` se encarga de generar las variantes responsive y los formatos AVIF/WebP. La calidad solicitada es 90 y cada uso declara un atributo `sizes` adaptado a su posición real en el layout.
