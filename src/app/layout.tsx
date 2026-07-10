import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/product";

export const metadata: Metadata = {
  title: `${BRAND.name} — Teste de Personalidade`,
  description: BRAND.tagline,
  openGraph: {
    title: `${BRAND.name} — Teste de Personalidade`,
    description: BRAND.tagline,
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
      <body className="font-nunito bg-arc-bg min-h-screen">{children}</body>
    </html>
  );
}
