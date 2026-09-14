import { marqueeWords } from "@/lib/site-data";

export function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];

  return (
    <div
      aria-hidden
      className="group relative overflow-hidden border-y border-border bg-surface/40 py-5"
    >
      <div className="marquee-track flex w-max items-center gap-10 group-hover:[animation-play-state:paused]">
        {row.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-10">
            <span className="font-display text-lg font-extrabold tracking-[0.18em] whitespace-nowrap text-foreground/70 uppercase sm:text-xl">
              {word}
            </span>
            <span className="size-1.5 shrink-0 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
