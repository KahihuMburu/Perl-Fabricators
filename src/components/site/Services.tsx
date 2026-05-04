import { motion } from "framer-motion";
import {
  Building2,
  Home,
  HardHat,
  Wrench,
  Layers,
  Hammer,
  Flame,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Structural Steel Works",
    desc: "Heavy-duty frameworks, columns, beams and trusses engineered for industrial and commercial builds.",
  },
  {
    icon: Home,
    title: "Roofing Works",
    desc: "Durable steel roofing systems — IT4, IT5, box-profile, tile-effect — installed to last.",
  },
  {
    icon: HardHat,
    title: "General Contracting",
    desc: "End-to-end construction project management with skilled crews and trusted partners.",
  },
  {
    icon: Wrench,
    title: "Secondary Steelworks",
    desc: "Staircases, balustrades, gates, grilles and railings — engineered and finished to spec.",
  },
  {
    icon: Layers,
    title: "Cladding & Canopies",
    desc: "Modern facades, weatherproof claddings and architectural canopies for commercial spaces.",
  },
  {
    icon: Hammer,
    title: "Custom Steel Fabrication",
    desc: "Bespoke fabrication for architects, engineers and developers — to drawing or to brief.",
  },
  {
    icon: Flame,
    title: "Welding & Site Installation",
    desc: "Certified welders and site-installation teams for safe, efficient on-site execution.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative bg-muted py-24 md:py-32">
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What We Do
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl max-w-2xl">
              Full-service steel
              <br />
              <span className="text-accent">& construction.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From the first bolt to the final coat, we deliver complete steel
            and construction solutions tailored to your project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative bg-muted p-8 transition-colors hover:bg-secondary md:p-10"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center bg-background text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-muted-foreground-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
          <div className="hidden bg-primary p-10 text-muted-foreground lg:flex lg:flex-col lg:justify-between">
            <div className="font-display text-2xl font-bold leading-tight">
              Need something custom?
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
            >
              Talk to our team <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
