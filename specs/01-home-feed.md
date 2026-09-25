# SPEC 01 — Feed principal estático

> **Estado:** Borrador
> **Depende de:** Ninguna
> **Fecha:** 2026-09-24
> **Objetivo:** Implementar en `/` una réplica estática y adaptable de `references/pantallas/feed.dc.html` con la misma apariencia visual y contenido de ejemplo.

## Alcance

**Incluye:**

- Sustituir la página inicial genérica de Next.js por el feed de OpenDayCare.
- Usar `references/pantallas/feed.dc.html` como fuente principal de estructura, contenido y estilos.
- Usar `references/screenshots/feed.png` como apoyo para la comparación visual.
- Reproducir los textos, nombres, fecha, contadores, etiquetas y marcador de fotografía de la referencia.
- Reproducir la barra lateral, el encabezado, el compositor visual y las tres publicaciones.
- Mantener la composición de escritorio con una barra lateral de 248 px y un área de contenido centrada de hasta 760 px.
- Ocultar la barra lateral por debajo de 768 px y adaptar el feed al ancho disponible sin desbordamiento horizontal.
- Cargar Fredoka y Nunito mediante `next/font/google`.
- Actualizar el idioma del documento a español y los metadatos a OpenDayCare.
- Crear componentes separados para la barra lateral, el compositor y las tarjetas del feed.
- Mantener todos los enlaces y controles como elementos únicamente visuales, sin navegación ni cambios de estado.

**Fuera de alcance para futuras especificaciones:**

- Autenticación, autorización y cierre de sesión real.
- Base de datos, API, Server Actions y cualquier otra fuente de datos dinámica.
- Persistencia local o remota.
- Rutas adicionales para niños, avisos, cuenta, publicaciones, fotografías o detalles.
- Creación, edición, eliminación, comentarios o reacciones sobre publicaciones.
- Carga y visualización de fotografías reales.
- Menú, cabecera o barra de navegación específicos para móvil.
- Tema oscuro.

## Modelo de datos

Esta funcionalidad no introduce un modelo de datos de aplicación ni estructuras persistentes. `app/page.tsx` declarará cada publicación de forma estática y pasará sus valores visibles directamente como props a `FeedCard`, sin archivos mock, listas obtenidas con `map` ni capas de acceso a datos.

## Archivos

**Crear:**

- `app/_components/Sidebar.tsx`
- `app/_components/Composer.tsx`
- `app/_components/FeedCard.tsx`

**Modificar:**

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

No se modificarán archivos dentro de `references/`, `.next/` ni `next-env.d.ts`.

## Plan de implementación

1. Actualizar `app/layout.tsx` para cargar Fredoka y Nunito con `next/font/google`, establecer `lang="es"` y definir el título y la descripción de OpenDayCare; mantener la aplicación ejecutable con la página actual.
2. Sustituir los estilos genéricos y el tema oscuro de `app/globals.css` por el reset, la paleta, las fuentes base y el scrollbar de la referencia; conservar una página inicial legible y ejecutable.
3. Crear `app/_components/Sidebar.tsx` con la marca, el botón de nueva publicación, los cuatro elementos de navegación y el perfil de Caro Giménez; integrar el componente en `app/page.tsx` junto a un contenedor principal funcional.
4. Crear `app/_components/Composer.tsx` y completar en `app/page.tsx` el encabezado de la sala, el saludo, el resumen y el separador de publicaciones.
5. Crear `app/_components/FeedCard.tsx` con props explícitas para representar el encabezado, destinatario, texto, categoría, contadores, avatar o icono y contenido visual opcional de cada tarjeta; integrar primero la publicación de logro.
6. Añadir en `app/page.tsx` las publicaciones estáticas de actividad y anuncio, incluida la variación con marcador de fotografía, hasta reproducir todo el contenido de `feed.dc.html`.
7. Aplicar la adaptación por debajo de 768 px: ocultar `Sidebar`, reducir espaciados cuando sea necesario y asegurar que el contenido y las tarjetas permanezcan legibles sin scroll horizontal.
8. Ajustar tipografía, dimensiones, colores, bordes, sombras y espaciados mediante Tailwind y los estilos globales hasta que la captura a 920 × 540 coincida visualmente con la referencia.

## Criterios de aceptación

- [ ] Al abrir `/` se muestra el feed de OpenDayCare y no aparece contenido del starter de Next.js.
- [ ] A 920 × 540, una comparación lado a lado con `references/screenshots/feed.png` no muestra diferencias perceptibles en estructura, tipografía, color, espaciado, bordes ni sombras, salvo variaciones menores de rasterización de fuentes.
- [ ] En escritorio, la barra lateral mide 248 px, ocupa la altura visible y permanece separada del área desplazable del feed.
- [ ] El contenido principal está centrado, tiene un ancho máximo de 760 px y conserva el fondo `#F6ECDF` de la referencia.
- [ ] Se muestran exactamente los textos, nombres, fecha, categorías, destinatarios, contadores y marcador de fotografía definidos en `references/pantallas/feed.dc.html`.
- [ ] Se muestran las tres publicaciones en el orden logro, actividad y anuncio.
- [ ] Fredoka se aplica a los elementos destacados de la referencia y Nunito al texto general.
- [ ] No se carga una hoja CSS remota de Google Fonts durante el uso de la página.
- [ ] A 390 × 844, la barra lateral no está visible, el feed usa el ancho disponible y `document.documentElement.scrollWidth` no supera `document.documentElement.clientWidth`.
- [ ] Los controles visuales no cambian la URL, no modifican contenido y no intentan acceder a rutas inexistentes.
- [ ] La página no presenta errores en la consola del navegador.
- [ ] `npm run lint -- app` finaliza correctamente.
- [ ] `npx next typegen && npx tsc --noEmit` finaliza correctamente.
- [ ] `npm run build` finaliza correctamente.

## Decisiones

- **Sí:** `references/pantallas/feed.dc.html` es la autoridad para estructura, valores y contenido. La captura es una referencia secundaria.
- **Sí:** la validación visual principal se realiza en Chromium a 920 × 540 mediante comparación lado a lado.
- **No:** comparación automática pixel a pixel. La rasterización puede variar entre entornos sin representar un defecto de implementación.
- **Sí:** adaptación móvil funcional a 390 × 844, sin exigir fidelidad pixel a pixel porque no existe una referencia móvil.
- **Sí:** ocultar la barra lateral por debajo de 768 px. Sus controles no tienen funcionalidad en esta especificación y no se inventará una navegación móvil.
- **Sí:** contenido exacto y estático pasado mediante props explícitas a `FeedCard`.
- **No:** archivo de datos mock o arreglo tipado renderizado con `map`. No aporta valor para tres publicaciones fijas.
- **Sí:** componentes en `app/_components/` para `Sidebar`, `Composer` y `FeedCard`.
- **No:** separar encabezado, iconos o lista en componentes adicionales. Aumentaría la fragmentación de una única pantalla estática.
- **Sí:** Tailwind para estilos de componentes y `app/globals.css` para reset, variables y scrollbar.
- **No:** CSS Modules y nuevas dependencias de estilos.
- **Sí:** Fredoka y Nunito mediante `next/font/google`.
- **No:** enlaces `<link>` a Google Fonts ni sustitución por fuentes del sistema.
- **Sí:** SVG inline trasladado desde la referencia.
- **No:** librería de iconos o componente genérico de iconos.
- **Sí:** componentes de servidor sin estado interactivo.
- **No:** autenticación, persistencia o lógica de negocio simulada.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Diferencias de rasterización impiden una coincidencia visual absoluta. | Comparar en Chromium al mismo viewport y aceptar únicamente variaciones menores de rasterización. |
| La composición fija de escritorio produce overflow en pantallas angostas. | Ocultar la barra lateral por debajo de 768 px y validar `scrollWidth` a 390 × 844. |
| Elementos con apariencia de enlace intentan navegar a rutas no implementadas. | Renderizarlos sin destinos navegables ni manejadores de estado. |
| La reutilización de `FeedCard` elimina diferencias visuales entre categorías. | Mantener props explícitas para avatar o icono, colores, etiqueta y contenido visual opcional. |

## Lo que **no** incluye esta especificación

- Funcionalidad para publicar, editar, comentar, reaccionar, navegar o cerrar sesión.
- Autenticación, datos dinámicos, API, base de datos o persistencia.
- Rutas distintas de `/`.
- Fotografías reales.
- Navegación específica para móvil.
- Tema oscuro.

Cada una de estas capacidades requerirá una especificación independiente si se incorpora en el futuro.
