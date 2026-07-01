import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beatriz faz 15 🌸",
  description:
    "Você está convidado(a) para os 15 anos da Beatriz! 25 de julho de 2026 às 19h.",
  openGraph: {
    title: "Beatriz faz 15 🌸",
    description: "25/07/2026 às 19h — Venha celebrar com a gente!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-nunito bg-paper min-h-screen">{children}</body>
    </html>
  );
}
