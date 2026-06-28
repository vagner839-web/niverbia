import CountdownTimer from "./CountdownTimer";
import { PERSON_NAME, EVENT_DATE_DISPLAY, EVENT_TIME_DISPLAY } from "@/lib/constants";

function Petal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full opacity-20 animate-float"
      style={style}
    />
  );
}

export default function Hero() {
  const petals = [
    { width: 60, height: 60, top: "8%", left: "5%", background: "#D946EF", animationDelay: "0s" },
    { width: 40, height: 40, top: "15%", right: "8%", background: "#FF6B9D", animationDelay: "0.8s" },
    { width: 80, height: 80, top: "60%", left: "3%", background: "#FECDD3", animationDelay: "1.2s" },
    { width: 50, height: 50, bottom: "10%", right: "5%", background: "#D946EF", animationDelay: "0.4s" },
    { width: 30, height: 30, top: "40%", right: "12%", background: "#FF6B9D", animationDelay: "1.6s" },
    { width: 70, height: 70, bottom: "25%", left: "10%", background: "#FECDD3", animationDelay: "2s" },
    { width: 25, height: 25, top: "25%", left: "20%", background: "#D946EF", animationDelay: "0.6s" },
    { width: 45, height: 45, bottom: "40%", right: "18%", background: "#FF6B9D", animationDelay: "1.4s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative background circles */}
      {petals.map((p, i) => (
        <Petal
          key={i}
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            bottom: (p as any).bottom,
            background: p.background,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      {/* Large soft background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-bia-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
        {/* Pre-heading */}
        <p
          className="text-bia-deep/60 font-medium text-base sm:text-lg tracking-wide animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Você está convidada para o aniversário de
        </p>

        {/* Name */}
        <h1
          className="font-dancing text-shimmer text-7xl sm:text-8xl md:text-[9rem] leading-none animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {PERSON_NAME}
        </h1>

        {/* Date badge */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-bia-fuchsia to-bia-rose text-white font-semibold text-base sm:text-lg px-6 py-2.5 rounded-full shadow-lg shadow-bia-rose/30">
            <span>🌸</span>
            {EVENT_DATE_DISPLAY} · {EVENT_TIME_DISPLAY}
            <span>🌸</span>
          </span>
        </div>

        {/* Countdown */}
        <div
          className="w-full animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-bia-deep/50 text-sm font-medium uppercase tracking-widest mb-5">
            Faltam
          </p>
          <CountdownTimer />
        </div>

        {/* Scroll cue */}
        <div
          className="animate-fade-up mt-4"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex flex-col items-center gap-1 text-bia-rose/60">
            <span className="text-xs tracking-widest uppercase font-medium">Saiba mais</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
