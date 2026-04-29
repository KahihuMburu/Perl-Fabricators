import { motion } from "framer-motion";
import { Award, Clock, Users, Shield, Briefcase, Sparkles } from "lucide-react";

const items = [
  { icon: Sparkles, title: "High-Quality Finishes", desc: "Every weld, every joint, every coat — finished to a superior standard." },
  { icon: Clock, title: "On-Time Delivery", desc: "Projects scheduled, tracked and delivered without compromise on quality." },
  { icon: Users, title: "Skilled Team", desc: "Certified welders, fabricators and site engineers with deep field experience." },
  { icon: Shield, title: "Strong Materials", desc: "We source quality structural steel and roofing materials from trusted suppliers." },
  { icon: Briefcase, title: "Project Management", desc: "Professional, transparent management from concept to completion." },
  { icon: Award, title: "Proven Track Record", desc: "150+ completed projects across commercial, industrial and residential builds." },
];

export const WhyUs = () => {
  return (
    <section id="why" className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Why Choose Perl
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Solid work. <span className="text-primary">Superior finishes.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            What makes us the partner developers, engineers and architects keep
            coming back to.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group border-l-2 border-border pl-6 transition-colors hover:border-primary"
            >
              <it.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
