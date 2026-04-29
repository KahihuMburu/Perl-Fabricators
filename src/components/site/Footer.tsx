import { Facebook, Instagram,} from "lucide-react";
import logo from "@/assets/perl-logo.jpeg";

export const Footer = () => {

  const socials = [
    { icon: Facebook, link: "https://m.me/laurie.marsha.77" },
    { icon: Instagram, link: "https://www.instagram.com/perl_fabricators?igsh=Mzk0bXRibW00dmFr" },

    
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">

          {/* LEFT SECTION */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-sm bg-foreground p-1">
                <img src={logo} alt="Perl Contractors" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-foreground">PERL CONTRACTORS</div>
                <div className="text-xs text-muted-foreground">Solid work, superior finishes.</div>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Steel fabrication and construction firm based in Ruiru, Kenya.
              Trusted partner for developers, engineers and industrial clients.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Projects", "#projects"],
                ["Why Us", "#why"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Ruiru, Kiambu County</li>
              <li><a href="tel:+254748085743">0748 085 743</a></li>
              <li><a href="tel:+254719546875">0719 546 875</a></li>
              <li><a href="mailto:perlcontractors@gmail.com">perlcontractors@gmail.com</a></li>
              <li>Mon – Sun · 8 AM – 6 PM</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Perl Contractors. All rights reserved.</div>
          <div>Your Partner in Steel & Construction.</div>
        </div>

      </div>
    </footer>
  );
};