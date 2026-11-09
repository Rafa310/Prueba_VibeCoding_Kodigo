import Link from "next/link";
import type { Receta } from "@/lib/recetas";

export default function RecetaCard({ receta }: { receta: Receta }) {
  return (
    <Link href={`/recetas/${receta.slug}`} className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 text-7xl" aria-hidden="true">{receta.emoji}</div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-orange-700"><span>{receta.categoria}</span><span>⏱ {receta.minutos} min</span></div>
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-orange-700">{receta.nombre}</h3>
        <p className="text-sm leading-6 text-stone-600">{receta.descripcion}</p>
        <span className="inline-block text-sm font-bold text-orange-700">Ver receta →</span>
      </div>
    </Link>
  );
}
