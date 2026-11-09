# Guía breve de entrega

## 1. Usar el ZIP directamente

1. Extrae `recetario-facil.zip` en una carpeta de tu computadora.
2. Abre la carpeta `recetario-facil` en VS Code.
3. En la terminal (Git Bash o PowerShell), escribe:

```bash
npm install
npm run dev
```

4. Visita `http://localhost:3000`. La aplicación funciona sin `.env.local` porque dispone de un valor por defecto. Para utilizar la variable de entorno:

```bash
cp .env.example .env.local
```

5. Comprueba las rutas `/`, `/recetas`, `/recetas/tostadas-con-aguacate`, `/acerca` y `/api/recetas`.
6. Revisa la aplicación en tamaño móvil desde las herramientas de desarrollo del navegador.
7. Detén `npm run dev` con `Ctrl+C` y ejecuta:

```bash
npm run typecheck
npm run lint
npm run build
```

## 2. Si necesitas crear el proyecto desde cero

El ZIP ya contiene el proyecto completo, por lo que **no es necesario** ejecutar `create-next-app`. Si el profesor requiere ver la creación, puedes iniciar otro proyecto con:

```bash
npx create-next-app@latest recetario-facil --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
```

Después copia/reemplaza el contenido de los archivos de la estructura provista en el ZIP. Para evitar diferencias de versiones, es más sencillo utilizar directamente este ZIP.

## 3. Subir a GitHub con un historial real

Los commits deben corresponder a etapas que realmente hayas realizado. Ejemplo de flujo con cambios reales:

```bash
git init
git add package.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs .gitignore .env.example
# git commit -m "chore: configurar Next.js y TypeScript"
git add lib app/api
# git commit -m "feat: agregar datos de recetas y API"
git add app components
# git commit -m "feat: crear páginas y buscador interactivo"
git add README.md VIBE_CODING.md GUIA_ENTREGA.md
# git commit -m "docs: documentar proceso y despliegue"
```

Las líneas de `git commit` están comentadas intencionalmente para que solo las ejecutes cuando cada etapa esté preparada y comprobada. Si prefieres, realiza un commit inicial del proyecto realmente desarrollado, y commits posteriores con tus mejoras, correcciones y documentación reales. **No fabriques un historial de desarrollo que no ocurrió.**

Para conectar el repositorio creado en GitHub:

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/recetario-facil.git
git push -u origin main
```

## 4. Desplegar en Vercel

1. Entra a `https://vercel.com` y conecta GitHub si es necesario.
2. Importa el repositorio `recetario-facil`.
3. Comprueba que Vercel haya detectado Next.js y haz clic en Deploy.
4. Abre la URL pública asignada y prueba las rutas.
5. Sustituye el texto pendiente de URL en README.md por el enlace real, haz un commit y súbelo.
6. Entrega la URL de GitHub y la URL pública de Vercel.

## 5. Dónde va cada archivo

```text
recetario-facil/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
├── VIBE_CODING.md
├── GUIA_ENTREGA.md
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── acerca/page.tsx
│   ├── recetas/page.tsx
│   ├── recetas/[slug]/page.tsx
│   └── api/recetas/route.ts
├── components/
│   ├── header.tsx
│   ├── receta-card.tsx
│   └── buscador-recetas.tsx
└── lib/recetas.ts
```

No crees un archivo `proyecto.js`: esta actividad requiere **TypeScript**, por eso las páginas son `.tsx` y el Route Handler es `.ts`.
