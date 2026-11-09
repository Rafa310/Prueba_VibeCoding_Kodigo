import Link from "next/link";

export default function NotFound() {
  return <div className="mx-auto max-w-2xl px-5 py-24 text-center"><p className="text-6xl">🔎</p><h1 className="mt-5 text-3xl font-extrabold">Página no encontrada</h1><p className="mt-4 text-stone-600">La página o receta que buscas no existe.</p><Link href="/recetas" className="mt-7 inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Explorar recetas</Link></div>;
}
