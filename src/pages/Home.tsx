import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { SEO } from "../components/ui/SEO";

import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";
import { ArrowRight, Building2, HardHat, Factory, Shield, Droplets, Trees, Calendar } from "lucide-react";
import { hardcodedProjects } from "../data/projects";
import { supabase } from "../lib/supabaseClient";

const heroSlides = [
  { id: 1, title: "Structural Excellence",  subtitle: "Precision-engineered buildings crafted to stand the test of time.",       image: "/images/webp/KOA22.webp" },
  { id: 2, title: "Residential Mastery",    subtitle: "Premium homes built with expert craftsmanship and solid foundations.",     image: "/images/webp/KOA25.webp" },
  { id: 3, title: "Site Intelligence",      subtitle: "Rigorous ground investigation and survey works before every build.",       image: "/images/webp/KOA23.webp" },
  { id: 4, title: "Highway Engineering",    subtitle: "Robust road infrastructure connecting communities across Nigeria.",         image: "/images/webp/KOA24.webp" },
  { id: 5, title: "Steel Frameworks",       subtitle: "Advanced structural steel solutions engineered for heavy industry.",       image: "/images/webp/KOA21.webp" },
  { id: 6, title: "Renewable Energy",       subtitle: "Large-scale solar solutions powering a cleaner, greener tomorrow.",       image: "/images/webp/KOA26.webp" },
  { id: 7, title: "Energy Systems",         subtitle: "Precision installation and commissioning of solar energy infrastructure.", image: "/images/webp/KOA27.webp" },
  { id: 8, title: "Commercial Projects",    subtitle: "Shaping skylines with functional, well-finished commercial spaces.",       image: "/images/webp/KOA28.webp" },
];

const stats = [
  { label: "Years Experience",    value: 5,   suffix: "+" },
  { label: "Projects Completed",  value: 50,  suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Delivery Rate",       value: 100, suffix: "%" },
];

const FEATURED_IDS = [2, 1];

const coreServices = [
  { icon: Building2,  title: "Structural Engineering",                    desc: "Advanced analysis and design of complex structures ensuring safety and efficiency." },
  { icon: HardHat,    title: "Construction Management",                   desc: "End-to-end project delivery with rigorous quality control and timeline precision." },
  { icon: Shield,     title: "Steel & Timber Engineering",                desc: "Robust frameworks engineered for heavy loads and lasting structural performance." },
  { icon: Factory,    title: "Soil Mechanics & Geotechnical Engineering", desc: "Ground investigation and foundation solutions engineered for any terrain." },
  { icon: ArrowRight, title: "Highway Engineering",                       desc: "Scalable road and highway infrastructure connecting communities across Nigeria." },
  { icon: Trees,      title: "Environmental Engineering",                 desc: "Sustainable engineering solutions that protect and preserve the natural environment." },
  { icon: Droplets,   title: "Hydraulics & Water Resources",              desc: "Precision design of water systems, drainage, and hydraulic infrastructure." },
];

const YoutubeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

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
      <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{count}{suffix}</div>
      <div className="text-xs uppercase tracking-widest text-white/60 font-sans">{label}</div>
    </div>
  );
}

export function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [ratedIds, setRatedIds] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("project_id")
      .then(({ data }) => {
        if (data) setRatedIds(new Set(data.map((t: { project_id: number }) => t.project_id)));
      });
  }, []);

  const featuredProjects = FEATURED_IDS
    .map((id) => hardcodedProjects.find((p) => p.id === id))
    .filter(Boolean) as typeof hardcodedProjects;

  return (
    <div className="bg-white">
      <SEO
        title="KOA Engineering - Structural, Civil & General Engineering in Abuja, Nigeria"
        description="KOA Engineering delivers world-class structural, civil and general engineering solutions across Nigeria. Based in Abuja, FCT."
        url="https://koaengineering.com"
        image="https://koaengineering.com/images/webp/KOA22.webp"
      />

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
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="ken-burns-img h-full w-full object-cover origin-center"
                />
                <div className="absolute inset-0 bg-hero-gradient" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6">
                <div className="max-w-2xl">
                  {activeSlide === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-koa-accent font-display text-xs uppercase tracking-[0.3em] mb-4"
                      />

                      <h1
                        className="font-display font-bold text-white leading-[1.05] tracking-tight mb-5 drop-shadow-md"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                      >
                        {slide.title}
                      </h1>

                      <p
                        className="text-koa-accent font-sans font-light leading-relaxed mb-10 drop-shadow-md whitespace-nowrap overflow-hidden"
                        style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.25rem)" }}
                      >
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/projects">
                          <Button size="lg" variant="primary">Explore Projects</Button>
                        </Link>
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

          <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-koa-accent text-sm font-display uppercase tracking-widest">
                  {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
                <div className="h-4 w-px bg-white/20" />
                <motion.span
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white text-sm font-sans tracking-wide"
                >
                  {heroSlides[activeSlide].title}
                </motion.span>
              </div>
              <div className="custom-pagination flex gap-2" />
            </div>
          </div>
        </Swiper>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="bg-koa-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, i) => <CountUpStat key={i} {...stat} />)}
          </div>
        </div>
      </section>

      {/* ── Core Services ─────────────────────────────────────────────────── */}
      <Section variant="white">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-3"
            >
              Scope of Service
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-koa-dark mb-4"
            >
              Core Competencies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-gray-600 font-sans leading-relaxed"
            >
              Seven engineering disciplines delivered with technical precision, safety, and professionalism.
            </motion.p>
          </div>
          <Link to="/services">
            <Button className="shrink-0 group">
              All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="p-6 border border-gray-200 rounded-[4px] hover:shadow-card-hover hover:border-koa-accent/30 transition-all duration-300 bg-white group"
            >
              <div className="w-11 h-11 bg-gray-50 rounded-[4px] flex items-center justify-center mb-5 group-hover:bg-koa-gradient group-hover:shadow-glow-green group-hover:text-white transition-all duration-300 text-koa-dark">
                <service.icon size={22} />
              </div>
              <h3 className="text-sm font-display font-bold text-koa-dark mb-2 leading-snug">{service.title}</h3>
              <p className="text-gray-500 font-sans text-xs leading-relaxed mb-4">{service.desc}</p>
              <div className="h-px w-8 bg-koa-green group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Section variant="white" className="overflow-hidden border-t border-gray-100">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-3"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-koa-dark mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-gray-600 font-sans leading-relaxed"
            >
              A showcase of our most challenging and impactful engineering work across Nigeria.
            </motion.p>
          </div>
          <Link to="/projects">
            <Button className="shrink-0 group">
              View Portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => {
            const isRated = ratedIds.has(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                onClick={() => navigate("/projects", { state: { openProjectId: project.id } })}
                className="group relative cursor-pointer"
              >
                <div
                  className="relative overflow-hidden rounded-[2px]"
                  style={{ boxShadow: "0 2px 8px rgba(13,31,23,0.10), 0 0 0 1px rgba(13,31,23,0.07)", transition: "box-shadow 0.4s ease, transform 0.4s ease" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(13,31,23,0.22), 0 0 0 1px rgba(168,197,176,0.35)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(13,31,23,0.10), 0 0 0 1px rgba(13,31,23,0.07)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(13,31,23,0.75) 0%, rgba(13,31,23,0.15) 45%, transparent 100%)" }} />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block font-display text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1" style={{ background: "rgba(13,31,23,0.65)", backdropFilter: "blur(8px)", color: "#A8C5B0", border: "1px solid rgba(168,197,176,0.25)", borderRadius: "2px" }}>
                        {project.category}
                      </span>
                    </div>

                    {isRated && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1 font-display text-[10px] font-bold uppercase tracking-widest px-2.5 py-1" style={{ background: "#A8C5B0", color: "#0D1F17", borderRadius: "2px" }}>
                          ★ Client Rated
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="px-5 py-4 flex flex-col gap-1 bg-white">
                    <div className="w-6 mb-2 h-0.5 bg-gradient-to-r from-koa-accent to-transparent transition-all duration-500 group-hover:w-12" />
                    <h3 className="font-display font-bold text-koa-dark leading-snug" style={{ fontSize: "0.92rem", letterSpacing: "0.02em" }}>
                      {project.title}
                    </h3>
                    {project.year && (
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400 font-sans">
                        <Calendar size={10} /> {project.year}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── YouTube ───────────────────────────────────────────────────────── */}
      <Section variant="white" className="border-t border-gray-100">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <YoutubeLogo className="w-8 h-8 text-red-600" />
              <h2 className="text-4xl font-display font-bold text-koa-dark">Project Videos</h2>
            </div>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Watch our engineering projects come to life on our YouTube channel.
            </p>
          </div>
          <a href="https://www.youtube.com/@KOAENGINEERING" target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display uppercase tracking-widest text-sm px-6 py-3 rounded-sm transition-colors duration-300">
            <YoutubeLogo className="w-4 h-4" /> Visit Our Channel
          </a>
        </div>

        <a href="https://www.youtube.com/@KOAENGINEERING" target="_blank" rel="noopener noreferrer" className="block group">
          <div className="relative rounded-[4px] overflow-hidden bg-koa-dark border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-koa-dark to-koa-dark" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <YoutubeLogo className="w-10 h-10 text-red-500" />
                  <span className="text-white/50 font-display text-sm uppercase tracking-widest">YouTube</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">@KOAENGINEERING</h3>
                <p className="text-white/60 font-sans text-base max-w-md">
                  Subscribe for project walkthroughs, site updates, and engineering insights.
                </p>
              </div>
              <div className="shrink-0">
                <div className="inline-flex items-center gap-3 bg-red-600 group-hover:bg-red-700 text-white font-display uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-colors duration-300">
                  <YoutubeLogo className="w-5 h-5" /> Subscribe Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </a>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Section variant="dark" className="text-center border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
        >
          Ready to start your next project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70 font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Partner with KOA Engineering to bring your visionary structures to life with unmatched precision and reliability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/contact"><Button size="lg" variant="primary">Get in Touch</Button></Link>
        </motion.div>
      </Section>

    </div>
  );
}