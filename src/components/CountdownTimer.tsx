"use client";

import { useEffect, useState } from "react";
import { OFFER_DEADLINE } from "@/lib/product";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = OFFER_DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-arc-surface2/80 backdrop-blur-sm border border-arc-gold/25 rounded-2xl px-5 py-4 min-w-[76px] text-center shadow-md animate-glow">
        <span className="text-3xl sm:text-4xl font-bold text-arc-gold tabular-nums">
          {value}
        </span>
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-arc-muted">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Server render / primeira pintura: skeleton
  if (timeLeft === undefined) {
    return (
      <div className="flex gap-3 sm:gap-4 justify-center">
        {["Dias", "Horas", "Min", "Seg"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="bg-arc-surface2/50 border border-arc-line rounded-2xl px-5 py-4 min-w-[76px] h-[72px] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-arc-muted/50">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft === null) {
    return (
      <div className="text-center py-2">
        <p className="text-xl font-bold text-arc-gold animate-pulse2">
          A oferta terminou 🔒
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
      <Unit value={String(timeLeft.days)} label="Dias" />
      <Unit value={pad(timeLeft.hours)} label="Horas" />
      <Unit value={pad(timeLeft.minutes)} label="Min" />
      <Unit value={pad(timeLeft.seconds)} label="Seg" />
    </div>
  );
}
