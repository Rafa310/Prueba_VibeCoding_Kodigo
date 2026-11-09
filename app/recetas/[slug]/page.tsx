import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarReceta, recetas } from "@/lib/recetas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return recetas.map((receta) => ({ slug: receta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const receta = buscarReceta(slug);
  return { title: receta?.nombre || "Receta no encontrada" };
}

export default async function DetalleReceta({ params }: Props) {
  const { slug } = await params;
  const receta = buscarReceta(slug);
  if (!receta) notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link href="/recetas" className="font-bold text-orange-700 hover:underline">← Volver a recetas</Link>
      <div className="mt-7 grid gap-8 md:grid-cols-5">
        <div className="flex min-h-64 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 text-9xl md:col-span-2" aria-hidden="true">{receta.emoji}</div>
        <div className="flex flex-col justify-center md:col-span-3"><span className="text-sm font-bold uppercase tracking-widest text-orange-700">{receta.categoria}</span><h1 className="mt-3 text-4xl font-extrabold text-stone-900 sm:text-5xl">{receta.nombre}</h1><p className="mt-5 text-lg leading-8 text-stone-600">{receta.descripcion}</p><div className="mt-6 flex flex-wrap gap-3"><span className="rounded-full bg-orange-100 px-4 py-2 font-semibold text-orange-800">⏱ {receta.minutos} minutos</span><span className="rounded-full bg-stone-100 px-4 py-2 font-semibold text-stone-700">🍽 {receta.porciones} {receta.porciones === 1 ? "porción" : "porciones"}</span></div></div>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <section className="rounded-2xl border border-orange-100 bg-white p-7 md:col-span-2"><h2 className="text-2xl font-extrabold">Ingredientes</h2><ul className="mt-5 space-y-3">{receta.ingredientes.map((ingrediente) => <li className="flex gap-3 text-stone-700" key={ingrediente}><span className="text-orange-600">✓</span><span>{ingrediente}</span></li>)}</ul></section>
        <section className="rounded-2xl border border-orange-100 bg-white p-7 md:col-span-3"><h2 className="text-2xl font-extrabold">Preparación</h2><ol className="mt-5 space-y-5">{receta.pasos.map((paso, indice) => <li className="flex gap-4" key={paso}><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 font-extrabold text-orange-700">{indice + 1}</span><p className="pt-1 leading-7 text-stone-700">{paso}</p></li>)}</ol></section>
      </div>
    </article>
  );
}
