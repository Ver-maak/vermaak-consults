import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Rocket,
  Palette,
  BarChart3,
  GraduationCap,
  Globe2,
  Sparkles,
  Wrench,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, CTASection, SectionHeading } from "@/components/Blocks";
import {
  approachSteps,
  ecosystem,
  servicePillars,
  whyVermaak,
} from "@/lib/site-data";

const pillarIcons = [Cpu, Rocket, Palette, BarChart3, GraduationCap];
const whyIcons = [Globe2, Cpu, Sparkles, Wrench];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vermaak Consults — Turning Ideas Into Impact" },
      {
        name: "description",
        content:
          "Consulting at the intersection of technology, creativity, enterprise and development. Vermaak Consults designs and implements practical solutions across Africa.",
      },
      { property: "og:title", content: "Vermaak Consults — Turning Ideas Into Impact" },
      {
        property: "og:description",
        content:
          "Consulting at the intersection of technology, creativity, enterprise and development.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 size-[28rem] rounded-full bg-primary/15 blur-3xl"
        />
        <div className="shell grid gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Vermaak Consults</p>
            <h1 className="mt-5 text-4xl font-extrabold text-balance sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Turning Ideas Into <span className="text-gradient-accent">Impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-foreground/90 sm:text-xl">
              Consulting at the intersection of technology, creativity, enterprise and
              development.
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Vermaak Consults works with organisations, enterprises and development
              programmes to design practical solutions, strengthen capabilities and create
              sustainable impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/contact">Work With Us</ButtonLink>
              <ButtonLink to="/services" variant="ghost">
                Explore Our Services
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["5", "Practice areas"],
                ["11", "Sectors served"],
                ["1", "Connected ecosystem"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl font-extrabold text-primary">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)]">
              <img
                src={heroImage}
                alt="African technology and business teams collaborating in a modern innovation hub"
                width={1280}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-elevated)] sm:block">
              <p className="text-xs tracking-[0.18em] text-primary uppercase">
                Strategy · Technology
              </p>
              <p className="mt-1 font-display text-sm font-bold">Creativity · Impact</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="We help organisations move from ideas to implementation."
          body="Vermaak Consults combines consulting expertise with technology, research, creativity and hands-on implementation — so strategies do not stop at documents, they become working systems, stronger enterprises and measurable results."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? Cpu;
            return (
              <Reveal as="li" key={pillar.slug} delay={index * 70}>
                <div className="card-surface flex h-full flex-col p-7">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {pillar.short}
                  </p>
                  <Link
                    to="/services"
                    hash={pillar.slug}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Why us"
            title="Why Vermaak?"
            body="A consultancy built for African realities — practical, technology-enabled and accountable to results."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyVermaak.map((item, index) => {
              const Icon = whyIcons[index] ?? Globe2;
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="card-surface h-full p-7">
                    <Icon className="size-6 text-primary" />
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Our approach"
          title="A clear path from challenge to scale."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 80} className="relative">
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.body}</p>
              </div>
              {index < approachSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-3 hidden h-px w-6 bg-primary/50 lg:block"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="shell grid gap-14 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Vermaak ecosystem"
            title="Consulting backed by an ecosystem of innovation."
            body="Vermaak Consults is part of the broader Vermaak ecosystem — one company combining consulting, technology, learning, events and creative enterprise development. Clients draw on whichever capabilities their challenge needs."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {ecosystem.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="card-surface h-full p-6">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
            <div className="sm:col-span-2">
              <ButtonLink to="/about" variant="ghost">
                Explore the Vermaak Ecosystem
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's work together on your next challenge."
        body="Whether you are designing a programme, digitising operations or building enterprise and talent pipelines, we can help you move from idea to implementation."
        primaryLabel="Request a Consultation"
        secondaryLabel="Explore Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
