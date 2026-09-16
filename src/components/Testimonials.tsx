import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(id);
  }, [paused]);

  const active = testimonials[index] ?? testimonials[0];

  if (!active) return null;

  return (
    <Reveal
      className="relative"
      // pause rotation while the visitor is reading or interacting
    >
      <div
        className="relative overflow-hidden rounded-lg border border-border bg-surface p-8 shadow-[var(--shadow-elevated)] sm:p-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <Quote className="relative size-9 text-primary" />
        <blockquote
          key={index}
          className="reveal reveal-in relative mt-6 text-xl font-medium text-balance sm:text-2xl sm:leading-snug"
        >
          "{active.quote}"
        </blockquote>
        <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-base font-bold">{active.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{active.role}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
              className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
              className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-8 flex gap-2">
          {testimonials.map((item, dot) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${dot + 1}`}
              aria-current={dot === index}
              onClick={() => go(dot)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                dot === index ? "w-10 bg-primary" : "w-4 bg-border hover:bg-primary/50",
              )}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
