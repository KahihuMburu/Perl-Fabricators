import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Tag,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

// ─── ASSET IMPORTS ────────────────────────────────────────────────────────────
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

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Cat = "All" | "Windows & Doors" | "Tank Towers" | "Guard Rails" | "Custom Fabrication" | "Steel Gates" | "Roofing";

interface Project {
  id: number;
  img: string;
  title: string;
  cat: Cat;
  location: string;
  year: string;
  description: string;
  featured?: boolean;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    img: rails,
    title: "Residential Window Grill Set",
    cat: "Windows & Doors",
    location: "Nairobi, Kenya",
    year: "2024",
    description: "Custom-designed mild steel window grilles with powder-coat finish, fabricated and installed across a residential complex in Nairobi.",
    featured: true,
  },
  {
    id: 2,
    img: tower,
    title: "Elevated Water Tank Tower",
    cat: "Tank Towers",
    location: "Machakos, Kenya",
    year: "2024",
    description: "Structural steel tank tower engineered for a 10,000-litre capacity, with full hot-dip galvanised finish for corrosion resistance.",
  },
  {
    id: 3,
    img: Rail,
    title: "Farm Water Storage Tower",
    cat: "Tank Towers",
    location: "Limuru, Kenya",
    year: "2024",
    description: "Agricultural elevated tower with reinforced base frame and access ladder, designed for high-humidity highland conditions.",
  },
  {
    id: 4,
    img: claddings,
    title: "Perimeter Guard Rail System",
    cat: "Guard Rails",
    location: "Nairobi, Kenya",
    year: "2024",
    description: "Continuous staircase and balcony guard rail system fabricated from square hollow sections and flat bar, powder-coated charcoal.",
  },
  {
    id: 5,
    img: fabrications,
    title: "Steel Burglar Proofing — Villa",
    cat: "Steel Gates",
    location: "Kisumu, Kenya",
    year: "2024",
    description: "Full-house burglar-proofing scope: window frames, door guards, and decorative grilles crafted to architect specification.",
  },
  {
    id: 6,
    img: rail,
    title: "Bespoke Steel Fabrication",
    cat: "Custom Fabrication",
    location: "Mombasa, Kenya",
    year: "2024",
    description: "Sliding gate fabricated from box section and decorative flat bar. Motorisation-ready with embedded guide rail track.",
  },
  {
    id: 7,
    img: steel,
    title: "Staircase Balustrade Rails",
    cat: "Guard Rails",
    location: "Nairobi, Kenya",
    year: "2024",
    description: "Interior staircase balustrade in brushed satin finish, matching architectural drawings for a mid-rise office building.",
  },
  {
    id: 8,
    img: roofing,
    title: "Steel Gate",
    cat: "Steel Gates",
    location: "Ruiru",
    year: "2024",
    description: "Box-profile steel roofing with custom fascia and valley flashings, installed on a residential property in Ruiru.",
  },
  {
    id: 9,
    img: towers,
    title: "Steel Canopy Structure",
    cat: "Tank Towers",
    location: "Westlands",
    year: "2023",
    description: "Freestanding canopy over commercial parking area — structural columns, purlins, and transparent polycarbonate infill.",
  },
  {
    id: 10,
    img: fabrication,
    title: "Casement Sliding Gate",
    cat: "Steel Gates",
    location: "Kiambu",
    year: "2024",
    description: "Steel casement window frames, primed and gloss-coated, supplied and installed across a housing development in Kiambu.",
  },
  {
    id: 11,
    img: cladding,
    title: "Facade Cladding — Commercial Block",
    cat: "Custom Fabrication",
    location: "Thika Rd",
    year: "2023",
    description: "Metal wall cladding panels in a ribbed profile, installed on a commercial façade along Thika Road for a modern industrial finish.",
  },
  {
    id: 12,
    img: welding,
    title: "Site Welding — Structural Works",
    cat: "Guard Rails",
    location: "Limuru",
    year: "2023",
    description: "On-site MIG and arc welding for structural steel connections on a multi-storey residential build in Limuru.",
  },
  {
    id: 13,
    img: gates,
    title: "Double-Leaf Door",
    cat: "Windows & Doors",
    location: "Thika",
    year: "2025",
    description: "Heavy-duty double-leaf swing gate with decorative panel inserts. Epoxy primed, gloss finished in bespoke RAL colour.",
  },
  {
    id: 14,
    img: door,
    title: "Security Steel Door",
    cat: "Windows & Doors",
    location: "Ongata Rongai",
    year: "2026",
    description: "Reinforced steel security door with multi-point locking mechanism and custom panel design for a residential property.",
  },
  {
    id: 15,
    img: door1,
    title: "Louvred Ventilation Door",
    cat: "Windows & Doors",
    location: "Nairobi",
    year: "2025",
    description: "Steel louvred door for utility room, providing ventilation while maintaining security — powder-coated in matte black.",
  },
  {
    id: 16,
    img: door2,
    title: "Cottage Frames",
    cat: "Windows & Doors",
    location: "Nyeri",
    year: "2024",
    description: "Fixed and opening steel window frames for a highland cottage, designed with thermal break allowance and galvanised finish.",
  },
  {
    id: 17,
    img: door3,
    title: "Apartment Grill Door",
    cat: "Windows & Doors",
    location: "Kasarani",
    year: "2024",
    description: "Decorative grille security doors for each apartment unit across a 24-unit block — uniform finish, tight fabrication tolerances.",
  },
  {
    id: 18,
    img: gate1,
    title: "Automated Sliding Gate",
    cat: "Steel Gates",
    location: "Kikuyu",
    year: "2026",
    description: "Motorised sliding gate on a ground rail, fabricated from 40×40 SHS and decorative infill. Intercom and sensor-ready.",
  },
  {
    id: 19,
    img: custom,
    title: "Bespoke Steel Fabrication",
    cat: "Custom Fabrication",
    location: "Ruiru",
    year: "2025",
    description: "Open-tread steel staircase with flat-bar treads and structural stringer, fabricated to architectural detail for a private residence.",
  },
  {
    id: 20,
    img: gate,
    title: "Ornamental Estate Gate",
    cat: "Steel Gates",
    location: "Nakuru",
    year: "2026",
    description: "Ornamental mild steel gate with scrollwork detail and embedded name panel, finished in satin black for an estate entrance.",
  },
  {
    id: 21,
    img: kikuyu,
    title: "Security Grills",
    cat: "Windows & Doors",
    location: "Kiambu",
    year: "2025",
    description: "Full perimeter window and door security grilles for a school complex in Kiambu — standard designs for easy replacement.",
  },
  {
    id: 22,
    img: wangige,
    title: "Villa Windows Package",
    cat: "Windows & Doors",
    location: "Muthaiga",
    year: "2024",
    description: "Complete windows and doors package for a luxury villa — custom profiles, concealed hinges, and a matching powder-coat finish.",
  },
];

const CATS: Cat[] = ["All", "Windows & Doors", "Tank Towers", "Guard Rails", "Custom Fabrication","Steel Gates","Roofing"];
const INITIAL_COUNT = 9;
const LOAD_MORE = 6;

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
const Lightbox = ({
  project,
  all,
  onClose,
}: {
  project: Project;
  all: Project[];
  onClose: () => void;
}) => {
  const idx = all.findIndex((p) => p.id === project.id);
  const [current, setCurrent] = useState(idx);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + all.length) % all.length), [all.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % all.length), [all.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  const p = all[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Panel */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0d1117] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
      >
        {/* Image side */}
        <div className="relative w-full lg:w-3/5 aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={p.id}
              src={p.img}
              alt={p.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </AnimatePresence>
          {/* Counter */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-full">
            {current + 1} / {all.length}
          </div>
        </div>

        {/* Info side */}
        <div className="w-full lg:w-2/5 flex flex-col p-8 md:p-10">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 self-start bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6">
            <Tag className="w-3 h-3" />
            {p.cat}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">{p.title}</h2>

          <p className="mt-4 text-slate-400 leading-relaxed text-sm flex-1">{p.description}</p>

          <div className="mt-8 space-y-3 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
              {p.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Calendar className="w-4 h-4 text-sky-500 flex-shrink-0" />
              {p.year}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={prev}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button
              onClick={next}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Side arrows (desktop) */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 12, scale: 0.97 }}
    transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    onClick={onClick}
    className="group cursor-pointer"
  >
    {/* Image container — controlled aspect ratio, no unexpected crop */}
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800">
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Overlay — only appears on hover, lighter touch */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Category pill */}
      <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-sky-300 text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-sky-400/20">
        {project.cat}
      </div>

      {/* Expand icon */}
      <div className="absolute top-3 right-3 w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
    </div>

    {/* Meta */}
    <div className="mt-4 space-y-1 px-0.5">
      <h3 className="text-base font-semibold text-white leading-snug group-hover:text-sky-300 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500">
        {project.location} · {project.year}
      </p>
    </div>
  </motion.article>
);

// ─── FEATURED HERO PROJECT ────────────────────────────────────────────────────
const FeaturedProject = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="group relative overflow-hidden rounded-2xl cursor-pointer mb-16"
    onClick={onClick}
  >
    {/* Wide banner image — 16/7 ratio — shows the image properly */}
    <div className="relative aspect-[16/7] bg-slate-800">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>

    {/* Content overlay */}
    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full mb-4">
          ★ Featured Project · {project.cat}
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
          {project.title}
        </h3>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-md hidden md:block">
          {project.description}
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-sky-400" />{project.location}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-sky-400" />{project.year}</span>
        </div>
      </div>
    </div>

    {/* Open indicator */}
    <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
      View Project <ArrowUpRight className="w-3.5 h-3.5" />
    </div>
  </motion.div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured)!;

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  const gridProjects = filtered.filter((p) => !p.featured || active !== "All");
  const displayed = gridProjects.slice(0, visibleCount);
  const hasMore = visibleCount < gridProjects.length;
  const remaining = gridProjects.length - visibleCount;

  const handleCat = (cat: Cat) => {
    setActive(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxProject]);

  return (
    <section id="projects" className="relative bg-[#080c12] py-24 md:py-32">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-px mx-auto max-w-7xl relative">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-sky-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-sky-400" />
              SELECTED WORK
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Projects Built<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                to Outlast
              </span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
            From residential windows to industrial tank towers — every project
            is a testament to precision and craft.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCat(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                active === cat
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                  : "bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-sky-500 -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Featured Project (All tab only) ── */}
        <AnimatePresence>
          {active === "All" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeaturedProject
                project={featured}
                onClick={() => setLightboxProject(featured)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          <AnimatePresence mode="popLayout">
            {displayed.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onClick={() => setLightboxProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {displayed.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-slate-500"
          >
            No projects in this category yet.
          </motion.div>
        )}

        {/* ── Load More ── */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((v) => Math.min(v + LOAD_MORE, gridProjects.length))}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-all duration-300 text-sm font-medium"
            >
              Load More Projects
              <span className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors">
                ({remaining} remaining)
              </span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox
            project={lightboxProject}
            all={filtered.length > 0 ? filtered : projects}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};