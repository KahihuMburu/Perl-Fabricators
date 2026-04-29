import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about-site.jpg";

const bullets = [
  "Broad expertise in steel fabrication & construction",
  "Quality workmanship with superior finishes",
  "Reliable, transparent project management",
  "Skilled team committed to safety standards",
];

export const About = () => {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={about}
                alt="Aerial view of a Perl Contractors steel construction site"
                loading="lazy"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden bg-primary p-8 text-primary-foreground md:block">
              <div className="font-display text-5xl font-bold leading-none">10+</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em]">
                Years of <br /> Excellence
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              About Perl Contractors
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Building strength
              <br />
              <span className="text-muted-foreground">into every project.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Based in Ruiru, Kiambu County, Perl Contractors is a steel
              fabrication and construction firm trusted by developers,
              engineers, and industrial clients across Kenya. Our work is
              defined by structural precision, durable finishes, and dependable
              delivery — project after project.
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["150+", "Projects"],
                ["10+", "Years"],
                ["120+", "Clients"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {n}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
