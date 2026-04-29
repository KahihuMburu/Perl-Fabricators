import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    quote:
      "Perl Contractors delivered high-quality roofing and steel works on time and professionally.",
    name: "James M.",
    role: "Project Developer",
  },
  {
    quote:
      "Very reliable team with excellent workmanship. Highly recommended for structural projects.",
    name: "Grace W.",
    role: "Architect",
  },
  {
    quote:
      "They handled our project efficiently from start to finish. Great communication and results.",
    name: "Daniel K.",
    role: "Industrial Client",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Client Voices
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Trusted by clients across Kenya.
          </h2>
        </div>

        <div className="relative">
          <Quote className="absolute -top-6 left-0 h-20 w-20 text-primary/15" />
          <div className="relative min-h-[260px] md:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative px-2 text-center"
              >
                <p className="font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl lg:text-4xl text-balance">
                  “{items[i].quote}”
                </p>
                <footer className="mt-8">
                  <div className="font-semibold text-foreground">{items[i].name}</div>
                  <div className="text-sm text-muted-foreground">{items[i].role}</div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
