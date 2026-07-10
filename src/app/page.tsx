import Quiz from "@/components/Quiz";
import { BRAND } from "@/lib/product";

export default function Page() {
  return (
    <main className="bg-cosmos min-h-screen">
      <Quiz />

      <footer className="py-8 text-center text-arc-muted/50 text-sm border-t border-arc-line">
        <p className="font-serif italic text-base">{BRAND.name} · {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
