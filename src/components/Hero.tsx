import CountdownTimer from "./CountdownTimer";
import {
  PERSON_NAME,
  EVENT_AGE,
  EVENT_DATE_DISPLAY,
  EVENT_TIME_DISPLAY,
  EVENT_LOCATION,
} from "@/lib/constants";

/* ── Decorative pieces ─────────────────────────────────────── */

// Soft watercolor blob
function Blob({ style }: { style: React.CSSProperties }) {
  return <div className="absolute rounded-full blur-2xl" style={style} />;
}

// Five-petal blossom
function Blossom({
  className,
  outline = false,
}: {
  className?: string;
  outline?: boolean;
}) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g transform="translate(50 50)">
        {petals.map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="-22"
            rx="11"
            ry="18"
            transform={`rotate(${a})`}
            fill={outline ? "none" : "currentColor"}
            stroke={outline ? "currentColor" : "none"}
            strokeWidth={outline ? 3 : 0}
          />
        ))}
        <circle r="7" fill="#F4D6DD" />
      </g>
    </svg>
  );
}

// Line-art lily sprig
function LineLily({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M60 44 C 48 22, 52 10, 60 3 C 68 10, 72 22, 60 44 Z" />
      <path d="M60 46 C 40 36, 26 38, 17 45 C 30 54, 48 56, 60 46 Z" />
      <path d="M60 46 C 80 36, 94 38, 103 45 C 90 54, 72 56, 60 46 Z" />
      <path d="M60 46 C 56 30, 46 22, 38 18" />
      <path d="M60 46 C 64 30, 74 22, 82 18" />
      <path d="M60 44 C 60 72, 50 92, 40 106" />
      <path d="M56 66 C 44 66, 34 72, 28 82" />
      <path d="M53 86 C 42 88, 34 96, 30 106" />
    </svg>
  );
}

// Ornamental divider flourish
function Flourish({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 300 20"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      <line x1="15" y1="10" x2="120" y2="10" opacity="0.55" />
      <line x1="180" y1="10" x2="285" y2="10" opacity="0.55" />
      <path d="M120 10 C 133 2, 133 18, 146 10 C 133 18, 133 2, 120 10 Z" />
      <path d="M180 10 C 167 2, 167 18, 154 10 C 167 18, 167 2, 180 10 Z" />
      <circle cx="150" cy="10" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

// A cluster of watercolor blobs + blossoms for a corner
function FloralCorner({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const base: Record<string, string> = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    bl: "bottom-0 left-0",
    br: "bottom-0 right-0",
  };

  return (
    <div
      className={`pointer-events-none absolute ${base[position]} w-56 h-56 sm:w-72 sm:h-72`}
      aria-hidden="true"
    >
      {/* Watercolor washes */}
      <Blob
        style={{
          width: 150,
          height: 150,
          top: position.startsWith("t") ? -30 : "auto",
          bottom: position.startsWith("b") ? -30 : "auto",
          left: position.endsWith("l") ? -20 : "auto",
          right: position.endsWith("r") ? -20 : "auto",
          background:
            "radial-gradient(circle, rgba(226,124,150,0.55), rgba(226,124,150,0))",
        }}
      />
      <Blob
        style={{
          width: 110,
          height: 110,
          top: position.startsWith("t") ? 20 : "auto",
          bottom: position.startsWith("b") ? 20 : "auto",
          left: position.endsWith("l") ? 40 : "auto",
          right: position.endsWith("r") ? 40 : "auto",
          background:
            "radial-gradient(circle, rgba(244,150,180,0.5), rgba(244,150,180,0))",
        }}
      />
      <Blob
        style={{
          width: 70,
          height: 70,
          top: position.startsWith("t") ? 70 : "auto",
          bottom: position.startsWith("b") ? 70 : "auto",
          left: position.endsWith("l") ? 10 : "auto",
          right: position.endsWith("r") ? 10 : "auto",
          background:
            "radial-gradient(circle, rgba(207,150,220,0.4), rgba(207,150,220,0))",
        }}
      />

      {/* Line-lily accent on tr / bl (like the invitation) */}
      {(position === "tr" || position === "bl") && (
        <LineLily
          className={`absolute w-28 h-28 sm:w-36 sm:h-36 text-bia-fuchsia/70 ${
            position === "tr"
              ? "top-2 right-2 -rotate-12"
              : "bottom-2 left-2 rotate-[200deg]"
          }`}
        />
      )}

      {/* Solid blossoms */}
      <Blossom
        className={`absolute w-12 h-12 text-bia-rose/80 ${
          position === "tl"
            ? "top-6 left-6"
            : position === "tr"
            ? "top-8 right-10"
            : position === "bl"
            ? "bottom-8 left-10"
            : "bottom-6 right-6"
        }`}
      />
      <Blossom
        className={`absolute w-8 h-8 text-bia-rose/60 ${
          position === "tl"
            ? "top-20 left-24"
            : position === "tr"
            ? "top-24 right-4"
            : position === "bl"
            ? "bottom-24 left-4"
            : "bottom-20 right-24"
        }`}
      />
      <Blossom
        outline
        className={`absolute w-6 h-6 text-bia-fuchsia/50 ${
          position === "tl"
            ? "top-28 left-8"
            : position === "tr"
            ? "top-4 right-28"
            : position === "bl"
            ? "bottom-4 left-28"
            : "bottom-28 right-8"
        }`}
      />
    </div>
  );
}

/* ── Small info row (icon + text) ──────────────────────────── */
function InfoIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 text-bia-fuchsia">
      {children}
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      <FloralCorner position="tl" />
      <FloralCorner position="tr" />
      <FloralCorner position="bl" />
      <FloralCorner position="br" />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
        {/* Invitation line */}
        <p
          className="font-serif italic text-bia-deep/70 text-lg sm:text-xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Com todo carinho, você está convidado(a)
        </p>

        {/* Name */}
        <h1
          className="font-script text-shimmer text-7xl sm:text-8xl md:text-[10rem] leading-[0.9] animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {PERSON_NAME}
        </h1>

        {/* "faz 15" */}
        <p
          className="font-serif font-bold text-bia-deep text-3xl sm:text-4xl tracking-[0.25em] uppercase -mt-2 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          faz {EVENT_AGE}
        </p>

        <Flourish
          className="w-56 sm:w-64 h-5 text-bia-rose animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        />

        {/* Time */}
        <div
          className="flex flex-col items-center gap-1 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <InfoIcon>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
            </svg>
          </InfoIcon>
          <span className="font-serif font-semibold text-bia-deep text-2xl sm:text-3xl tracking-wide">
            {EVENT_TIME_DISPLAY}
          </span>
        </div>

        {/* Date */}
        <div
          className="flex flex-col items-center gap-1 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <InfoIcon>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M8 3v4M16 3v4" />
            </svg>
          </InfoIcon>
          <span className="font-serif font-semibold text-bia-deep text-2xl sm:text-3xl tracking-wide">
            {EVENT_DATE_DISPLAY}
          </span>
        </div>

        {/* Address box */}
        <div
          className="animate-fade-up w-full max-w-md mt-2"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative rounded-md border-2 border-bia-rose/50 p-1">
            <div className="rounded-sm border border-bia-rose/30 px-5 py-6">
              <div className="flex flex-col items-center gap-3">
                <svg className="w-8 h-8 text-bia-fuchsia" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.8.4.3 1 .3 1.4 0C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <div className="font-serif text-bia-deep text-lg sm:text-xl font-semibold uppercase tracking-wide leading-snug">
                  {EVENT_LOCATION.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="font-dancing text-bia-rose text-2xl">
                  {EVENT_LOCATION.reference}
                </p>
                {EVENT_LOCATION.mapsUrl && (
                  <a
                    href={EVENT_LOCATION.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 bg-gradient-to-r from-bia-fuchsia to-bia-rose text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md shadow-bia-rose/30 hover:scale-105 transition"
                  >
                    <span>📍</span> Ver no mapa
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div
          className="w-full animate-fade-up mt-4"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="font-serif italic text-bia-deep/60 text-lg mb-4">
            Faltam
          </p>
          <CountdownTimer />
        </div>

        {/* Scroll cue */}
        <div
          className="animate-fade-up mt-2"
          style={{ animationDelay: "0.85s" }}
        >
          <div className="flex flex-col items-center gap-1 text-bia-rose/60">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Saiba mais</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
