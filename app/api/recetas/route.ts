import { NextRequest, NextResponse } from "next/server";
import { recetas } from "@/lib/recetas";

export async function GET(request: NextRequest) {
  const busqueda = (request.nextUrl.searchParams.get("q") || "").trim().toLocaleLowerCase("es");
  const categoria = request.nextUrl.searchParams.get("categoria") || "Todas";
  const resultado = recetas.filter((receta) => {
    const coincideTexto = `${receta.nombre} ${receta.descripcion} ${receta.ingredientes.join(" ")}`.toLocaleLowerCase("es").includes(busqueda);
    const coincideCategoria = categoria === "Todas" || receta.categoria === categoria;
    return coincideTexto && coincideCategoria;
  });
  return NextResponse.json(resultado);
}
