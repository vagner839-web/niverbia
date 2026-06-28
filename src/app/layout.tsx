import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniversário da Bia Brito 🎉",
  description: "Venha celebrar o aniversário de Bia Brito! 24 de julho de 2026 às 19h.",
  openGraph: {
    title: "Aniversário da Bia Brito",
    description: "24 de julho de 2026 às 19h — Celebre com a gente!",
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
      <body className="font-nunito bg-gradient-to-br from-bia-light via-white to-bia-blush/30 min-h-screen">
        {children}
      </body>
    </html>
  );
}
