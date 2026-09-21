# Documento de subida a GitHub y Vercel

## 1. Contenido que debes subir

Sube la carpeta completa del proyecto, incluyendo:

- `app/`
- `components/`
- `lib/`
- `public/`
- `.env.example`
- `.gitignore`
- `next.config.ts`
- `package.json`
- `tsconfig.json`
- `vercel.json`

No subas `.env.local`, `.next/` ni `node_modules/`.

## 2. GitHub

Desde la raíz del proyecto:

```bash
git init
git add .
git commit -m "Production website"
git branch -M main
git remote add origin TU_URL_DEL_REPOSITORIO
git push -u origin main
```

## 3. Vercel

- Crea un nuevo proyecto en Vercel.
- Importa el repositorio de GitHub.
- Vercel detectará Next.js automáticamente.
- Build Command: `npm run build`.
- Output: automático de Next.js.
- Node.js: 20 o superior.

## 4. Variables de entorno

Añade en **Project Settings → Environment Variables**:

```text
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_WEBHOOK_URL=https://tu-endpoint-de-formulario.com
```

Solo son obligatorias las que realmente vayas a utilizar.

## 5. Animaciones

Las secciones sticky de intervención y metodología utilizan Framer Motion con scroll continuo:

- `useScroll` obtiene el progreso de la sección.
- `useSpring` suaviza el progreso sin convertir la animación en una secuencia automática.
- `useTransform` interpola posición, opacidad y barras de progreso.

Por tanto, el movimiento sigue directamente el scroll y no cambia de golpe entre estados.

## 6. Calidad de imágenes

Las fotografías se sirven con `next/image`, formato WebP y calidad máxima (`quality={100}`) en los bloques principales. Se han eliminado escalados de imagen agresivos que podían hacer que las fotografías parecieran desenfocadas durante la animación.

Las URLs originales proceden del HTML generado por Google Stitch. Para sustituirlas por originales propios en máxima resolución, guarda los archivos en `public/images/` y actualiza `lib/content.ts`.

## 7. Comprobación después del deploy

Comprueba en escritorio y móvil:

- Home y las cuatro páginas interiores.
- Scroll de las dos secciones sticky.
- Nitidez de las fotografías.
- Menú móvil.
- Formulario.
- Canonical y metadatos.
- `/sitemap.xml`.
- `/robots.txt`.
- Favicon.
