import Hero from "@/components/Hero";
import GiftListSection from "@/components/GiftListSection";
import GiftSection from "@/components/GiftSection";

export default function Page() {
  return (
    <main>
      <Hero />
      <GiftListSection />
      <GiftSection />

      {/* Footer */}
      <footer className="py-8 text-center text-bia-deep/40 text-sm border-t border-bia-rose/10">
        <p className="font-serif italic text-base">
          Feito com <span className="text-bia-rose">♥</span> para a Beatriz · 2026
        </p>
      </footer>
    </main>
  );
}
