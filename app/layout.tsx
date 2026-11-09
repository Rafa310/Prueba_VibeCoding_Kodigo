import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

const nombre = process.env.NEXT_PUBLIC_APP_NAME || "Recetario Fácil";

export const metadata: Metadata = {
  title: { default: nombre, template: `%s | ${nombre}` },
  description: "Descubre recetas caseras, sencillas y deliciosas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-orange-100 bg-white px-5 py-7 text-center text-sm text-stone-500">Recetario Fácil · Proyecto académico con Next.js</footer>
        </div>
      </body>
    </html>
  );
}
