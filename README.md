# Recetario Fácil

Aplicación académica desarrollada con **Next.js 16+**, **TypeScript**, **App Router** y **Tailwind CSS**. Permite consultar recetas, buscar por palabras o ingredientes y filtrar por categoría.

## Requisitos previos

- Node.js **20.9 o superior** (se recomienda una versión LTS reciente)
- npm

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

En Windows, si `cp` no funciona, copia `.env.example` como `.env.local` desde el explorador de archivos. Abre `http://localhost:3000`.

## Comprobación

```bash
npm run typecheck
npm run lint
npm run build
```

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Inicio y recetas destacadas |
| `/recetas` | Listado con búsqueda y filtros |
| `/recetas/[slug]` | Detalle de cada receta |
| `/acerca` | Explicación del proyecto |
| `/api/recetas` | API interna que devuelve JSON; acepta `q` y `categoria` |

## Arquitectura

- **Server Components:** inicio, acerca, catálogo (página contenedora) y detalle.
- **Client Component:** `components/buscador-recetas.tsx` con `useState`, `useEffect`, estados de carga y error.
- **Route Handler:** `app/api/recetas/route.ts`.
- **Datos:** arreglo local tipado en `lib/recetas.ts`, sin base de datos ni credenciales.
- **UI:** Tailwind CSS, responsive.
- **Errores:** `app/error.tsx` y `app/not-found.tsx`.
- **Carga:** `app/loading.tsx` y estado de la consulta en el buscador.

## Variables de entorno

Copia `.env.example` como `.env.local`. La variable `NEXT_PUBLIC_APP_NAME` permite personalizar el nombre mostrado en los metadatos. **No se requieren claves de API.** No publiques `.env.local` ni claves privadas en GitHub. La app funciona sin esta variable gracias a un valor predeterminado.

## Publicación

1. Crea un repositorio **público** en GitHub.
2. Sube el proyecto siguiendo los commits descritos en `GUIA_ENTREGA.md`.
3. En [Vercel](https://vercel.com), selecciona **Add New → Project**, importa el repositorio y despliega con la configuración detectada de Next.js.
4. Si lo deseas, agrega `NEXT_PUBLIC_APP_NAME` en los ajustes de variables de entorno de Vercel.
5. Verifica las cuatro páginas y la API; copia aquí la URL real de producción.

**URL de producción:** _pendiente de añadir después del despliegue_.

## Proceso de Vibe Coding

Lee [`VIBE_CODING.md`](./VIBE_CODING.md) para conocer los prompts propuestos, las decisiones técnicas y el registro de iteraciones. Completa el registro con las acciones y resultados que realmente hayas realizado.
