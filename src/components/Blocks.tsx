import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="page-header border-b border-border">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl font-extrabold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {body && <p className="mt-5 text-base text-muted-foreground sm:text-lg">{body}</p>}
    </Reveal>
  );
}

export function ButtonLink({
  to,
  hash,
  href,
  children,
  variant = "primary",
}: {
  to?:
    | "/"
    | "/about"
    | "/services"
    | "/sectors"
    | "/insights"
    | "/contact"
    | undefined;
  hash?: string | undefined;
  href?: string | undefined;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const className = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    variant === "primary"
      ? "bg-[image:var(--gradient-accent)] text-primary-foreground shadow-[var(--shadow-interactive)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] active:translate-y-0"
      : "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary active:translate-y-0",
  );

  const inner = (
    <>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to ?? "/contact"} {...(hash ? { hash } : {})} className={className}>
      {inner}
    </Link>
  );
}

export function CTASection({
  title,
  body,
  primaryLabel = "Start a Conversation",
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: "/services" | "/sectors" | "/about" | "/insights";
}) {
  return (
    <section className="shell py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-lg border border-primary/25 bg-[image:var(--gradient-surface)] px-6 py-14 shadow-[var(--shadow-elevated)] sm:px-12 md:py-20">
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-extrabold text-balance sm:text-4xl">{title}</h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/contact">{primaryLabel}</ButtonLink>
            {secondaryLabel && secondaryTo && (
              <ButtonLink to={secondaryTo} variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
