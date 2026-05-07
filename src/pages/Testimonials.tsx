import { useState, useEffect, useRef } from "react";
import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Testimonial {
  id: number;
  category: string;
  text: string;
  author: string;
  role: string;
  company: string;
  projectTitle: string;
  projectId: number;
}

interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
  description?: string;
  client?: string;
  year?: string;
  location?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  youtubeId?: string;
}

const projects: Project[] = [
  // ── STRUCTURAL ───────────────────────────────────────────────────────────
  {
    id: 1,
    category: "Structural",
    title: "Commercial Complex Structural Design",
    image: "/images/project2.png",
    description:
      "Structural engineering and design for a multi-storey commercial complex. The design incorporates reinforced concrete frames, flat slab systems, and full MEP coordination.",
    client: "Apex Realty Group",
    year: "2022",
    location: "Lagos, Nigeria",
    testimonial: {
      text: "The structural drawings were detailed and construction-ready. Our contractor had no ambiguities on site — a sign of excellent engineering documentation.",
      author: "Mrs. Funke Adeleke",
      role: "CEO, Apex Realty Group",
    },
  },
  {
    id: 2,
    category: "Structural",
    title: "Highway Interchange Structural Design",
    image: "/images/project3.png",
    description:
      "Structural design of a multi-level highway interchange including flyover decks, pier caps, and abutments. Full 3D structural modelling and load analysis were conducted.",
    client: "State Ministry of Transport",
    year: "2023",
    location: "Port Harcourt, Nigeria",
    testimonial: {
      text: "The interchange design significantly improved traffic flow at one of our most congested junctions. KOA's structural solution was both elegant and practical.",
      author: "Engr. Bola Musa",
      role: "Commissioner for Transport",
    },
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    category: "Structural",
    title: "Industrial Facility Structural Design",
    image: "/images/project4.png",
    description:
      "Full structural design for a heavy industrial production facility addressing heavy floor loading, crane gantry requirements, and vibration isolation.",
    client: "NigerSteel Industries",
    year: "2021",
    location: "Kano, Nigeria",
    testimonial: {
      text: "The structural design handled our crane and heavy equipment loads perfectly. No cracks, no settlement — exactly what we needed.",
      author: "Alhaji Sani Danladi",
      role: "MD, NigerSteel Industries",
    },
  },
  {
    id: 4,
    category: "Structural",
    title: "Energy Facility Structural Design",
    image: "/images/project6.png",
    description:
      "Structural and civil engineering design for a power generation facility including turbine foundations, equipment pads, cable trenches, and perimeter infrastructure.",
    client: "GreenPower Nigeria Ltd",
    year: "2023",
    location: "Kaduna, Nigeria",
    testimonial: {
      text: "KOA Engineering delivered on time and the structural designs were immediately buildable. Our construction team had no issues with the drawings.",
      author: "Dr. Amina Yusuf",
      role: "Project Director, GreenPower Nigeria",
    },
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 5,
    category: "Structural",
    title: "Luxury Townhomes Development",
    image: "/images/project7.png",
    description:
      "Structural design and construction supervision of a luxury townhome development featuring open-plan living floors, glass balustrades, and premium exterior finishes.",
    client: "Premier Homes Ltd",
    year: "2022",
    location: "Lekki, Lagos",
    testimonial: {
      text: "The townhomes are stunning and structurally sound. KOA Engineering's design gave us the open-plan layouts our buyers love without compromising structural integrity.",
      author: "Mr. Emeka Nwosu",
      role: "CEO, Premier Homes Ltd",
    },
  },
  {
    id: 6,
    category: "Structural",
    title: "Modern Townhomes Estate",
    image: "/images/residential1.jpg",
    description:
      "Structural design for a modern townhome estate featuring clean white facades, large window openings, and well-landscaped frontage designed to maximise natural light.",
    client: "EcoLiving Nigeria",
    year: "2023",
    location: "Abuja, Nigeria",
    testimonial: {
      text: "The estate looks exactly like our vision. KOA Engineering translated our architectural concept into a structurally excellent reality.",
      author: "Ms. Ngozi Eze",
      role: "Founder, EcoLiving Nigeria",
    },
  },
  {
    id: 7,
    category: "Structural",
    title: "Residential Estate — Semi-Detached Duplexes",
    image: "/images/residential2.jpg",
    description:
      "Construction and structural supervision of a residential estate comprising semi-detached duplexes with stone-cladded facades, gated compounds, and quality interior finishes.",
    client: "Horizon Properties",
    year: "2022",
    location: "Lagos, Nigeria",
    testimonial: {
      text: "Our buyers are extremely happy. The build quality is evident — solid structures, quality finishes, and excellent workmanship throughout.",
      author: "Barr. Ifeanyi Obi",
      role: "Chairman, Horizon Properties",
    },
  },
  {
    id: 8,
    category: "Structural",
    title: "Apartment Block Construction",
    image: "/images/residential2.png",
    description:
      "Design and construction of a two-storey residential apartment block with modern grey render finish, white cornicing, and balcony apartments. Full structural and civil engineering services provided.",
    client: "Urban Shelter Initiative",
    year: "2023",
    location: "Kano, Nigeria",
    testimonial: {
      text: "Clean, solid construction. The apartment block was delivered on schedule and residents are very satisfied with the quality.",
      author: "Engr. Kabiru Aliyu",
      role: "Coordinator, Urban Shelter Initiative",
    },
  },
  {
    id: 9,
    category: "Structural",
    title: "Duplex with Stamped Concrete Compound",
    image: "/images/residential3.jpg",
    description:
      "Construction of a modern duplex with a premium stamped and coloured concrete driveway, showcasing KOA Engineering's ability to deliver both structural excellence and high-end landscaping finishes.",
    client: "Private Client",
    year: "2023",
    location: "Lagos, Nigeria",
    testimonial: {
      text: "The stamped concrete compound alone sets this property apart. KOA Engineering handled both the structure and the finishing works with equal professionalism.",
      author: "Mr. Seun Adebayo",
      role: "Private Client",
    },
  },
  {
    id: 10,
    category: "Structural",
    title: "Contemporary Duplex — Black & White Finish",
    image: "/images/residential4.jpg",
    description:
      "Design and construction of a contemporary duplex featuring a bold black-and-white exterior, aluminium louvre gates, and a well-appointed double-storey layout on a corner plot.",
    client: "EliteHomes Nigeria",
    year: "2022",
    location: "Abuja, Nigeria",
    testimonial: {
      text: "The finished duplex is a landmark on the street. KOA Engineering delivered a striking, well-built home that has attracted significant attention.",
      author: "Mrs. Shade Oluwole",
      role: "Director, EliteHomes Nigeria",
    },
  },
  {
    id: 11,
    category: "Structural",
    title: "Premium Bungalow with Courtyard Lighting",
    image: "/images/project5.png",
    description:
      "Construction of a high-end residential bungalow with premium exterior lighting, decorative stone cladding, and a beautifully finished stamped concrete courtyard — delivered to an exacting private brief.",
    client: "Private Client",
    year: "2023",
    location: "Abuja, Nigeria",
    testimonial: {
      text: "The finishing quality of my home exceeded what I imagined. Every detail from the lighting to the courtyard tiles was handled with great care.",
      author: "Dr. Chidi Okeke",
      role: "Private Client",
    },
  },
  {
    id: 12,
    category: "Structural",
    title: "Residential Block — Structural Construction",
    image: "/images/project8.png",
    description:
      "Ongoing construction of a residential block at lintel and ring beam level. Timber formwork and bamboo scaffolding are in place for the upper slab pour, with reinforcement already set.",
    client: "Private Developer",
    year: "2023",
    location: "Lagos, Nigeria",
    testimonial: {
      text: "KOA Engineering's site management is excellent. Work progresses systematically and safely — you can see the quality even at this early stage.",
      author: "Mr. Tunde Bello",
      role: "Private Developer",
    },
  },
  {
    id: 13,
    category: "Structural",
    title: "Structural Framework Design",
    image: "/images/project1.png",
    description:
      "Comprehensive structural framework design and analysis for a landmark development. Full load calculations, member sizing, and construction documentation were delivered.",
    client: "Landmark Developers",
    year: "2023",
    location: "Abuja, Nigeria",
    testimonial: {
      text: "KOA Engineering's structural documentation was thorough and professional. The design gave our construction team complete clarity from day one.",
      author: "Engr. Adamu Sule",
      role: "Project Manager, Landmark Developers",
    },
  },

  // ── HIGHWAY ──────────────────────────────────────────────────────────────
  {
    id: 14,
    category: "Highway",
    title: "Asphalt Road Paving Works",
    image: "/images/highway.jpg",
    description:
      "Full-scale asphalt road paving and compaction works on a major road corridor. Our team deployed heavy-duty asphalt rollers and pavers to deliver a smooth, durable surface meeting federal highway standards.",
    client: "Federal Ministry of Works",
    year: "2023",
    location: "Nigeria",
    testimonial: {
      text: "The road surface quality is outstanding. KOA Engineering's team was on-site every day ensuring the compaction and paving met specification. We are very satisfied.",
      author: "Engr. Chukwuemeka Obi",
      role: "Director of Highways, FMW",
    },
  },
  {
    id: 15,
    category: "Highway",
    title: "Earthworks & Site Clearing",
    image: "/images/highway2.jpg",
    description:
      "Large-scale earthworks and land clearing for a highway expansion project. Heavy bulldozers were deployed for bulk excavation, grading, and subgrade preparation across a wide corridor.",
    client: "State Ministry of Infrastructure",
    year: "2023",
    location: "Nigeria",
    testimonial: {
      text: "KOA Engineering mobilized quickly and their equipment was top-tier. The earthworks were completed ahead of schedule with zero incidents.",
      author: "Engr. Bala Usman",
      role: "Project Coordinator",
    },
  },
  {
    id: 16,
    category: "Highway",
    title: "Road Construction & Grading",
    image: "/images/highway3.jpg",
    description:
      "Subgrade preparation and road construction works using CAT heavy equipment. The project involved grading, compaction, and shaping of the road formation to specified cross-sections.",
    client: "Niger Delta Development Commission",
    year: "2022",
    location: "South-South, Nigeria",
    testimonial: {
      text: "Professional execution from start to finish. The grading work was precise and the team maintained excellent safety standards throughout.",
      author: "Mrs. Amara Ekpo",
      role: "NDDC Regional Liaison",
    },
  },

  // ── INDUSTRIAL ───────────────────────────────────────────────────────────
  {
    id: 17,
    category: "Industrial",
    title: "Steel Structural Welding Works",
    image: "/images/industrial2.jpg",
    description:
      "Structural steel welding and fabrication works on an industrial facility. Our certified welders carried out precision welding of steel members within a steel-framed warehouse structure.",
    client: "Dangote Group",
    year: "2022",
    location: "Apapa, Lagos",
    testimonial: {
      text: "KOA Engineering's welding team is highly skilled. The structural steel joints were clean, strong, and passed all quality inspections without issue.",
      author: "Mr. Adeyemi Taiwo",
      role: "Head of Projects, Dangote Group",
    },
  },
  {
    id: 18,
    category: "Industrial",
    title: "Steel Materials Supply & Storage",
    image: "/images/industrial3.jpg",
    description:
      "Procurement, supply, and site storage management of structural steel sections for a large industrial construction project. Steel hollow sections and flat bars were staged and organized for sequential installation.",
    client: "ArcelorMittal Nigeria",
    year: "2023",
    location: "Delta State, Nigeria",
    testimonial: {
      text: "Their logistics and materials management meant there was zero downtime on our project. Steel was always available when the installation teams needed it.",
      author: "Mr. Tobi Ogunleye",
      role: "Engineering Manager, ArcelorMittal",
    },
  },

  // ── OTHERS ───────────────────────────────────────────────────────────────
  {
    id: 19,
    category: "Others",
    title: "Rooftop Solar Panel Installation",
    image: "/images/solar.jpg",
    description:
      "Supply and installation of rooftop solar PV panels for residential and commercial clients. Our team handles panel mounting, cable management, and inverter integration for reliable hybrid and off-grid power systems.",
    client: "Various Clients",
    year: "2023",
    location: "Abuja, Nigeria",
    testimonial: {
      text: "Since KOA Engineering installed our solar system, our electricity bills have dropped dramatically. Professional installation and excellent after-sales support.",
      author: "Mrs. Blessing Adamu",
      role: "Homeowner, Abuja",
    },
  },
  {
    id: 20,
    category: "Others",
    title: "Solar Inverter & Electrical Panel Works",
    image: "/images/solar2.png",
    description:
      "Installation and commissioning of solar inverter systems, charge controllers, and distribution panels. Our KOA engineers handle full wiring, load balancing, and system testing to ensure safe and reliable power supply.",
    client: "Various Clients",
    year: "2023",
    location: "Abuja, Nigeria",
    testimonial: {
      text: "The electrical installation was neat, professional, and the system has been running flawlessly. KOA Engineering clearly knows what they are doing.",
      author: "Mr. Gabriel Okafor",
      role: "Commercial Client, Abuja",
    },
  },
];

const testimonials: Testimonial[] = projects.map((p) => ({
  id: p.id,
  projectId: p.id,
  projectTitle: p.title,
  category: p.category,
  text: p.testimonial!.text,
  author: p.testimonial!.author,
  role: p.testimonial!.role,
  company: p.client ?? "",
}));

const categories = ["All", "Structural", "Highway", "Industrial", "Others"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

function CountUpStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-white/60 font-sans">
        {label}
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const handleOpenProject = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId) ?? null;
    setSelectedProject(project);
  };

  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Testimonials - KOA Engineering"
        description="Hear what our clients say about KOA Engineering's structural and civil engineering excellence."
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden mb-0">
        <img
          src="/images/construction.png"
          alt="Client Testimonials"
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
              style={{
                textShadow:
                  "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)",
              }}
            >
              Testimonials
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
              style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
            >
              What our clients say about working with KOA Engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <Section variant="dark" className="border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <CountUpStat value={20} suffix="+" label="Happy Clients" />
          <CountUpStat value={20} suffix="+" label="Projects Completed" />
          <CountUpStat value={5} suffix="+" label="Years Experience" />
          <CountUpStat value={100} suffix="%" label="Client Satisfaction" />
        </div>
      </Section>

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <Section variant="white" className="pt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-koa-gradient text-white shadow-md scale-105"
                  : "border border-gray-200 text-gray-600 hover:border-koa-green hover:text-koa-green bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filtered.map((t) => (
              <motion.div
                key={t.id}
                variants={cardVariants}
                onClick={() => handleOpenProject(t.projectId)}
                className="break-inside-avoid bg-white border border-gray-100 rounded-[4px] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote size={24} className="text-koa-accent opacity-70" />
                  <span className="text-xs font-display uppercase tracking-widest text-koa-green border border-koa-green/30 bg-koa-green/5 px-3 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>

                <div className="border-l border-koa-green/20 pl-4 mb-6">
                  <p className="text-gray-600 leading-relaxed italic text-sm">
                    "{t.text}"
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-display font-bold text-gray-900 text-sm">
                    {t.author}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {t.role}, {t.company}
                  </p>
                </div>

                <p className="mt-4 text-xs text-koa-green group-hover:text-koa-accent font-display uppercase tracking-widest transition-colors">
                  {t.projectTitle} →
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-[4px]"
        >
          <div className="absolute inset-0 bg-koa-dark" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(135deg, rgba(22,163,74,0.5) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 text-center py-16 px-6">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join our growing list of satisfied clients across Nigeria and beyond.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-block bg-koa-accent text-koa-dark font-display font-bold uppercase tracking-widest px-10 py-4 rounded-sm hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </Section>

      {/* ── Project Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[4px] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-full p-2 transition-colors shadow"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-[4px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <span className="text-koa-accent font-display text-xs tracking-widest uppercase mb-1">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
                  {selectedProject.client && (
                    <span>
                      <strong className="text-gray-800">Client:</strong>{" "}
                      {selectedProject.client}
                    </span>
                  )}
                  {selectedProject.year && (
                    <span>
                      <strong className="text-gray-800">Year:</strong>{" "}
                      {selectedProject.year}
                    </span>
                  )}
                  {selectedProject.location && (
                    <span>
                      <strong className="text-gray-800">Location:</strong>{" "}
                      {selectedProject.location}
                    </span>
                  )}
                </div>

                {selectedProject.description && (
                  <div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                )}

                {selectedProject.youtubeId && (
                  <div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                      Project Video
                    </h3>
                    <div className="relative w-full aspect-video rounded-[4px] overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                        title={selectedProject.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                )}

                {selectedProject.testimonial && (
                  <div className="bg-gray-50 border-l-4 border-koa-accent rounded-r-[4px] p-6">
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                      Client Testimonial
                    </h3>
                    <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                      "{selectedProject.testimonial.text}"
                    </blockquote>
                    <p className="font-bold text-gray-900 text-sm">
                      {selectedProject.testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {selectedProject.testimonial.role}
                    </p>
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