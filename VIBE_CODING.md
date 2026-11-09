# Registro de Vibe Coding

## Objetivo

Construir una aplicación de recetas con Next.js 16+, TypeScript, App Router, una API interna y una interfaz responsive, utilizando ChatGPT como copiloto y validando el resultado.

## Prompts principales

**Prompt 1 — Requisitos y planificación (resumen del encargo):**
> Analiza los requisitos de la actividad y propón una aplicación sencilla en Next.js 16+ con TypeScript y Tailwind, cuatro rutas, API, Server/Client Components, manejo de estados y documentación. Sigue la regla "Keep it simple".

**Prompt 2 — Organización (resumen de la petición):**
> Entrega un árbol claro de carpetas y el código completo por archivo. Explica dónde crear o reemplazar cada archivo. Evita comentarios innecesarios en el código.

**Prompt 3 — Preparación de entrega (resumen de la petición):**
> Prepara el proyecto en un ZIP, incluye README, guía de despliegue y una revisión para detectar errores antes de entregar.

## Iteraciones de diseño y desarrollo

1. **Planificación:** se eligió un recetario para facilitar una demo clara de varias rutas y una API.
2. **Primera implementación:** se estructuraron las rutas, los datos tipados, el Route Handler y los componentes.
3. **Interactividad:** se agregó búsqueda por texto y categoría con `useState`, `useEffect` y `fetch`.
4. **Experiencia de usuario:** se incluyeron estados de carga, errores, página no encontrada y estilos responsive.
5. **Validación pendiente:** ejecutar `npm run typecheck`, `npm run lint` y `npm run build` en el equipo con dependencias instaladas; documentar resultados reales.

## Decisiones técnicas

- **API interna** en lugar de Supabase: evita claves, conexión a servicios y configuración externa.
- **TypeScript**: es un requisito obligatorio de la actividad.
- **Tailwind CSS**: concentra los estilos en los componentes y facilita el responsive.
- **Datos locales**: suficientes para una demostración académica, sin persistencia ni edición de recetas.
- **Server Components + Client Component**: se utiliza el servidor para contenido estático y el cliente para interacción.

## Desafíos y resolución

- **Evitar complejidad innecesaria:** se descartó añadir autenticación o base de datos.
- **Cubrir estados asíncronos:** la búsqueda muestra un indicador mientras consulta la API y ofrece reintento si falla.
- **Rutas dinámicas:** los detalles se resuelven por `slug` y una receta inexistente muestra una página 404.

## Validación del estudiante

Completar **después de probar**, sin inventar evidencia:

| Prueba | Resultado y fecha |
| --- | --- |
| `npm install` | Pendiente |
| `npm run typecheck` | Pendiente |
| `npm run lint` | Pendiente |
| `npm run build` | Pendiente |
| Navegación de las cuatro rutas | Pendiente |
| Búsqueda y filtro | Pendiente |
| `/api/recetas` devuelve JSON | Pendiente |
| Vista responsive en móvil | Pendiente |
| Despliegue en Vercel | Pendiente |

## GitHub y Vercel

Conservar commits reales con mensajes descriptivos. Registrar la URL pública después de desplegar. No atribuir pruebas o correcciones que no se hayan realizado.
