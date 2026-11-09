import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Acerca del proyecto" };

export default function Acerca() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16"><span className="text-sm font-bold uppercase tracking-widest text-orange-700">Nuestro proyecto</span><h1 className="mt-3 text-4xl font-extrabold text-stone-900">Acerca de Recetario Fácil</h1><p className="mt-6 text-lg leading-8 text-stone-600">Recetario Fácil es una aplicación académica para descubrir recetas prácticas y conocer sus ingredientes y pasos de preparación.</p>
      <div className="mt-10 space-y-5 rounded-2xl border border-orange-100 bg-white p-7"><h2 className="text-2xl font-extrabold">Tecnologías utilizadas</h2><p className="leading-7 text-stone-600">Next.js 16 con App Router, TypeScript, React y Tailwind CSS. La lista de recetas se obtiene desde una API interna mediante un Route Handler.</p><h2 className="pt-2 text-2xl font-extrabold">¿Cómo funciona?</h2><p className="leading-7 text-stone-600">Las páginas de inicio, detalle y acerca se renderizan con Server Components. El buscador utiliza un Client Component con useState y useEffect para consultar y filtrar recetas.</p></div>
      <Link href="/recetas" className="mt-8 inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Ver recetas →</Link>
    </section>
  );
}
