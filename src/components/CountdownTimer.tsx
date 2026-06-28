"use client";

import { useEffect, useState } from "react";
import { EVENT_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = EVENT_DATE.getTime() - Date.now();
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
      <div className="bg-white/60 backdrop-blur-sm border border-bia-rose/30 rounded-2xl px-5 py-4 min-w-[80px] text-center shadow-md animate-glow">
        <span className="text-4xl sm:text-5xl font-bold text-bia-fuchsia tabular-nums">
          {value}
        </span>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-bia-deep/60">
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

  // Server render / first paint: skeleton
  if (timeLeft === undefined) {
    return (
      <div className="flex gap-4 justify-center">
        {["Dias", "Horas", "Min", "Seg"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="bg-white/40 border border-bia-rose/20 rounded-2xl px-5 py-4 min-w-[80px] h-[80px] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bia-deep/40">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft === null) {
    return (
      <div className="text-center py-4">
        <p className="text-2xl font-bold text-bia-fuchsia animate-pulse2">
          Chegou o grande dia! 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-5 justify-center flex-wrap">
      <Unit value={String(timeLeft.days)} label="Dias" />
      <Unit value={pad(timeLeft.hours)} label="Horas" />
      <Unit value={pad(timeLeft.minutes)} label="Min" />
      <Unit value={pad(timeLeft.seconds)} label="Seg" />
    </div>
  );
}
