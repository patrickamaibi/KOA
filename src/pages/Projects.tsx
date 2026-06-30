import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, MapPin, Calendar, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { hardcodedProjects, type Project } from "../data/projects";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  year: string;
  project_id: number;
  location?: string;
  remark: string;
}

const categories = ["All", "Structural", "Highway", "Industrial", "Others"];

// ── Image Gallery (used inside modal) ────────────────────────────────────────
function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setActiveIndex((i) => (i + 1) % images.length), [images.length]);

  // Keyboard navigation when gallery is visible
  useEffect(() => {
    if (images.length <= 1) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, images.length]);

  const single = images.length === 1;

  return (
    <div className="flex flex-col">
      {/* ── Main viewer ── */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-koa-dark">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${title} — image ${activeIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(13,31,23,0.88) 0%, rgba(13,31,23,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Arrow buttons — only when multiple images */}
        {!single && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: "rgba(13,31,23,0.65)", backdropFilter: "blur(6px)", border: "1px solid rgba(168,197,176,0.25)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,122,84,0.85)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(13,31,23,0.65)")}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: "rgba(13,31,23,0.65)", backdropFilter: "blur(6px)", border: "1px solid rgba(168,197,176,0.25)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,122,84,0.85)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(13,31,23,0.65)")}
              aria-label="Next image"
            >
              <ChevronRight size={18} className="text-white" />
            </button>

            {/* Counter pill */}
            <div
              className="absolute top-3 right-3 z-10 font-display text-[10px] uppercase tracking-widest px-2.5 py-1"
              style={{ background: "rgba(13,31,23,0.65)", backdropFilter: "blur(6px)", color: "#A8C5B0", border: "1px solid rgba(168,197,176,0.2)", borderRadius: "2px" }}
            >
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </>
        )}
      </div>

      {/* ── Thumbnail strip — only when multiple images ── */}
      {!single && (
        <div
          className="flex gap-2 p-3 overflow-x-auto"
          style={{ background: "#0D1F17" }}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
              className="shrink-0 relative overflow-hidden transition-all duration-200"
              style={{
                width: "64px",
                height: "48px",
                borderRadius: "2px",
                border: i === activeIndex
                  ? "2px solid #A8C5B0"
                  : "2px solid rgba(168,197,176,0.15)",
                opacity: i === activeIndex ? 1 : 0.55,
              }}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Projects page ────────────────────────────────────────────────────────
export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const location = useLocation();

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setTestimonials(data);
      });
  }, []);

  useEffect(() => {
    if (location.state?.openProjectId) {
      const project = hardcodedProjects.find(
        (p) => p.id === location.state.openProjectId
      );
      if (project) setSelectedProject(project);
    }
  }, [location.state]);

  const filteredProjects =
    activeCategory === "All"
      ? hardcodedProjects
      : hardcodedProjects.filter((p) => p.category === activeCategory);

  // Prefer a client-confirmed location from a testimonial over the hardcoded
  // project location — lets clients correct it when submitting feedback.
  const resolveLocation = (projectId: number, fallback?: string) => {
    const withLocation = testimonials.find(
      (t) => t.project_id === projectId && t.location?.trim()
    );
    return withLocation?.location?.trim() || fallback;
  };

  const projectTestimonials = selectedProject
    ? testimonials.filter((t) => t.project_id === selectedProject.id)
    : [];

  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Projects Portfolio - KOA Engineering | Structural, Civil & Highway Projects in Nigeria"
        description="Browse KOA Engineering's portfolio of completed structural, highway, industrial, and civil engineering projects across Nigeria. Over 50 projects delivered with precision."
        url="https://koaengineering.com/projects"
        image="https://koaengineering.com/images/webp/KOA23.webp"
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden mb-12">
        <img
          src="/images/webp/KOA23.webp"
          alt="Engineering Projects"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ filter: "blur(3px)", transform: "scale(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,163,74,0.75) 0%, rgba(22,163,74,0.45) 40%, rgba(15,23,42,0.80) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-0 bg-koa-dark/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
            style={{
              textShadow:
                "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)",
            }}
          >
            Portfolio
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Explore our extensive portfolio of engineered solutions across various sectors.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <Section variant="white" className="pt-0">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-[4px] font-display uppercase tracking-widest text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-koa-gradient shadow-glow-green text-white"
                  : "border border-gray-200 text-black hover:border-koa-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const hasTestimonial = testimonials.some((t) => t.project_id === project.id);

            return (
              <motion.div
                key={String(project.id)}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative overflow-hidden rounded-[2px]"
                  style={{
                    boxShadow: "0 2px 8px rgba(13,31,23,0.10), 0 0 0 1px rgba(13,31,23,0.07)",
                    transition: "box-shadow 0.4s ease, transform 0.4s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 16px 48px rgba(13,31,23,0.22), 0 0 0 1px rgba(168,197,176,0.35), 0 0 0 3px rgba(168,197,176,0.10)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 2px 8px rgba(13,31,23,0.10), 0 0 0 1px rgba(13,31,23,0.07)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Card image — uses coverImage */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(13,31,23,0.75) 0%, rgba(13,31,23,0.15) 45%, transparent 100%)",
                      }}
                    />

                    {/* Multi-image indicator */}
                    {project.images.length > 1 && (
                      <div
                        className="absolute bottom-4 right-4 z-10 flex items-center gap-1 font-display text-[10px] uppercase tracking-widest px-2 py-1"
                        style={{
                          background: "rgba(13,31,23,0.65)",
                          backdropFilter: "blur(6px)",
                          color: "#A8C5B0",
                          border: "1px solid rgba(168,197,176,0.2)",
                          borderRadius: "2px",
                        }}
                      >
                        <span style={{ fontSize: "10px" }}>⊞</span>
                        {project.images.length} photos
                      </div>
                    )}

                    {/* Category chip */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="inline-block font-display text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1"
                        style={{
                          background: "rgba(13,31,23,0.65)",
                          backdropFilter: "blur(8px)",
                          color: "#A8C5B0",
                          border: "1px solid rgba(168,197,176,0.25)",
                          borderRadius: "2px",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Client Rated badge */}
                    {hasTestimonial && (
                      <div className="absolute top-4 right-4 z-10">
                        <span
                          className="inline-flex items-center gap-1 font-display text-[10px] font-bold uppercase tracking-widest px-2.5 py-1"
                          style={{ background: "#A8C5B0", color: "#0D1F17", borderRadius: "2px" }}
                        >
                          ★ Client Rated
                        </span>
                      </div>
                    )}

                    {/* Hover panel */}
                    <div
                      className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end px-5 pb-5 pt-10"
                      style={{
                        background: "linear-gradient(to top, rgba(13,31,23,0.96) 60%, transparent 100%)",
                        opacity: 0,
                        transform: "translateY(8px)",
                        transition: "opacity 0.35s ease, transform 0.35s ease",
                      }}
                      ref={el => {
                        if (!el) return;
                        const card = el.closest(".group") as HTMLElement | null;
                        if (!card) return;
                        const show = () => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; };
                        const hide = () => { el.style.opacity = "0"; el.style.transform = "translateY(8px)"; };
                        card.addEventListener("mouseenter", show);
                        card.addEventListener("mouseleave", hide);
                      }}
                    >
                      {(() => {
                        const loc = resolveLocation(project.id, project.location);
                        return loc ? (
                          <p className="flex items-center gap-1.5 text-[11px] text-white/55 font-sans mb-1.5">
                            <MapPin size={10} />{loc}
                          </p>
                        ) : null;
                      })()}
                      <p className="text-xs text-koa-accent/80 font-display uppercase tracking-widest mb-0.5">
                        View project details →
                      </p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="px-5 py-4 flex flex-col gap-1 bg-white">
                    <div
                      className="w-6 mb-2"
                      style={{
                        height: "2px",
                        background: "linear-gradient(90deg, #A8C5B0 0%, transparent 100%)",
                        transition: "width 0.4s ease",
                      }}
                      ref={el => {
                        if (!el) return;
                        const card = el.closest(".group") as HTMLElement | null;
                        if (!card) return;
                        card.addEventListener("mouseenter", () => { el.style.width = "48px"; });
                        card.addEventListener("mouseleave", () => { el.style.width = "24px"; });
                      }}
                    />
                    <h3
                      className="font-display font-bold text-koa-dark leading-snug"
                      style={{ fontSize: "0.92rem", letterSpacing: "0.02em" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      {project.year && (
                        <span className="flex items-center gap-1 text-[11px] text-gray-400 font-sans">
                          <Calendar size={10} />{project.year}
                        </span>
                      )}
                      {hasTestimonial && project.client && (
                        <span className="flex items-center gap-1 text-[11px] text-gray-400 font-sans truncate">
                          <Building2 size={10} />{project.client}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
            style={{ backdropFilter: "blur(4px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
              style={{
                borderRadius: "2px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(168,197,176,0.2)",
              }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-full p-2 transition-colors shadow"
              >
                <X size={20} />
              </button>

              {/* ── Gallery ── */}
              <div className="relative">
                <ImageGallery
                  images={selectedProject.images}
                  title={selectedProject.title}
                />

                {/* Title overlay on top of main image */}
                <div
                  className="absolute inset-x-0 bottom-0 p-6 md:p-8 pointer-events-none"
                  style={{
                    // only covers the main image area, not the thumbnail strip
                    bottom: selectedProject.images.length > 1 ? "72px" : "0",
                  }}
                >
                  <span
                    className="inline-block font-display text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 mb-3"
                    style={{
                      background: "rgba(13,31,23,0.6)",
                      backdropFilter: "blur(8px)",
                      color: "#A8C5B0",
                      border: "1px solid rgba(168,197,176,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-3">
                    {selectedProject.year && (
                      <span className="flex items-center gap-1.5 text-xs text-white/60 font-sans">
                        <Calendar size={11} />{selectedProject.year}
                      </span>
                    )}
                    {(() => {
                      const loc = resolveLocation(selectedProject.id, selectedProject.location);
                      return loc ? (
                        <span className="flex items-center gap-1.5 text-xs text-white/60 font-sans">
                          <MapPin size={11} />{loc}
                        </span>
                      ) : null;
                    })()}
                    {projectTestimonials.length > 0 && selectedProject.client && (
                      <span className="flex items-center gap-1.5 text-xs text-white/60 font-sans">
                        <Building2 size={11} />{selectedProject.client}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Modal body ── */}
              <div className="p-6 md:p-8 space-y-6">
                <div
                  style={{
                    height: "2px",
                    background: "linear-gradient(90deg, #A8C5B0 0%, rgba(168,197,176,0.1) 100%)",
                    width: "48px",
                  }}
                />

                {selectedProject.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}

                {projectTestimonials.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3
                      className="font-display font-bold uppercase tracking-widest text-xs"
                      style={{ color: "#A8C5B0" }}
                    >
                      Client Remarks
                    </h3>
                    {projectTestimonials.map((t) => (
                      <div
                        key={t.id}
                        className="p-5"
                        style={{
                          background: "#F7FAF8",
                          borderLeft: "3px solid #A8C5B0",
                          borderRadius: "0 2px 2px 0",
                        }}
                      >
                        <Quote size={16} style={{ color: "#A8C5B0", marginBottom: "8px", opacity: 0.7 }} />
                        <p className="text-gray-600 italic leading-relaxed text-sm mb-3">
                          "{t.remark}"
                        </p>
                        <p className="font-display font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {t.role}{t.company ? `, ${t.company}` : ""} · {t.year}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}