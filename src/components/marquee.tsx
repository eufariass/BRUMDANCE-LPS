/** Faixa de texto correndo em loop infinito (só CSS). */
export function Marquee({
  items,
  className = "",
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden py-3 ${className}`} aria-hidden>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span
                key={i}
                className="mx-4 flex items-center gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.2em] sm:text-base"
              >
                {t}
                <span className="text-xs">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
