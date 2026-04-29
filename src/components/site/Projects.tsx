import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import roofing from "@/assets/project-roofing.jpg";
import steel from "@/assets/project-roof.jpg";
import rails from "@/assets/project-structural.jpg";
import rail from "@/assets/project-rail.jpg";
import tower from "@/assets/hero-steels.jpg";
import Rail from "@/assets/project-weldings.jpg";
import claddings from "@/assets/project-claddings.jpg";
import fabrications from "@/assets/project-fabrications.jpg";
import towers from "@/assets/project-canopy.jpg";
import fabrication from "@/assets/project-fabrication.jpg";
import cladding from "@/assets/project-cladding.jpg";
import welding from "@/assets/project-welding.jpg";

type Cat = "All" | "Roofing" | "Tank Towers" | "Guard Rails" | "Fabrication";

const projects = [
  { img: rails, title: "Multi-Storey Steel Rails", cat: "Guard Rails", location: "Nairobi, Kenya", year: "2024", span: "row-span-2" },
  { img: tower, title: "Storage Tank Tower", cat: "Tank Towers", location: "Machakos, Kenya", year: "2024", span: "row-span-2" },
  { img: Rail, title: "Water Storage Tank Towers", cat: "Tank Towers", location: "Limuru, Kenya", year: "2024", span: "row-span-2" },
  { img: claddings, title: "Rails", cat: "Guard Rails", location: "Nairobi, Kenya", year: "2024", span: "row-span-2" },
  { img: fabrications, title: "Storey Steel Rails", cat: "Guard Rails", location: "Kisumu, Kenya", year: "2024", span: "row-span-2" },
  { img: rail, title: "Steel Rails", cat: "Guard Rails", location: "Mombassa, Kenya", year: "2024", span: "row-span-2" },
  { img: steel, title: "Custom Steel Rails", cat: "Guard Rails", location: "Nairobi, Kenya", year: "2024", span: "row-span-2" },
  { img: roofing, title: "Wood Framed Rails", cat: "Guard Rails", location: "Ruiru", year: "2024", span: "" },
  { img: towers, title: "Tank Tower", cat: "Tank Towers", location: "Westlands", year: "2023", span: "" },
  { img: fabrication, title: "Custom Steel Staircase", cat: "Guard Rails", location: "Kiambu", year: "2024", span: "row-span-2" },
  { img: cladding, title: "Custom made Steel Staircase", cat: "Guard Rails", location: "Thika Rd", year: "2023", span: "" },
  { img: welding, title: "On-Site Welding & Install", cat: "Fabrication", location: "Country-Wide", year: "", span: "" },
] as const;

const cats: Cat[] = ["All", "Roofing", "Tank Towers", "Guard Rails", "Fabrication"];

export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="relative bg-background py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Selected Work
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl max-w-2xl">
              Projects built
              <br />
              <span className="text-muted-foreground">to outlast.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href="#contact"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden bg-card ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {p.cat}
                  </div>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                      {p.title}
                    </h3>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {p.location} · {p.year}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
