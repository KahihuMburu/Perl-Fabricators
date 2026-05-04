import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/perl-logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-md"
        : "bg-transparent"
    }`}
    >
      <div className="container-px mx-auto flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
        <div className="h-11 w-11 overflow-hidden rounded-md bg-white border border-border/50 shadow-sm p-1">
            <img src={logo} alt="Perl Contractors logo" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-wide text-foreground">PERL</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contractors
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
             
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+254748085743"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition"
          >
            <Phone className="h-4 w-4" /> 0748 085 743
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container-px mx-auto flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
