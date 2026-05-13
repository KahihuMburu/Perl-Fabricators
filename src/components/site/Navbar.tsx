import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/perl-logo.jpeg";

// ── Social icons as clean inline SVGs ────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.65 4.82 1.79 6.85L2 30l7.36-1.76A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.1 19.43c-.3.84-1.74 1.6-2.4 1.7-.64.1-1.44.14-2.32-.14-.53-.17-1.22-.4-2.08-.78-3.66-1.58-6.05-5.28-6.23-5.53-.17-.24-1.4-1.86-1.4-3.54s.88-2.51 1.2-2.85c.3-.34.66-.42.88-.42l.63.01c.2 0 .47-.08.74.56.28.66.95 2.3 1.03 2.47.09.17.14.36.03.58-.1.22-.16.36-.31.55-.16.2-.33.44-.47.59-.16.16-.33.34-.14.66.19.33.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.96 1.04-1.28.22-.33.44-.27.74-.16.3.11 1.9.9 2.22 1.06.33.16.55.24.63.38.08.13.08.78-.22 1.62z"/>
  </svg>
);

const socials = [
  {
    label: "Facebook",
    href: "https://m.me/laurie.marsha.77",
    Icon: FacebookIcon,
    color: "hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/8 hover:shadow-[0_0_12px_rgba(24,119,242,0.2)]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/perl_fabricators?igsh=Mzk0bXRibW00dmFr",
    Icon: InstagramIcon,
    color: "hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-[#E1306C]/8 hover:shadow-[0_0_12px_rgba(225,48,108,0.2)]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/254719546875?text=Hello%20Perl%20Contractors%21",
    Icon: WhatsAppIcon,
    color: "hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/8 hover:shadow-[0_0_12px_rgba(37,211,102,0.2)]",
  },
];

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
          ? "bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 items-center justify-between">

        {/* ── Logo ── */}
        <a href="#top" className="flex items-center gap-3 flex-shrink-0">
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

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {l.label}
              {/* Slim underline accent on hover */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ── Desktop Right ── */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Social Icons — premium pill group */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/40">
            {socials.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`
                  w-8 h-8 flex items-center justify-center rounded-lg
                  text-muted-foreground border border-transparent
                  transition-all duration-200 hover:scale-105
                  ${color}
                `}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border/60" />

          <a
            href="tel:+254748085743"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Phone className="h-3.5 w-3.5" /> 0748 085 743
          </a>

          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/97 backdrop-blur-xl">
          <div className="container-px mx-auto flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Mobile socials */}
            <div className="flex items-center gap-3 pt-3 border-t border-border/40 mt-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Follow
              </span>
              {socials.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all duration-200 ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <Button variant="hero" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};