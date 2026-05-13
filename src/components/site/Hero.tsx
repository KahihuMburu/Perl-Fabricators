import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-steel.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/*
        ── Image framing fix ──────────────────────────────────────────────────
        Previously: object-cover with no position hint → browser zooms to fill,
        often centering on an irrelevant area.

        Fix:
        • object-cover is kept (we need it to fill the screen) but we set
          object-position to "center 30%" so the camera sits in the upper-mid
          zone of the image — typically where the full steel structure is visible.
        • scale is NOT applied here (no scale-110 / scale-105). The image
          renders at true 1:1, giving maximum structural clarity.
        • The dark overlay is split into two layers:
            1. A mild flat black (opacity lowered from /50 → /35) for base readability
            2. A directional gradient from-primary/50 (was /60) — less colour wash
        Both changes together expose significantly more image detail.
      */}
      <img
        src={hero}
        alt="Steel construction at sunset with welders working on a structural framework"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        width={1280}
        height={1080}
      />

      {/* Layer 1 — reduced flat dark wash */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Layer 2 — directional gradient, softer than before */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-black/25 to-black/65" />

      {/* Layer 3 — bottom vignette only, protects text without killing the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end container-px pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/80 backdrop-blur-md px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Ruiru · Kiambu County · Kenya
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            Precision Steel.
            <br />
            <span className="text-accent">Reliable</span> Construction.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Your partner in steel fabrication and construction. From structural
            frameworks to bespoke finishes — we build with strength, precision,
            and uncompromising quality.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Our Projects <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/254719546875?text=Hello%20Perl%20Contractors%2C%20I%27d%20like%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1 h-5 w-5" /> Get a Quote
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 grid grid-cols-2 gap-px border-t border-border/40 pt-8 md:grid-cols-4 md:gap-0"
        >
          {[
            ["80+", "Projects Completed"],
            ["4+", "Years Experience"],
            ["120+", "Clients Served"],
            ["98%", "On-Time Delivery"],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-2 md:border-l md:border-border/40 md:first:border-l-0">
              <div className="font-display text-3xl font-bold text-white md:text-4xl">{n}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};