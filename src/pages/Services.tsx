import { useState } from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    title: "Structural Engineering",
    description: "Our structural engineering team leverages advanced finite element analysis and cutting-edge materials to design resilient buildings and infrastructure. We ensure that every framework can withstand both time and the elements.",
    image: "/images/structural.jpg",
  },
  {
    title: "Civil Infrastructure",
    description: "From intricate highway interchanges to extensive bridge networks, our civil engineering solutions connect communities. We focus on scalable, long-lasting infrastructure that forms the backbone of modern society.",
    image: "/images/highway.jpg",
  },
  {
    title: "Engineering Consultancy Services",
    description: "Driving smart infrastructure and sustainable growth, we provide expert design, planning, and technical support across civil, structural, and environmental projects. From concept to execution, we deliver precise, practical solutions tailored to modern engineering challenges.",
    image: "/images/consultancy.png",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Our Services - KOA Engineering"
        description="KOA Engineering provides world-class services in Structural Engineering, Civil Infrastructure, Industrial Design, and Renewable Energy."
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden">
        <img
          src="/images/project1.png"
          alt="Engineering Services"
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
            Our Services
          </h1>
          <p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Comprehensive engineering solutions tailored to meet the highest standards of safety and performance.
          </p>
        </div>
      </section>

      {/* ── Service rows ──────────────────────────────────────────────────── */}
      {services.map((service, index) => (
        <Section key={index} variant="white" className={index % 2 !== 0 ? "bg-gray-50" : ""}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={index % 2 !== 0 ? "md:order-2" : "md:order-1"}>
              <h2 className="text-4xl font-display font-bold text-koa-dark mb-5">{service.title}</h2>
              <p className="text-lg font-sans text-gray-600 leading-relaxed mb-8">{service.description}</p>
              <Button
                variant="primary"
                className="bg-koa-green hover:bg-koa-dark shadow-glow-green"
                onClick={() => setActiveService(index)}
              >
                Learn More
              </Button>
            </div>
            <div
              className={`aspect-[4/3] relative overflow-hidden ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              />
            </div>
          </div>
        </Section>
      ))}

      {/* ── Service modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-koa-dark/80 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[4px] w-full max-w-2xl overflow-y-auto max-h-[90vh] shadow-2xl relative"
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
                onClick={() => setActiveService(null)}
              >
                <X size={18} />
              </button>

              <div className="aspect-video relative">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-koa-dark/90 to-transparent" />
                <h2 className="absolute bottom-6 left-8 text-3xl font-display font-bold text-white">
                  {services[activeService].title}
                </h2>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-display font-bold text-koa-green mb-4">Service Overview</h3>
                <p className="text-gray-600 font-sans text-base leading-relaxed">
                  {services[activeService].description}
                </p>
                <div className="mt-6 p-4 bg-gray-50 border-l-4 border-koa-green text-gray-600 font-sans text-sm leading-relaxed">
                  Contact us today to learn how our experts can tailor this service to your next major
                  project. We ensure compliance with the highest standards of safety, durability, and innovation.
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    variant="ghost"
                    onClick={() => setActiveService(null)}
                    className="border-koa-green text-koa-green hover:bg-koa-green hover:text-white"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}