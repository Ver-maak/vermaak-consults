import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTASection, PageHeader, SectionHeading } from "@/components/Blocks";
import { ApproachTimeline } from "@/components/ApproachTimeline";
import { sectors } from "@/lib/site-data";

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
  const [query, setQuery] = useState("");
  const filtered = sectors.filter((sector) =>
    `${sector.title} ${sector.body}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Where We Work"
        intro="We work across sectors where technology, enterprise, creativity and human capability can unlock new opportunities."
      />

      <section className="shell py-20 md:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative w-full sm:max-w-sm">
            <span className="sr-only">Filter sectors</span>
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter sectors — e.g. youth, energy, data"
              className="w-full rounded-full border border-border bg-surface py-2.5 pr-4 pl-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </label>
          <p className="text-xs tracking-wide text-muted-foreground uppercase">
            {filtered.length} of {sectors.length} sectors
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((sector, index) => (
            <Reveal as="li" key={sector.title} delay={(index % 3) * 70}>
              <div className="card-surface group h-full p-7">
                <span className="font-display text-xs font-extrabold tracking-[0.22em] text-primary">
                  {String(sectors.indexOf(sector) + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-lg font-bold transition-colors group-hover:text-primary">
                  {sector.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{sector.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-2xl border border-border bg-surface px-6 py-10 text-center text-sm text-muted-foreground">
            Nothing matches that term — try a broader keyword, or tell us about your
            sector directly.
          </p>
        )}
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Our approach"
            title="How we work in every sector."
            body="The same disciplined process, adapted to the context of each institution, enterprise or programme."
          />
          <div className="mt-14">
            <ApproachTimeline />
          </div>
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
