import type { Metadata } from "next";
import BuscadorRecetas from "@/components/buscador-recetas";

export const metadata: Metadata = { title: "Todas las recetas" };

export default function PaginaRecetas() {
  return <section className="mx-auto max-w-6xl px-5 py-14"><h1 className="text-4xl font-extrabold text-stone-900">Explora nuestras recetas</h1><p className="mt-3 max-w-2xl text-stone-600">Busca por nombre o ingrediente y filtra según el tipo de comida.</p><BuscadorRecetas /></section>;
}
