# Validación V6

Se han comprobado de forma estática los cambios de esta versión:

- balance correcto de llaves en CSS y componentes TSX modificados;
- imágenes locales servidas con `next/image`;
- animaciones limitadas a `transform` y `opacity`;
- recorridos responsive actualizados a 240/200vh para hero y 360/300vh para la secuencia de intervención;
- `prefers-reduced-motion` conserva la alternativa estática;
- no se han añadido nuevas dependencias.

También se intentó instalar las dependencias para ejecutar el build real, pero `npm install` agotó el tiempo de espera de red en este entorno. El `tsc` global no puede validar el proyecto sin `node_modules` porque no dispone de los tipos de Next.js, React y Framer Motion.

Con acceso normal al registro npm, la comprobación final prevista es:

```bash
npm install
npm run build
```

El workflow de `.github/workflows/build.yml` sigue ejecutando esa validación automáticamente en GitHub.
