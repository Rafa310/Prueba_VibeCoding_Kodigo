"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <div role="alert" className="mx-auto max-w-2xl px-5 py-24 text-center"><h1 className="text-3xl font-extrabold text-stone-900">Algo salió mal</h1><p className="mt-4 text-stone-600">No pudimos mostrar esta página. Intenta nuevamente.</p><button onClick={() => reset()} className="mt-7 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Reintentar</button></div>;
}
