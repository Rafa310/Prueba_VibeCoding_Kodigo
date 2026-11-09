"use client";

import { useEffect, useState } from "react";
import RecetaCard from "@/components/receta-card";
import type { Receta } from "@/lib/recetas";

const categorias = ["Todas", "Desayuno", "Almuerzo", "Cena"];

export default function BuscadorRecetas() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const cargar = async () => {
      setCargando(true);
      setError("");
      try {
        const parametros = new URLSearchParams({ q: busqueda, categoria });
        const respuesta = await fetch(`/api/recetas?${parametros}`, { signal: controller.signal });
        if (!respuesta.ok) throw new Error("No se pudieron obtener las recetas.");
        const datos: Receta[] = await respuesta.json();
        if (!controller.signal.aborted) setRecetas(datos);
      } catch (err) {
        if (!controller.signal.aborted) setError(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
      } finally {
        if (!controller.signal.aborted) setCargando(false);
      }
    };
    void cargar();
    return () => controller.abort();
  }, [busqueda, categoria, intento]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:flex-row">
        <label className="flex-1 text-sm font-bold text-stone-700">Buscar recetas
          <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Ej. pasta, pollo, tomate..." className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 font-normal outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
        </label>
        <label className="text-sm font-bold text-stone-700 sm:w-52">Categoría
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 font-normal outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
            {categorias.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div aria-live="polite" className="mt-8">
        {cargando ? (
          <div role="status" className="rounded-2xl border border-orange-100 bg-white p-10 text-center text-stone-600">Cargando recetas...</div>
        ) : error ? (
          <div role="alert" className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center"><p className="font-semibold text-red-800">{error}</p><button onClick={() => setIntento((n) => n + 1)} className="mt-4 rounded-lg bg-red-700 px-5 py-2 font-bold text-white hover:bg-red-800">Reintentar</button></div>
        ) : recetas.length === 0 ? (
          <div className="rounded-2xl border border-orange-100 bg-white p-10 text-center text-stone-600">No encontramos recetas. Prueba otra búsqueda.</div>
        ) : (
          <><p className="mb-5 text-sm font-medium text-stone-500">{recetas.length} {recetas.length === 1 ? "receta encontrada" : "recetas encontradas"}</p><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{recetas.map((receta) => <RecetaCard key={receta.slug} receta={receta} />)}</div></>
        )}
      </div>
    </>
  );
}
