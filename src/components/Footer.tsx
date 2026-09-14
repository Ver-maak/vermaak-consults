import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { servicePillars } from "@/lib/site-data";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/sectors", label: "Sectors" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "X", Icon: Twitter },
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-extrabold tracking-[0.16em] uppercase">
            Vermaak Consults
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Turning Ideas Into Impact.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Navigation
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Services
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {servicePillars.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Kampala, Uganda
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="mailto:info@vermaak.africa" className="hover:text-foreground">
                info@vermaak.africa
              </a>
            </li>
            <li>vermaak.africa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vermaak. All rights reserved.</p>
          <p>Kampala, Uganda | Working across Africa</p>
        </div>
      </div>
    </footer>
  );
}
