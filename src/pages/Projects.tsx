import { useState } from "react";
import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";
import { motion } from "framer-motion";

const allProjects = [
  { id: 1,  category: "Structural", title: "Suspension Bridge Project",       image: "/images/project1.png" },
  { id: 2,  category: "Structural", title: "Downtown Commercial Center",      image: "/images/project2.png" },
  { id: 3,  category: "Structural", title: "Highway Interchange Alpha",       image: "/images/project3.png" },
  { id: 4,  category: "Structural", title: "Steel Fabrication Plant",         image: "/images/project4.png" },
  { id: 5,  category: "Structural", title: "Green Energy Facility",           image: "/images/project6.png" },
  { id: 6,  category: "Structural", title: "Structural Framework Design",     image: "/images/project7.png" },
  { id: 7,  category: "Structural", title: "Modern Estate Phase I",           image: "/images/residential1.jpg" },
  { id: 8,  category: "Structural", title: "Eco-Friendly Housing",            image: "/images/residential2.png" },
  { id: 9,  category: "Structural", title: "Suburban Complex Design",         image: "/images/residential3.jpg" },
  { id: 10, category: "Structural", title: "Luxury Townhomes Exterior",       image: "/images/residential4.jpg" },
  { id: 11, category: "Structural", title: "Modern Urban Housing",            image: "/images/residential5.jpg" },
  { id: 12, category: "Highway",    title: "Urban Expressway Overpass",       image: "/images/highway.jpg" },
  { id: 13, category: "Highway",    title: "National Transit Corridor",       image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80" },
  { id: 14, category: "Highway",    title: "Bridge Deck Rehabilitation",      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { id: 15, category: "Industrial", title: "Heavy Industrial Warehouse",      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" },
  { id: 16, category: "Industrial", title: "Manufacturing Plant Framework",   image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" },
  { id: 17, category: "Industrial", title: "Steel Processing Facility",       image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80" },
  { id: 18, category: "Others",     title: "Renewable Solar Farm",            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" },
  { id: 19, category: "Others",     title: "Community Infrastructure Works",  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
  { id: 20, category: "Others",     title: "Water Treatment Plant",           image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" },
];

const categories = ["All", "Structural", "Highway", "Industrial", "Others"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Portfolio - KOA Engineering"
        description="Explore KOA Engineering's extensive portfolio of structural, civil, and residential projects."
      />

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
      background: "linear-gradient(135deg, rgba(22,163,74,0.75) 0%, rgba(22,163,74,0.45) 40%, rgba(15,23,42,0.80) 100%)",
      mixBlendMode: "multiply",
    }}
  />
  <div className="absolute inset-0 bg-koa-dark/20" />
  <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
    <h1
      className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
      style={{ textShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)" }}
    >
      Portfolio
    </h1>
    <p
      className="text-xl text-white/90 max-w-2xl mx-auto"
      style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
    >
      Explore our extensive portfolio of engineered solutions across various sectors.
    </p>
  </div>
</section>

      <Section variant="white" className="pt-0">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
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
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
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
                <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}