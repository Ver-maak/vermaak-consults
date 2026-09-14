import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Users, ShieldCheck, Target } from "lucide-react";
import patternImage from "@/assets/pattern.jpg";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, CTASection, PageHeader, SectionHeading } from "@/components/Blocks";
import { ecosystem } from "@/lib/site-data";

const values = [
  {
    title: "Innovation",
    body: "We look for better ways to solve problems, using technology, design and evidence.",
    Icon: Lightbulb,
  },
  {
    title: "Inclusion",
    body: "We design for women, youth, small enterprises and communities often left out of growth.",
    Icon: Users,
  },
  {
    title: "Integrity",
    body: "Honest advice, transparent methods and findings we stand behind.",
    Icon: ShieldCheck,
  },
  {
    title: "Impact",
    body: "We measure success by what changes for clients, enterprises and people.",
    Icon: Target,
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Vermaak Consults" },
      {
        name: "description",
        content:
          "Vermaak is an African creative economy and digital innovation company helping organisations unlock opportunity through technology, creativity, knowledge and skills.",
      },
      { property: "og:title", content: "About | Vermaak Consults" },
      {
        property: "og:description",
        content: "Building practical solutions for a changing Africa.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building practical solutions for a changing Africa."
        intro="Vermaak is an African creative-economy and digital innovation company helping organisations, enterprises and individuals unlock opportunities through technology, creativity, knowledge and skills."
      />

      <section className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-border bg-surface p-8 md:p-10">
          <p className="eyebrow">Our Mission</p>
          <p className="mt-5 text-xl font-semibold text-balance sm:text-2xl">
            To enable organisations and people to turn ideas, creativity and technology
            into sustainable economic and social value.
          </p>
        </Reveal>
        <Reveal
          delay={100}
          className="rounded-3xl border border-border bg-surface p-8 md:p-10"
        >
          <p className="eyebrow">Our Vision</p>
          <p className="mt-5 text-xl font-semibold text-balance sm:text-2xl">
            A more innovative, digitally enabled and opportunity-rich Africa.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="shell py-20 md:py-28">
          <SectionHeading eyebrow="Our values" title="What guides our work." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, body, Icon }, index) => (
              <Reveal key={title} delay={index * 70}>
                <div className="card-surface h-full p-7">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Vermaak ecosystem"
            title="Consulting backed by an ecosystem of innovation."
            body="Vermaak Consults is the consultancy arm of Vermaak. It sits alongside our learning, event technology and creative platforms as complementary parts of one ecosystem — so a client can move from research and strategy to training, tooling and creative enterprise support without changing partners."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {ecosystem.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="card-surface h-full p-6">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink to="/services" variant="ghost">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <Reveal delay={120}>
          <img
            src={patternImage}
            alt="Abstract geometric pattern representing the Vermaak innovation ecosystem"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>
      </section>

      <CTASection
        title="Let's build something that matters."
        body="Tell us where your organisation wants to go. We will bring the research, design, technology and delivery capability to get there."
        primaryLabel="Start a Conversation"
        secondaryLabel="Read Our Insights"
        secondaryTo="/insights"
      />
    </>
  );
}
