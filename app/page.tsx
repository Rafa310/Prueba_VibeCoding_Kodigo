import Link from "next/link";
import RecetaCard from "@/components/receta-card";
import { recetas } from "@/lib/recetas";

export default function Inicio() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-100 via-amber-50 to-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm">Cocina fácil, todos los días</span>
          <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-6xl">Algo rico comienza con una receta sencilla.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">Encuentra ideas para desayunos, almuerzos y cenas con ingredientes cotidianos.</p>
          <Link href="/recetas" className="mt-8 inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-orange-700">Explorar recetas →</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-3xl font-extrabold text-stone-900">Para empezar</h2><p className="mt-2 text-stone-600">Tres ideas fáciles para tu próxima comida.</p></div><Link href="/recetas" className="font-bold text-orange-700 hover:underline">Ver todas →</Link></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{recetas.slice(0, 3).map((receta) => <RecetaCard key={receta.slug} receta={receta} />)}</div>
      </section>
    </>
  );
}
