import { useState } from "react";
import { approachSteps } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ApproachTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative hidden lg:block">
        <div aria-hidden className="absolute top-6 right-0 left-0 h-px bg-border" />
        <div
          aria-hidden
          className="absolute top-6 left-0 h-px bg-primary transition-all duration-500"
          style={{ width: `${((active + 1) / approachSteps.length) * 100}%` }}
        />
        <ol className="relative grid grid-cols-4 gap-6">
          {approachSteps.map((step, index) => {
            const reached = index <= active;
            return (
              <li key={step.number}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  aria-pressed={index === active}
                  className="group block w-full text-left"
                >
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-full border font-display text-sm font-extrabold transition-all",
                      reached
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-surface text-muted-foreground group-hover:border-primary/60",
                    )}
                  >
                    {step.number}
                  </span>
                  <h3
                    className={cn(
                      "mt-6 text-lg font-bold transition-colors",
                      index === active ? "text-primary" : "text-foreground",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.body}</p>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <ol className="relative space-y-6 border-l border-border pl-8 lg:hidden">
        {approachSteps.map((step, index) => (
          <li key={step.number} className="relative">
            <span className="absolute top-1 -left-[2.55rem] grid size-8 place-items-center rounded-full border border-primary bg-primary font-display text-[0.7rem] font-extrabold text-primary-foreground">
              {step.number}
            </span>
            <h3 className="text-base font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            {index < approachSteps.length - 1 && <span className="sr-only">then</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}
