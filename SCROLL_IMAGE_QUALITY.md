# Scroll fluido y calidad de imagen — v3

Esta versión corrige específicamente los dos puntos de revisión visual:

## 1. Scroll 1:1, sin efecto "pillado"

Las secciones narrativas ya no usan `useSpring`. El progreso de `useScroll` se conecta directamente con `useTransform`, de modo que cada incremento real del scroll modifica posición, opacidad e indicadores en el mismo frame.

También se han eliminado los tramos largos en los que la animación quedaba visualmente estática. Los textos y las imágenes mantienen una deriva continua mientras están visibles.

## 2. Portada con zoom progresivo

La portada ahora funciona como una escena sticky de 170svh en escritorio y 155svh en móvil. Mientras se avanza, la fotografía pasa progresivamente de escala 1.00 a 1.18, el encuadre asciende y el overlay se aclara para enseñar mejor la reforma antes de entrar en la secuencia de intervención.

## 3. Fotografías más nítidas

Las fotografías siguen renderizándose con `next/image`, pero para las imágenes remotas de Google Stitch se usa `unoptimized`. Esto evita una segunda recompresión por el optimizador de Next/Vercel y entrega directamente el archivo remoto original.

Las imágenes críticas del hero y de la primera secuencia se precargan (`priority`/`loading=eager`) para evitar tirones de decodificación al empezar una transición.

> Nota: `unoptimized` conserva al máximo la calidad disponible en los originales de Stitch. Si más adelante se reciben fotografías definitivas del estudio en alta resolución, la opción óptima para producción es guardarlas en `/public/images/` como WebP/AVIF de 2000–3000 px y volver a activar la optimización de Next sobre esos archivos locales.

## 4. Rendimiento

Se han reducido promociones permanentes de capas (`will-change`) en fotografías que se estaban escalando/trasladando. En algunos navegadores eso puede mantener una textura rasterizada a menor resolución durante un transform y hacer que la imagen parezca blanda.
