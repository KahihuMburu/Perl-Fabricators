import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote} from "lucide-react";

const items = [
  { quote: "Perl Contractors delivered high-quality roofing and steel works on time and professionally. A reliable partner for any construction project.", name: "James M.", role: "Project Developer" },
  { quote: "Very reliable team with excellent workmanship. Their attention to detail on our steel structures was outstanding. Highly recommended.", name: "Grace W.", role: "Architect" },
  { quote: "They handled our industrial project efficiently from start to finish. Great communication and solid results. We'll definitely work with them again.", name: "Daniel K.", role: "Industrial Client" },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative bg-slate-900 py-24 md:py-32">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="uppercase text-ocean-400 text-xs font-semibold tracking-[0.2em]">CLIENT VOICES</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">Trusted Across Kenya</h2>
        </div>

        <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-3xl p-10 md:p-16">
          <Quote className="absolute -top-6 left-8 h-16 w-16 text-ocean-500/20" />
          
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-body text-xl md:text-2xl leading-relaxed text-slate-300 italic">“{items[i].quote}”</p>
              <footer className="mt-8">
                <div className="font-display font-semibold text-xl text-white">{items[i].name}</div>
                <div className="text-sm text-slate-400">{items[i].role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Dots for navigation */}
          <div className="flex justify-center gap-2 mt-10">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === i ? "w-8 bg-ocean-500" : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};