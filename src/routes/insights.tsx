import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTASection, PageHeader } from "@/components/Blocks";
import { insightCategories, insights } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = insights.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const text = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return matchesCategory && text.includes(query.trim().toLowerCase());
  });

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Ideas, research and practical lessons."
        intro="Short reads on what is actually working across digital transformation, enterprise growth, the creative economy and workforce development in Africa."
      />

      <section className="shell py-16 md:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-2" aria-label="Insight categories">
            {["All", ...insightCategories].map((category) => {
              const selected = category === activeCategory;
              return (
                <li key={category}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "inline-flex rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                      selected
                        ? "border-primary bg-primary/12 text-primary"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                    )}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>

          <label className="relative w-full lg:max-w-xs">
            <span className="sr-only">Search insights</span>
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search insights"
              className="w-full rounded-full border border-border bg-surface py-2.5 pr-4 pl-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </label>
        </div>

        <p className="mt-6 text-xs tracking-wide text-muted-foreground uppercase">
          Showing {filtered.length} of {insights.length} articles
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, index) => (
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

        {filtered.length === 0 && (
          <p className="mt-10 rounded-2xl border border-border bg-surface px-6 py-10 text-center text-sm text-muted-foreground">
            No articles match that filter yet. Try another category or clear your search.
          </p>
        )}
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
