import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/ScrollProgress";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/sectors", label: "Sectors" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-nav/95 text-nav-foreground backdrop-blur-xl transition-all duration-300",
        scrolled && "border-primary/25 shadow-lg shadow-nav/30",
      )}
    >
      <ScrollProgress />
      <nav className="shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-nav"
          aria-label="Vermaak Consults home"
        >
          <img
            src="/favicon.png"
            alt="Vermaak logo"
            width={40}
            height={40}
            fetchPriority="high"
            className="size-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-extrabold tracking-[0.16em] uppercase">
              Vermaak
            </span>
            <span className="block truncate text-[0.68rem] tracking-[0.22em] text-nav-muted uppercase">
              Consults
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-nav-muted transition-colors after:absolute after:right-4 after:bottom-0 after:left-4 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform hover:bg-primary/10 hover:text-nav-foreground hover:after:scale-x-100"
              activeProps={{ className: "bg-primary/10 text-nav-foreground after:scale-x-100" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-lg bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
          >
            Let's Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/30 text-nav-foreground transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-primary/20 bg-nav lg:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-4 py-3 text-base font-medium text-nav-muted transition-colors hover:bg-primary/15 hover:text-nav-foreground"
                activeProps={{ className: "bg-primary/10 text-nav-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
