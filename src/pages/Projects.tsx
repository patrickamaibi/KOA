import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Project {
  id: number | string;
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

const hardcodedProjects: Project[] = [
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

const categories = ["All", "Structural", "Highway", "Industrial", "Others"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const location = useLocation();

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

  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Portfolio - KOA Engineering"
        description="Explore KOA Engineering's extensive portfolio of structural, civil, highway, industrial, and residential projects across Nigeria."
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden mb-12">
        <img
          src="/images/construction.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={String(project.id)}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-[4px] aspect-square cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-koa-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-koa-accent font-display text-xs tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  {project.title}
                </h3>
                <span className="mt-3 text-sm text-white/70 underline underline-offset-2">
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
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
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        {selectedProject.testimonial.author}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {selectedProject.testimonial.role}
                      </p>
                    </div>
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