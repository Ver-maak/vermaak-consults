import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CTASection, PageHeader, SectionHeading } from "@/components/Blocks";
import { approachSteps, sectors } from "@/lib/site-data";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors | Vermaak Consults" },
      {
        name: "description",
        content:
          "We work across government, development, energy, agriculture, finance, youth, creative industries, technology, SMEs and education across Africa.",
      },
      { property: "og:title", content: "Sectors | Vermaak Consults" },
      {
        property: "og:description",
        content:
          "Where technology, enterprise, creativity and human capability unlock new opportunities.",
      },
    ],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Where We Work"
        intro="We work across sectors where technology, enterprise, creativity and human capability can unlock new opportunities."
      />

      <section className="shell py-20 md:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <Reveal as="li" key={sector.title} delay={(index % 3) * 70}>
              <div className="card-surface h-full p-7">
                <span className="font-display text-xs font-extrabold tracking-[0.22em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-lg font-bold">{sector.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{sector.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Our approach"
            title="How we work in every sector."
            body="The same disciplined process, adapted to the context of each institution, enterprise or programme."
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
        </div>
      </section>

      <CTASection
        title="Working in one of these sectors?"
        body="We bring sector understanding, research capability and delivery experience to programmes and organisations across Africa."
        primaryLabel="Start a Conversation"
        secondaryLabel="Explore Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
