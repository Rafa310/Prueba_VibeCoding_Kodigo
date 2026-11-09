import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-orange-100 bg-white/90">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-orange-700">🍽️ Recetario Fácil</Link>
        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-stone-600">
          <Link href="/" className="hover:text-orange-700">Inicio</Link>
          <Link href="/recetas" className="hover:text-orange-700">Recetas</Link>
          <Link href="/acerca" className="hover:text-orange-700">Acerca de</Link>
        </div>
      </nav>
    </header>
  );
}
