import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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
import gates from "@/assets/project-gates.jpg";
import door from "@/assets/project-door.jpg";
import door1 from "@/assets/project-door1.jpg";
import door2 from "@/assets/project-door2.jpg";
import door3 from "@/assets/project-door3.jpg";
import gate1 from "@/assets/project-gate1.jpg";
import custom from "@/assets/project-custom.jpg";
import gate from "@/assets/project-gate.jpg";
import kikuyu from "@/assets/project-kikuyu.jpg";
import wangige from "@/assets/project-wangige.jpg";


type Cat = "All" | "Windows & Doors" | "Tank Towers" | "Guard Rails" | "Custom Fabrication";

const projects = [
  { img: rails, title: "", cat: "Windows & Doors", location: "Nairobi, Kenya", year: "2024", span: "row-span-2" },
  { img: tower, title: "", cat: "Tank Towers", location: "Machakos, Kenya", year: "2024", span: "row-span-2" },
  { img: Rail, title: "", cat: "Tank Towers", location: "Limuru, Kenya", year: "2024", span: "row-span-2" },
  { img: claddings, title: "", cat: "Guard Rails", location: "Nairobi, Kenya", year: "2024", span: "row-span-2" },
  { img: fabrications, title: "", cat: "Windows & Doors", location: "Kisumu, Kenya", year: "2024", span: "row-span-2" },
  { img: rail, title: "", cat: "Custom Fabrication", location: "Mombassa, Kenya", year: "2024", span: "row-span-2" },
  { img: steel, title: "", cat: "Guard Rails", location: "Nairobi, Kenya", year: "2024", span: "row-span-2" },
  { img: roofing, title: "", cat: "Windows & Doors", location: "Ruiru", year: "2024", span: "" },
  { img: towers, title: "", cat: "Tank Towers", location: "Westlands", year: "2023", span: "" },
  { img: fabrication, title: "", cat: "Windows & Doors", location: "Kiambu", year: "2024", span: "row-span-2" },
  { img: cladding, title: "", cat: "Custom Fabrication", location: "Thika Rd", year: "2023", span: "row-span-2" },
  { img: welding, title: "", cat: "Windows & Doors", location: "Limuru", year: "2023", span: "row-span-2" },
  { img: gates, title: "", cat: "Windows & Doors", location: "Thika", year: "2025", span: "row-span-2" },
  { img: door, title: "", cat: "Windows & Doors", location: "Ongata Rongai", year: "2026", span: "row-span-2" },
  { img: door1, title: "", cat: "Windows & Doors", location: "Nairobi", year: "2025", span: "row-span-2" },
  { img: door2, title: "", cat: "Windows & Doors", location: "Nyeri", year: "2024", span: "row-span-2" },
  { img: door3, title: "", cat: "Windows & Doors", location: "Kasarani", year: "2024", span: "row-span-2" },
  { img: gate1, title: "", cat: "Windows & Doors", location: "Kikuyu", year: "2026", span: "row-span-2" },
  { img: custom, title: "", cat: "Custom Fabrication", location: "Ruiru", year: "2025", span: "row-span-2" },
  { img: gate, title: "", cat: "Windows & Doors", location: "Nakuru", year: "2026", span: "row-span-2" },
  { img: kikuyu, title: "", cat: "Windows & Doors", location: "Kiambu", year: "2025", span: "row-span-2" },
  { img: wangige, title: "", cat: "Windows & Doors", location: "Muthaiga", year: "2024", span: "row-span-2" },
] as const;

const cats: Cat[] = ["All", "Windows & Doors", "Tank Towers", "Guard Rails", "Custom Fabrication"];

const INITIAL_LOAD = 6;
const LOAD_MORE_COUNT = 6;

export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  const handleCategoryChange = (cat: Cat) => {
    setActive(cat);
    setVisibleCount(INITIAL_LOAD);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, filtered.length));
  };

  return (
    <section id="projects" className="relative bg-slate-950 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-sky-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">SELECTED WORK</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white">Projects Built<br />to Outlast</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["All", "Tank Towers", "Guard Rails", "Custom Fabrication", "Windows & Doors"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat as Cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  active === cat 
                    ? "bg-sky-600 text-white shadow-lg shadow-sky-600/30" 
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          <AnimatePresence mode="popLayout">
            {displayed.map((p, i) => (
              <motion.div
                key={p.title + i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`group relative overflow-hidden rounded-3xl bg-slate-900 ${p.span || ""}`}
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sky-400 text-xs font-semibold tracking-widest uppercase mb-2">{p.cat}</div>
                  <h3 className="text-2xl font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.location} • {p.year}</p>
                </div>

                <div className="absolute top-6 right-6 w-11 h-11 bg-sky-600/90 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE BUTTON */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-300 hover:text-white hover:border-sky-600/50 transition-all duration-300"
            >
              <span className="font-medium">LOAD MORE</span>
              <span className="text-sm text-slate-500 group-hover:text-sky-400 transition-colors">
                ({remaining} remaining)
              </span>
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};