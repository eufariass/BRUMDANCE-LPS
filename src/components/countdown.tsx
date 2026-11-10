"use client";

import { useEffect, useState } from "react";

type Left = { d: number; h: number; m: number; s: number; done: boolean };

function timeLeft(end: number): Left {
  const ms = Math.max(0, end - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor(ms / 3_600_000) % 24,
    m: Math.floor(ms / 60_000) % 60,
    s: Math.floor(ms / 1000) % 60,
    done: ms === 0,
  };
}

/** Contagem regressiva real até `endsAt`. Some sozinha quando a oferta acaba. */
export function Countdown({ endsAt, center = false }: { endsAt: string; center?: boolean }) {
  const [left, setLeft] = useState<Left | null>(null);

  useEffect(() => {
    const end = new Date(endsAt).getTime();
    const tick = () => setLeft(timeLeft(end));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [endsAt]);

  if (left?.done) return null;

  const units: [string, number | undefined][] = [
    ["dias", left?.d],
    ["horas", left?.h],
    ["min", left?.m],
    ["seg", left?.s],
  ];

  return (
    <div className="mt-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-lilac">A oferta Black Friday termina em</p>
      <div className={`mt-3 flex justify-center gap-2 ${center ? "" : "md:justify-start"}`} role="timer" aria-live="off">
        {units.map(([label, v], i) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-16 rounded-xl bg-black/70 py-2 text-center ring-1 ring-pink/40 backdrop-blur sm:w-[4.5rem]">
              <span className="block text-2xl font-bold tabular-nums sm:text-3xl">
                {v === undefined ? "--" : String(v).padStart(2, "0")}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-white/60">{label}</span>
            </div>
            {i < units.length - 1 && <span className="text-xl font-bold text-pink/70">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
