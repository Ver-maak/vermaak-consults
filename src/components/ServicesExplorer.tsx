import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { servicePillars } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const pillar = servicePillars[active] ?? servicePillars[0];

  if (!pillar) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <ul className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {servicePillars.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.slug} className="shrink-0 lg:shrink">
              <button
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-pressed={selected}
                className={cn(
                  "group flex w-full items-center gap-4 rounded-lg border px-5 py-4 text-left outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary",
                  selected
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-interactive)]"
                    : "border-border bg-surface/70 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface",
                )}
              >
                <span
                  className={cn(
                    "font-display text-xs font-extrabold tracking-[0.2em] transition-colors",
                    selected ? "text-primary-foreground/75" : "text-muted-foreground group-hover:text-primary",
                  )}
                >
                  {item.number}
                </span>
                <span className="font-display text-sm font-bold whitespace-nowrap lg:whitespace-normal">
                  {item.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        key={pillar.slug}
        className="reveal reveal-in rounded-lg border border-nav/15 bg-nav p-7 text-nav-foreground shadow-[var(--shadow-elevated)] sm:p-9"
      >
        <h3 className="text-2xl font-extrabold sm:text-3xl">{pillar.title}</h3>
        <p className="mt-4 text-sm text-nav-muted sm:text-base">{pillar.short}</p>
        <ul className="mt-7 grid gap-2 sm:grid-cols-2">
          {pillar.items.slice(0, 8).map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
               <span className="min-w-0 text-nav-muted">{item}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          hash={pillar.slug}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          {pillar.cta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
