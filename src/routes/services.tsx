import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, CTASection, PageHeader } from "@/components/Blocks";
import { servicePillars } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Vermaak Consults" },
      {
        name: "description",
        content:
          "Digital transformation, enterprise and innovation, creative economy, research and MEL, and workforce and skills consulting services.",
      },
      { property: "og:title", content: "Services | Vermaak Consults" },
      {
        property: "og:description",
        content:
          "Five practice areas covering digital, enterprise, creative economy, research and workforce development.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Practical consulting, delivered end to end."
        intro="Five connected practice areas that take organisations from diagnosis and strategy through to build, delivery and measurement."
      />

      <div className="sticky top-18 z-30 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="shell flex gap-2 overflow-x-auto py-3">
          {servicePillars.map((pillar) => (
            <a
              key={pillar.slug}
              href={`#${pillar.slug}`}
              className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-medium whitespace-nowrap text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <span className="mr-2 font-display font-extrabold text-primary">
                {pillar.number}
              </span>
              {pillar.title}
            </a>
          ))}
        </div>
      </div>

      <div className="shell divide-y divide-border">
        {servicePillars.map((pillar) => (
          <section
            key={pillar.slug}
            id={pillar.slug}
            className="grid scroll-mt-28 gap-10 py-16 md:py-20 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <Reveal>
              <p className="font-display text-sm font-extrabold tracking-[0.24em] text-primary">
                {pillar.number}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{pillar.title}</h2>
              <p className="mt-5 max-w-md text-base text-muted-foreground">
                {pillar.short}
              </p>
              <div className="mt-8">
                <ButtonLink to="/contact">{pillar.cta}</ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-colors hover:border-primary/50"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
      </div>

      <CTASection
        title="Not sure which service fits?"
        body="Tell us about the challenge and we will propose the right mix of research, design, technology and delivery support."
        primaryLabel="Discuss Your Challenge"
        secondaryLabel="See Where We Work"
        secondaryTo="/sectors"
      />
    </>
  );
}
