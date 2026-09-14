import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "X", Icon: Twitter },
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Vermaak Consults" },
      {
        name: "description",
        content:
          "Talk to Vermaak Consults about digital transformation, enterprise, creative economy, research or workforce programmes. Kampala, Uganda — working across Africa.",
      },
      { property: "og:title", content: "Contact | Vermaak Consults" },
      {
        property: "og:description",
        content: "Let's build something that matters. Start a conversation with our team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something that matters."
        intro="Share a few details about your organisation and the challenge you are working on. We typically respond within two working days."
      />

      <section className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={100} className="grid content-start gap-6">
          <div className="rounded-2xl border border-border bg-surface p-7">
            <h2 className="text-lg font-bold">Reach us directly</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="mailto:info@vermaak.africa" className="hover:text-foreground">
                  info@vermaak.africa
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 size-4 shrink-0 text-primary" />
                vermaak.africa
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Kampala, Uganda | Working across Africa
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7">
            <h2 className="text-lg font-bold">Follow Vermaak</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Social profiles are being set up — email us in the meantime and we will
              respond personally.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
