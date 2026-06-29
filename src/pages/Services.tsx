import { useState } from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    title: "Structural Engineering",
    description: "Our structural engineering team leverages advanced finite element analysis and cutting-edge materials to design resilient buildings and infrastructure. We ensure that every framework can withstand both time and the elements.",
    image: "/images/structural.jpg",
  },
  {
    title: "Construction Management",
    description: "End-to-end project delivery with rigorous quality control, cost management, and timeline precision. We coordinate all phases of construction from procurement to handover ensuring every project is delivered on time and within budget.",
    image: "/images/project2.png",
  },
  {
    title: "Steel & Timber Engineering",
    description: "Robust steel and timber structural frameworks engineered to handle heavy loads and demanding environments. From fabrication detailing to connection design, we deliver steel and timber solutions built to last.",
    image: "/images/industrial2.jpg",
  },
  {
    title: "Soil Mechanics & Geotechnical Engineering",
    description: "Comprehensive ground investigation, soil analysis, and foundation design for any terrain. We assess subsurface conditions and deliver geotechnical solutions that underpin safe, stable structures.",
    image: "/images/highway2.jpg",
  },
  {
    title: "Highway Engineering",
    description: "From intricate highway interchanges to extensive road networks, our civil engineering solutions connect communities. We focus on scalable, long-lasting infrastructure that forms the backbone of modern society.",
    image: "/images/highway.jpg",
  },
  {
    title: "Environmental Engineering",
    description: "Sustainable engineering solutions that assess and protect the natural environment. Our environmental services include Environmental Impact Assessments, site remediation planning, and compliance with Nigerian environmental regulations.",
    image: "/images/consultancy.png",
  },
  {
    title: "Hydraulics & Water Resources Engineering",
    description: "Precision design of water supply systems, drainage networks, flood control infrastructure, and hydraulic structures. We apply advanced modelling to deliver reliable, resilient water resource solutions.",
    image: "/images/highway3.jpg",
  },
  {
    title: "Electrical Engineering",
    description: "Comprehensive electrical engineering services spanning power systems design, high and low voltage installations, lighting systems, and energy efficiency solutions. Our team delivers safe, code-compliant electrical infrastructure for residential, commercial, and industrial projects from load analysis and single-line diagrams through to site commissioning and testing.",
    image: "/images/solar2.png",
  },
  {
    title: "Engineering Consultancy",
    description: "Expert advisory services across all engineering disciplines from concept feasibility and technical due diligence to regulatory compliance, value engineering, and independent design review. Whether you require peer review of existing designs, specialist input on a complex challenge, or a trusted technical partner for long-term project support, our multidisciplinary consultancy team brings the depth of knowledge and professional rigour your project demands.",
    image: "/images/consultancy.png",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="pt-24 bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden">
        <img
          src="/images/project1.png"
          alt="Engineering Services"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ filter: "blur(3px)", transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.75) 0%, rgba(22,163,74,0.45) 40%, rgba(15,23,42,0.80) 100%)", mixBlendMode: "multiply" }} />
        <div className="absolute inset-0 bg-koa-dark/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-koa-accent font-display text-xs uppercase tracking-[0.3em] mb-5"
          >
            9 Engineering Disciplines
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)" }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Comprehensive engineering solutions tailored to meet the highest standards of safety and performance.
          </motion.p>
        </div>
      </section>

      {/* ── Service rows ──────────────────────────────────────────────────── */}
      {services.map((service, index) => (
        <Section key={index} variant="white" className={index % 2 !== 0 ? "bg-gray-50" : ""}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeUp()}
              className={index % 2 !== 0 ? "md:order-2" : "md:order-1"}
            >
              <p className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-4xl font-display font-bold text-koa-dark mb-5">{service.title}</h2>
              <p className="text-lg font-sans text-gray-600 leading-relaxed mb-8">{service.description}</p>
              <Button
                variant="primary"
                className="bg-koa-green hover:bg-koa-dark shadow-glow-green"
                onClick={() => setActiveService(index)}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.15)}
              className={`aspect-[4/3] relative overflow-hidden ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              />
            </motion.div>
          </div>
        </Section>
      ))}

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[4px] w-full max-w-2xl overflow-y-auto max-h-[90vh] shadow-2xl relative"
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
                onClick={() => setActiveService(null)}
              >
                <X size={18} />
              </button>

              <div className="aspect-video relative">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-koa-dark/90 to-transparent" />
                <p className="absolute top-6 left-8 text-koa-accent font-display text-xs uppercase tracking-[0.3em]">
                  {String(activeService + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
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
                  Contact us to learn how our engineers can tailor this service to your next project.
                  We ensure compliance with the highest standards of safety, durability, and innovation.
                </div>
                <div className="mt-8 flex justify-end">
                  <Button variant="ghost" onClick={() => setActiveService(null)} className="border-koa-green text-koa-green hover:bg-koa-green hover:text-white">
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