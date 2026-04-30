import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";
import { ArrowRight, Building2, HardHat, Factory } from "lucide-react";

const heroSlides = [
  { id: 1, title: "Structural Excellence",  subtitle: "Precision engineering for modern architectural marvels.",        image: "/images/project1.png",   },
  { id: 2, title: "Urban Development",      subtitle: "Shaping skylines with sustainable commercial frameworks.",        image: "/images/project2.png",},
  { id: 3, title: "Heavy Infrastructure",   subtitle: "Robust civil engineering for national transit networks.",         image: "/images/project3.png",  },
  { id: 4, title: "Industrial Frameworks",  subtitle: "Advanced structural steel solutions for heavy industry.",         image: "/images/consultancy.png", },
  { id: 5, title: "Renewable Energy",       subtitle: "Engineering a greener tomorrow with precision technology.",       image: "/images/construction.png",},
];

const stats = [
  { label: "Years Experience",    value: 5,  suffix: "+" },
  { label: "Projects Completed",  value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Delivery Rate",          value: 100, suffix: "%" },
];

function CountUpStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.ceil(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-white/60 font-sans">
        {label}
      </div>
    </div>
  );
}

export function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden bg-koa-dark">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative h-full w-full overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src={slide.image} alt={slide.title} className="ken-burns-img h-full w-full object-cover origin-center" />
                <div className="absolute inset-0 bg-hero-gradient" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6">
                <div className="max-w-3xl">
                  {activeSlide === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-[0.08em] mb-6 drop-shadow-md">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-koa-accent font-sans font-light mb-10 max-w-2xl drop-shadow-md">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="primary">Explore Projects</Button>
                        <Link to="/contact">
                          <Button size="lg" variant="ghost">Contact Us</Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-koa-accent text-sm font-display uppercase tracking-widest">
                  {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
                <div className="h-4 w-px bg-white/20" />
                <motion.span key={activeSlide} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-white text-sm font-sans tracking-wide">
                  {heroSlides[activeSlide].title}
                </motion.span>
              </div>
              <div className="custom-pagination flex gap-2" />
            </div>
          </div>
        </Swiper>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <Section variant="dark" className="border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => <CountUpStat key={i} {...stat} />)}
        </div>
      </Section>

      {/* ── Services Preview ──────────────────────────────────────────────── */}
      <Section variant="white">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-koa-dark mb-4">Core Competencies</h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Delivering comprehensive engineering solutions with a commitment to technical excellence and innovation.
            </p>
          </div>
          <Link to="/services">
            <Button className="shrink-0 group">
              All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Building2, title: "Structural Engineering", desc: "Advanced analysis and design of complex structures ensuring safety and efficiency." },
            { icon: HardHat,   title: "Civil Infrastructure",   desc: "Comprehensive design and management for highways, bridges, and public works." },
            { icon: Factory,   title: "Industrial Design",      desc: "Robust frameworks engineered to support heavy industrial operations and facilities." },
          ].map((service, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="p-8 border border-gray-200 rounded-[4px] hover:shadow-card-hover transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-gray-50 rounded-[4px] flex items-center justify-center mb-6 group-hover:bg-koa-gradient group-hover:shadow-glow-green group-hover:text-white transition-all duration-300 text-koa-dark">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-koa-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">{service.desc}</p>
              <div className="h-px w-12 bg-koa-green group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Section variant="white" className="overflow-hidden">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-koa-dark mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              A showcase of our most challenging and impactful engineering triumphs.
            </p>
          </div>
          <Link to="/projects">
            <Button className="shrink-0 group">
              View Portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Modern Estate Phase I", label: "Residential Project", image: "/images/residential1.jpg" },
            { title: "Luxury Townhomes",      label: "Residential Project", image: "/images/residential2.jpg" },
          ].map((project, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[4px] aspect-[4/3] cursor-pointer">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-koa-dark/90 via-koa-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-koa-accent font-display text-sm tracking-widest uppercase block mb-2">{project.label}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                <div className="w-0 h-px bg-koa-accent group-hover:w-full transition-all duration-500 delay-100 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Section variant="dark" className="text-center border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to start your next project?
        </h2>
        <p className="text-lg text-white/70 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
          Partner with KOA Engineering to bring your visionary structures to life with unmatched precision and reliability.
        </p>
        <Link to="/contact">
          <Button size="lg" variant="primary">Get in Touch</Button>
        </Link>
      </Section>

    </div>
  );
}