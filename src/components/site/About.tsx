import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about-site.jpg";

const bullets = [
  "Broad expertise in steel fabrication & construction",
  "Quality workmanship with superior finishes",
  "Reliable and transparent project management",
  "Skilled team committed to highest safety standards",
];

export const About = () => {
  return (
    <section id="about" className="relative bg-slate-900 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={about} alt="Perl Contractors project" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-6 bg-sky-600 text-white p-8 rounded-3xl shadow-2xl">
              <div className="font-display text-6xl font-bold">4+</div>
              <div className="text-sm uppercase tracking-widest mt-1">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="uppercase text-sky-400 text-sm font-semibold tracking-[0.2em] mb-4">ABOUT PERL CONTRACTORS</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              Building strength<br />into every project.
            </h2>
            <p className="mt-8 text-lg text-slate-400 leading-relaxed">
              Based in Ruiru, Kiambu County, we are a trusted steel fabrication and construction firm delivering structural precision and superior finishes across Kenya.
            </p>

            <ul className="mt-10 space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-4 text-slate-300">
                  <CheckCircle2 className="mt-1 text-sky-400 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
              {[
                ["80+", "Projects"],
                ["120+", "Clients"],
                ["98%", "On Time"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-4xl font-display font-bold text-sky-400">{num}</div>
                  <div className="text-sm text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};