import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTASection, PageHeader } from "@/components/Blocks";
import { insightCategories, insights } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Vermaak Consults" },
      {
        name: "description",
        content:
          "Perspectives on digital transformation, the creative economy, entrepreneurship, workforce development and innovation across Africa.",
      },
      { property: "og:title", content: "Insights | Vermaak Consults" },
      {
        property: "og:description",
        content: "Ideas, research and practical lessons from our work across Africa.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Ideas, research and practical lessons."
        intro="Short reads on what is actually working across digital transformation, enterprise growth, the creative economy and workforce development in Africa."
      />

      <section className="shell py-16 md:py-20">
        <ul className="flex flex-wrap gap-2" aria-label="Insight categories">
          {insightCategories.map((category) => (
            <li key={category}>
              <span className="inline-flex rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                {category}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((article, index) => (
            <Reveal as="article" key={article.slug} delay={index * 80}>
              <div className="card-surface flex h-full flex-col p-7">
                <span className="w-fit rounded-full bg-primary/12 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-primary uppercase">
                  {article.category}
                </span>
                <h2 className="mt-5 text-xl font-bold text-balance">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-4" />
                    {article.date}
                  </span>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Want these insights applied to your programme?"
        body="We turn research and analysis into decisions, systems and delivery plans your teams can act on."
        primaryLabel="Request a Consultation"
        secondaryLabel="Explore Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
