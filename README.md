# Casa Noma

Catálogo estático de una mueblería ficticia, en español rioplatense. HTML, CSS y JavaScript vanilla; sin frameworks, instalación ni dependencias npm.

## Abrir

Descargá el repositorio y abrí `index.html` en un navegador. El HTML contiene los estilos, el script y las imágenes incorporadas: se puede compartir ese archivo por separado. Google Fonts es opcional; sin conexión se usan fuentes de respaldo.

Incluye catálogo con búsqueda y filtros, tres productos especiales, carrusel automático, detalle desplegable con cantidad para consultar, modo oscuro y una sección interactiva de materiales, medidas y entrega.

## Editar

- `script.js`: objeto `CONFIG` con negocio, productos, precios y teléfono de WhatsApp; también contiene las interacciones.
- `styles.css`: diseño y estilos responsive.
- `assets/`: imágenes originales generadas y versiones WebP optimizadas.
- `index.html`: estructura y versión autónoma, con una instantánea estática para conservar el catálogo visible sin JavaScript.

Después de editar CSS, JavaScript o las imágenes WebP, ejecutá:

```sh
python3 sync_site.py
```

Este comando actualiza las copias incrustadas sin dependencias adicionales. Los cambios en `CONFIG` se aplican al abrir el sitio con JavaScript activado; la instantánea estática existente se conserva como respaldo.

## Datos de ejemplo

Los productos, precios, teléfonos y datos del negocio son ficticios. Las imágenes fueron generadas para este prototipo. Reemplazá `CONFIG.business.whatsapp` por el número real (solo dígitos con código de país) antes de usarlo comercialmente.

El sitio es un catálogo: no procesa compras, pagos ni reservas. Las consultas se continúan por WhatsApp.
