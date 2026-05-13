import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import welding from "@/assets/project-welding.jpg";

export const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/*
        ── Image framing fix ──────────────────────────────────────────────────
        Previously: object-cover with default center — aggressively zoomed
        into the middle of the welder image, losing context.

        Fix:
        • object-position "center 40%" — frames the welder from a slightly
          higher vantage so the full figure and environment are visible.
        • No transform scale on the image element itself.
        • Overlay changed from two near-identical dark layers (combined ~85–90%
          opacity) to a single directional gradient:
            from-slate-950/80 (left, where text lives) → to-slate-950/50 (right)
          This preserves much more image on the right half while keeping
          the left side fully readable.
        • A subtle bottom vignette is kept for the section edge.
      */}
      <img
        src={welding}
        alt="Welder at work on a structural steel project"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      />

      {/* Single directional overlay — text side is darker, image side breathes */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/40" />

      {/* Subtle top & bottom fade for section blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/30" />

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <div className="uppercase text-sky-400 text-sm font-semibold tracking-widest mb-4">
          LET'S BUILD TOGETHER
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
          Have a project in mind?
        </h2>
        <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
          Tell us about your build. We respond with timelines, scope, and
          transparent quote — usually within 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" className="bg-sky-600 hover:bg-sky-500" asChild>
            <a href="tel:+254748085743">
              <Phone className="mr-2" /> Call Now
            </a>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-slate-400/70 text-white hover:bg-white/10 hover:border-white"
            asChild
          >
            <a
              href="https://wa.me/254719546875?text=Hello%20Perl%20Contractors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};