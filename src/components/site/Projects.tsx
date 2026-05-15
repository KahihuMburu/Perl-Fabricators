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
import mlango from "@/assets/project-mlango.jpg";
import mouse from "@/assets/project-mouse.jpg";
import screw from "@/assets/project-screw.jpg";
import cup from "@/assets/project-cup.jpg";
import steeldoor from "@/assets/project-steeldoor.jpg";
import guardrail1 from "@/assets/project-guardrail1.jpg";
import staircase1 from "@/assets/project-staircase1.jpg";
import steelgate1 from "@/assets/project-steelgate1.jpg";
import cuppy from "@/assets/project-cuppy.jpg";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Cat =
  | "All"
  | "Roofing"
  | "Steel Staircase & Guard Rails"
  | "Water Tank Towers"
  | "Steel Gates"
  | "Custom Fabrication";

interface Project {
  id: number;
  img: string;
  title: string;
  cat: Cat;
  location: string;
  year: string;
  description: string;
  featured?: boolean;
  // imgPosition controls object-position; use "center center" for full-frame
  // images and a specific offset for photos where the subject is off-centre.
  imgPosition?: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
// CHANGED: All descriptions rewritten — 1 concise, client-friendly sentence each.
// CHANGED: imgPosition values added/adjusted for IDs 21–31 to reduce zoom.
const projects: Project[] = [
  {
    id: 1,
    img: rails,
    title: "Residential Window Grill Set",
    cat: "Custom Fabrication",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Mild steel window grilles with powder-coat finish, installed across a residential complex in Nairobi.",
    featured: true,
    imgPosition: "center center",
  },
  {
    id: 2,
    img: tower,
    title: "Elevated Water Tank Tower",
    cat: "Water Tank Towers",
    location: "Machakos, Kenya",
    year: "2024",
    description:
      "Heavy-duty steel tank tower built for a 10,000-litre capacity with a full galvanised finish for outdoor durability.",
    imgPosition: "center top",
  },
  {
    id: 3,
    img: Rail,
    title: "Farm Water Storage Tower",
    cat: "Water Tank Towers",
    location: "Limuru, Kenya",
    year: "2024",
    description:
      "Agricultural tank tower with a reinforced base and access ladder, built for highland conditions.",
    imgPosition: "center top",
  },
  {
    id: 4,
    img: claddings,
    title: "Perimeter Guard Rail System",
    cat: "Steel Staircase & Guard Rails",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Staircase and balcony guard rail system in powder-coated square hollow section, installed across a residential building.",
    imgPosition: "center center",
  },
  {
    id: 5,
    img: fabrications,
    title: "Swing Gate",
    cat: "Steel Gates",
    location: "Kisumu, Kenya",
    year: "2024",
    description:
      "Decorative swing gate fabricated to client specification and finished with a smooth powder-coat.",
    imgPosition: "center center",
  },
  {
    id: 6,
    img: rail,
    title: "Excellent Steel Fabrication",
    cat: "Custom Fabrication",
    location: "Mombasa, Kenya",
    year: "2024",
    description:
      "Bespoke steel fabrication piece designed and completed to exact client drawings.",
    imgPosition: "center center",
  },
  {
    id: 7,
    img: steel,
    title: "Staircase Balustrade Rails",
    cat: "Steel Staircase & Guard Rails",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Interior staircase balustrade with a satin finish, fabricated to match architectural drawings for a mid-rise office.",
    imgPosition: "center center",
  },
  {
    id: 8,
    img: roofing,
    title: "Commercial Foldable Doors",
    cat: "Custom Fabrication",
    location: "Ruiru",
    year: "2024",
    description:
      "Steel bi-fold door system for a commercial space, powder-coated and track-mounted for smooth daily operation.",
    imgPosition: "center center",
  },
  {
    id: 9,
    img: towers,
    title: "Steel Canopy Structure",
    cat: "Water Tank Towers",
    location: "Westlands",
    year: "2023",
    description:
      "Freestanding commercial canopy with structural steel columns, purlins, and polycarbonate infill.",
    imgPosition: "center center",
  },
  {
    id: 10,
    img: fabrication,
    title: "Casement Sliding Gate",
    cat: "Steel Gates",
    location: "Kiambu",
    year: "2024",
    description:
      "Smooth-running sliding gate on a ground rail, primed and gloss-coated for a residential driveway.",
    imgPosition: "center center",
  },
  {
    id: 11,
    img: cladding,
    title: "Facade Cladding — Commercial Block",
    cat: "Custom Fabrication",
    location: "Thika Rd",
    year: "2023",
    description:
      "Ribbed metal cladding panels installed on a commercial façade along Thika Road for a clean industrial look.",
    imgPosition: "center center",
  },
  {
    id: 12,
    img: welding,
    title: "Site Welding — Structural Works",
    cat: "Steel Staircase & Guard Rails",
    location: "Ruiru",
    year: "2026",
    description:
      "On-site MIG and arc welding for structural steel connections on a multi-storey residential build.",
    imgPosition: "center center",
  },
  {
    id: 13,
    img: gates,
    title: "Double-Leaf Door",
    cat: "Custom Fabrication",
    location: "Thika",
    year: "2025",
    description:
      "Heavy-duty double-leaf steel door with decorative panel inserts, epoxy primed and gloss finished.",
    imgPosition: "center center",
  },
  {
    id: 14,
    img: door,
    title: "Security Steel Door",
    cat: "Custom Fabrication",
    location: "Ongata Rongai",
    year: "2026",
    description:
      "Reinforced security door with a custom panel design, installed for a private residential property.",
    imgPosition: "center center",
  },
  {
    id: 15,
    img: door1,
    title: "Louvred Ventilation Door",
    cat: "Custom Fabrication",
    location: "Nairobi",
    year: "2025",
    description:
      "Steel louvred door for a utility room — ventilation-friendly and powder-coated in matte black.",
    imgPosition: "center center",
  },
  {
    id: 16,
    img: door2,
    title: "Cottage Window Frames",
    cat: "Custom Fabrication",
    location: "Nyeri",
    year: "2024",
    description:
      "Steel window frames with a galvanised finish, designed and installed for a highland cottage.",
    imgPosition: "center center",
  },
  {
    id: 17,
    img: door3,
    title: "Apartment Grill Door",
    cat: "Custom Fabrication",
    location: "Kasarani",
    year: "2024",
    description:
      "Decorative security grill doors installed uniformly across a 24-unit apartment block.",
    imgPosition: "center center",
  },
  {
    id: 18,
    img: gate1,
    title: "Automated Sliding Gate",
    cat: "Steel Gates",
    location: "Kikuyu",
    year: "2026",
    description:
      "Motorised sliding gate on a ground rail — fully automation-ready and intercom-compatible.",
    imgPosition: "center center",
  },
  {
    id: 19,
    img: custom,
    title: "Bespoke Steel Fabrication",
    cat: "Custom Fabrication",
    location: "Ruiru",
    year: "2025",
    description:
      "Open-tread steel staircase with flat-bar treads, built to architectural detail for a private residence.",
    imgPosition: "center center",
  },
  {
    id: 20,
    img: gate,
    title: "Ornamental Estate Gate",
    cat: "Steel Gates",
    location: "Nakuru",
    year: "2026",
    description:
      "Ornamental mild steel estate gate with scrollwork detail and a satin black finish.",
    imgPosition: "center center",
  },
  // ── IDs 21–31: imgPosition tuned to pull back and show full structure ────────
  {
    id: 21,
    img: kikuyu,
    title: "Security Grills",
    cat: "Custom Fabrication",
    location: "Kiambu",
    year: "2025",
    description:
      "Perimeter security grilles for a school complex in Kiambu, fabricated for easy maintenance and replacement.",
    // CHANGED: "50% 60%" anchors to the lower-mid frame, preventing
    // the top of the grill from being clipped on portrait images.
    imgPosition: "50% 60%",
  },
  {
    id: 22,
    img: wangige,
    title: "Villa Windows Package",
    cat: "Custom Fabrication",
    location: "Muthaiga",
    year: "2024",
    description:
      "Full windows package for a luxury villa — matching powder-coat finish and concealed hardware throughout.",
    // CHANGED: wide shots benefit from a centred anchor so the full
    // window width is visible rather than a zoomed-in corner.
    imgPosition: "center center",
  },
  {
    id: 23,
    img: mlango,
    title: "Villa Door Package",
    cat: "Custom Fabrication",
    location: "Muthaiga",
    year: "2024",
    description:
      "Custom steel door package for a villa — consistent finish across all entry and interior doors.",
    // CHANGED: "50% 40%" keeps the full door height in frame.
    imgPosition: "50% 40%",
  },
  {
    id: 24,
    img: mouse,
    title: "Wangige Steel Gate",
    cat: "Steel Gates",
    location: "Wangige",
    year: "2024",
    description:
      "Custom steel gate designed and installed for a residential property in Wangige.",
    // CHANGED: "50% 50%" — true centre anchor ensures the full gate
    // frame is visible without cropping top or bottom.
    imgPosition: "50% 50%",
  },
  {
    id: 25,
    img: screw,
    title: "Limuru Gate",
    cat: "Steel Gates",
    location: "Limuru",
    year: "2024",
    description:
      "Powder-coated steel gate fabricated and installed for a residential property in Limuru.",
    // CHANGED: "50% 55%" slightly lower anchor, keeps gate base visible.
    imgPosition: "50% 55%",
  },
  {
    id: 26,
    img: cup,
    title: "Kiambu Gate",
    cat: "Steel Gates",
    location: "Kiambu",
    year: "2024",
    description:
      "Decorative steel gate with a clean satin finish, fabricated for a home in Kiambu.",
    imgPosition: "50% 50%",
  },
  {
    id: 27,
    img: steeldoor,
    title: "Security Door",
    cat: "Custom Fabrication",
    location: "Limuru",
    year: "2024",
    description:
      "Reinforced steel security door with a clean panel design and durable powder-coat finish.",
    // CHANGED: "50% 35%" centres the door vertically to avoid the
    // bottom rail being cropped on taller-than-average door photos.
    imgPosition: "50% 35%",
  },
  {
    id: 28,
    img: guardrail1,
    title: "Residential Rail",
    cat: "Steel Staircase & Guard Rails",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Clean residential guard rail system fabricated and installed with a smooth powder-coat finish.",
    featured: true,
    // CHANGED: "center 40%" pulls back slightly to show top of rail post.
    imgPosition: "center 40%",
  },
  {
    id: 29,
    img: staircase1,
    title: "Steel Staircases",
    cat: "Steel Staircase & Guard Rails",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Structural steel staircase with solid treads and a full-height balustrade, finished in matte black.",
    featured: true,
    // CHANGED: "50% 30%" anchors near the upper portion so the full
    // staircase run (not just the base) is framed in the card.
    imgPosition: "50% 30%",
  },
  {
    id: 30,
    img: steelgate1,
    title: "Heavy Duty Steel Gate",
    cat: "Steel Gates",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Heavy-duty steel gate engineered for a high-traffic entrance, with anti-corrosion priming throughout.",
    featured: true,
    // CHANGED: true centre so the full gate width is visible.
    imgPosition: "50% 50%",
  },
  {
    id: 31,
    img: cuppy,
    title: "Custom Steel Fabrication",
    cat: "Custom Fabrication",
    location: "Nairobi, Kenya",
    year: "2024",
    description:
      "Bespoke steel piece fabricated to client brief with a premium powder-coat finish.",
    featured: true,
    // CHANGED: "50% 45%" provides a natural centre-weighted frame.
    imgPosition: "50% 45%",
  },
];

const CATS: Cat[] = [
  "All",
  "Roofing",
  "Steel Staircase & Guard Rails",
  "Water Tank Towers",
  "Steel Gates",
  "Custom Fabrication",
];
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

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + all.length) % all.length),
    [all.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % all.length),
    [all.length]
  );

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
      // CHANGED: slightly longer fade — feels less abrupt on high-res screens
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/96 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Panel */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 8 }}
        // CHANGED: spring-like easing makes the panel feel more physical
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0b0f16] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row border border-white/[0.06]"
      >
        {/* ── Image side ── */}
        <div className="relative w-full lg:w-3/5 aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-[#0d1117]">
          <AnimatePresence mode="wait">
            <motion.img
              key={p.id}
              src={p.img}
              alt={p.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              // CHANGED: gentle scale-in on image swap feels cinematic
              transition={{ duration: 0.35, ease: "easeOut" }}
              // CHANGED: object-contain so the FULL structure is always
              // visible in the lightbox — no cropping, no matter the image ratio.
              className="absolute inset-0 w-full h-full object-contain"
              style={{ objectPosition: "center center" }}
              loading="lazy"
            />
          </AnimatePresence>

          {/* Counter badge */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white/80 text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 tabular-nums">
            {current + 1} / {all.length}
          </div>
        </div>

        {/* ── Info side ── */}
        {/* CHANGED: bg slightly lighter than panel bg for subtle depth */}
        <div className="w-full lg:w-2/5 flex flex-col p-8 md:p-10 bg-[#0e1420]">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 self-start bg-sky-500/10 border border-sky-500/25 text-sky-400 text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full mb-6">
            <Tag className="w-3 h-3 flex-shrink-0" />
            {p.cat}
          </div>

          <h2 className="font-display text-2xl md:text-[1.75rem] font-bold text-white leading-tight tracking-tight">
            {p.title}
          </h2>

          {/* CHANGED: slightly larger body text for readability */}
          <p className="mt-4 text-slate-400 leading-relaxed text-[0.9rem] flex-1">
            {p.description}
          </p>

          <div className="mt-8 space-y-3 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
              {p.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Calendar className="w-4 h-4 text-sky-500 flex-shrink-0" />
              {p.year}
            </div>
          </div>

          {/* Nav buttons */}
          {/* CHANGED: buttons use a more refined border treatment */}
          <div className="mt-8 flex items-center gap-2.5">
            <button
              onClick={prev}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600 text-slate-400 hover:text-white transition-all duration-200 text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button
              onClick={next}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600 text-slate-400 hover:text-white transition-all duration-200 text-sm font-medium"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/8 hover:bg-white/16 border border-white/12 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 z-10"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* Desktop side arrows */}
      {/* CHANGED: slightly larger hit area, cleaner border */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/6 hover:bg-white/14 text-white/70 hover:text-white transition-all duration-200 border border-white/10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/6 hover:bg-white/14 text-white/70 hover:text-white transition-all duration-200 border border-white/10"
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
    {/*
     * CHANGED: ring tightened to ring-white/[0.06] for a barely-there
     * frame that reads as depth without competing with the image.
     * Rounded corners increased to rounded-2xl for a more premium feel.
     */}
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/[0.06]">
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        // CHANGED: hover zoom reduced from 1.03 → 1.025 — keeps
        // structures fully visible on hover, feels intentional not aggressive.
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        style={{ objectPosition: project.imgPosition ?? "center 25%" }}
      />

      {/*
       * CHANGED: overlay is invisible at rest — image stays bright and
       * fully readable. On hover a light gradient lifts from the bottom
       * to frame the title strip cleanly.
       */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

      {/* Category pill — always visible */}
      {/* CHANGED: slightly higher contrast backdrop for legibility */}
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-sky-300 text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-sky-400/20">
        {project.cat}
      </div>

      {/* Expand icon — appears on hover */}
      {/* CHANGED: shadow tuned so the icon "glows" subtly against any bg */}
      <div className="absolute top-3 right-3 w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-sky-500/50">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      {/* Bottom title strip — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 ease-out">
        <p className="text-white text-[13px] font-semibold leading-snug truncate drop-shadow-sm">
          {project.title}
        </p>
      </div>
    </div>

    {/* Meta below card */}
    <div className="mt-3.5 space-y-0.5 px-0.5">
      {/* CHANGED: tracking-tight on title for a crisper typographic feel */}
      <h3 className="text-[15px] font-semibold text-white leading-snug tracking-tight group-hover:text-sky-300 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-[13px] text-slate-500 tabular-nums">
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
    // CHANGED: ring added to match card treatment; mb-14 slightly tighter
    className="group relative overflow-hidden rounded-2xl cursor-pointer mb-14 ring-1 ring-white/[0.06]"
    onClick={onClick}
  >
    <div className="relative aspect-[16/7] bg-slate-900">
      <img
        src={project.img}
        alt={project.title}
        // CHANGED: hover zoom dialled back to 1.018 — on a 16/7 banner
        // even 1.02 noticeably reframes; 1.018 adds life without cropping.
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.018]"
        style={{ objectPosition: project.imgPosition ?? "center 30%" }}
        loading="eager"
      />

      {/*
       * CHANGED: three-layer overlay system for precise control —
       *   1. Left-to-right gradient: darkens text zone, lets image breathe right
       *   2. Bottom-up gradient: grounds the content block
       *   3. Subtle top vignette: prevents harsh contrast at image top edge
       */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/25 text-sky-300 text-[10px] font-bold uppercase tracking-[0.28em] px-3 py-1.5 rounded-full mb-5">
          ★ Featured Project · {project.cat}
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-3">
          {project.title}
        </h3>
        {/* CHANGED: description text slightly larger and higher opacity */}
        <p className="text-slate-200/85 text-base md:text-lg leading-relaxed mb-6 max-w-md hidden md:block">
          {project.description}
        </p>
        <div className="flex items-center gap-5 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
            {project.year}
          </span>
        </div>
      </div>
    </div>

    {/* Hover CTA */}
    {/* CHANGED: padding increased, font slightly bolder for presence */}
    <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-350 translate-x-3 group-hover:translate-x-0">
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

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.cat === active);
  const gridProjects = filtered.filter((p) => !p.featured || active !== "All");
  const displayed = gridProjects.slice(0, visibleCount);
  const hasMore = visibleCount < gridProjects.length;
  const remaining = gridProjects.length - visibleCount;

  const handleCat = (cat: Cat) => {
    setActive(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  useEffect(() => {
    if (lightboxProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxProject]);

  return (
    <section id="projects" className="relative bg-[#080c12] py-24 md:py-32">
      {/* Blueprint grid texture */}
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
            <div className="text-sky-400 uppercase tracking-[0.25em] text-xs font-bold mb-4 flex items-center gap-2.5">
              {/* CHANGED: slightly longer rule for more weight */}
              <span className="inline-block w-7 h-px bg-sky-400/80" />
              SELECTED WORK
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Projects Built
              <br />
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
        {/*
         * CHANGED: gap increased slightly; pills get a sharper tracking value
         * and a more deliberate active state with a tighter shadow footprint.
         */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCat(cat)}
              className={`relative px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                active === cat
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "bg-slate-800/70 text-slate-400 hover:bg-slate-700/80 hover:text-white border border-slate-700/50 hover:border-slate-600/60"
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
        {/* CHANGED: gap-y increased to 11 for more breathing room between rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-11">
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
            className="text-center py-24 text-slate-500 text-sm"
          >
            No projects in this category yet.
          </motion.div>
        )}

        {/* ── Load More ── */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() =>
                setVisibleCount((v) => Math.min(v + LOAD_MORE, gridProjects.length))
              }
              // CHANGED: border sits at slate-700/50 for a cleaner rest state
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/50 text-slate-400 hover:text-white hover:border-sky-500/35 hover:bg-slate-800/90 transition-all duration-300 text-sm font-medium"
            >
              Load More Projects
              <span className="text-xs text-slate-600 group-hover:text-sky-400 transition-colors tabular-nums">
                ({remaining} remaining)
              </span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
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