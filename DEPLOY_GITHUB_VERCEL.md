# Subida a GitHub y despliegue en Vercel

## 1. Subir a GitHub

Crea un repositorio vacío y, desde la carpeta del proyecto, ejecuta:

```bash
git init
git add .
git commit -m "Production scroll and image update"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

No subas `.env.local`, `.next` ni `node_modules`.

## 2. Importar en Vercel

1. Abre Vercel.
2. Selecciona **Add New → Project**.
3. Importa el repositorio de GitHub.
4. Vercel detectará Next.js automáticamente.
5. Build command: `npm run build`.
6. No configures un Output Directory manual.
7. Pulsa **Deploy**.

## 3. Variables

En **Project Settings → Environment Variables** configura, como mínimo:

```text
NEXT_PUBLIC_SITE_URL=https://dominio-final.es
```

Opcionales:

```text
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
CONTACT_WEBHOOK_URL=
```

## 4. Dominio

En **Settings → Domains**, añade el dominio definitivo y después actualiza `NEXT_PUBLIC_SITE_URL` para que canonical, sitemap y Open Graph utilicen la URL final.

## 5. Comprobación visual

Después del despliegue revisa en escritorio y móvil:

- Hero: carga inmediata y parallax suave.
- Secuencia de intervención: scroll continuo sin saltos y crossfades fluidos.
- Móvil: sección sticky de 250vh con texto debajo de la fotografía.
- Metodología: bloques 01, 02 y 03 con aparición progresiva.
- Galería: entrada escalonada y zoom hover.
- Cifras: contador al entrar en viewport.
- Preferencia de movimiento reducido: contenido estático.

## 6. Comprobación técnica

Antes de hacer push, ejecuta:

```bash
npm install
npm run build
```

El proyecto no utiliza imágenes remotas de Google Stitch; todos los activos visuales de la interfaz están dentro de `/public/images/`.
