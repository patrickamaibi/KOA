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
import { ArrowRight, Building2, HardHat, Factory, Quote } from "lucide-react";

const heroSlides = [
  { id: 1, title: "Structural Excellence",  subtitle: "Precision engineering for modern architectural marvels.",      image: "/images/project1.png"    },
  { id: 2, title: "Urban Development",      subtitle: "Shaping skylines with sustainable commercial frameworks.",      image: "/images/project2.png"    },
  { id: 3, title: "Heavy Infrastructure",   subtitle: "Robust civil engineering for national transit networks.",       image: "/images/project3.png"    },
  { id: 4, title: "Industrial Frameworks",  subtitle: "Advanced structural steel solutions for heavy industry.",       image: "/images/consultancy.png" },
  { id: 5, title: "Renewable Energy",       subtitle: "Engineering a greener tomorrow with precision technology.",     image: "/images/construction.png"},
];

const stats = [
  { label: "Years Experience",    value: 5,   suffix: "+" },
  { label: "Projects Completed",  value: 50,  suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Delivery Rate",       value: 100, suffix: "%" },
];

const featuredTestimonials = [
  {
    id: 1,
    text: "KOA Engineering delivered an exceptional suspension bridge that exceeded our expectations in both design and durability. Their team was professional and detail-oriented throughout the entire project.",
    author: "Engr. Chukwudi Okafor",
    role: "Director",
    company: "Federal Ministry of Works",
    category: "Structural",
  },
  {
    id: 2,
    text: "The structural integrity and finishing of our commercial center is world-class. KOA Engineering brought our vision to life with remarkable precision and professionalism.",
    author: "Mrs. Funke Adeleke",
    role: "CEO",
    company: "Apex Realty Group",
    category: "Structural",
  },
  {
    id: 3,
    text: "Traffic congestion at this junction has reduced significantly. KOA Engineering's design was innovative and their execution was absolutely flawless from start to finish.",
    author: "Engr. Bola Musa",
    role: "Commissioner for Transport",
    company: "State Ministry of Transport",
    category: "Highway",
  },
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

      {/* Hero */}
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

      {/* Stats */}
      <Section variant="dark" className="border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <CountUpStat key={i} {...stat} />
          ))}
        </div>
      </Section>

      {/* Services Preview */}
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

      {/* Featured Projects */}
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

      {/* Testimonials Preview */}
      <Section variant="white" className="border-t border-gray-100">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-koa-dark mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Trusted by leading organisations across Nigeria and beyond.
            </p>
          </div>
          <Link to="/testimonials">
            <Button className="shrink-0 group">
              View All Testimonials <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-[4px] p-8 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <Quote size={28} className="text-koa-accent opacity-70 shrink-0" />
                <span className="text-xs font-display uppercase tracking-widest text-koa-green border border-koa-green/30 bg-koa-green/5 px-3 py-1 rounded-full">
                  {t.category}
                </span>
              </div>

              <div className="border-l-2 border-koa-green/30 pl-4 mb-6 flex-1">
                <p className="text-gray-600 leading-relaxed italic text-sm">
                  "{t.text}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-auto">
                <p className="font-display font-bold text-gray-900 text-sm">{t.author}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* YouTube Channel */}
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
          <a
            href="https://www.youtube.com/@KOAENGINEERING"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display uppercase tracking-widest text-sm px-6 py-3 rounded-sm transition-colors duration-300"
          >
            <YoutubeLogo className="w-4 h-4" />
            Visit Our Channel
          </a>
        </div>

        <a
          href="https://www.youtube.com/@KOAENGINEERING"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative rounded-[4px] overflow-hidden bg-koa-dark border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-koa-dark to-koa-dark" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <YoutubeLogo className="w-10 h-10 text-red-500" />
                  <span className="text-white/50 font-display text-sm uppercase tracking-widest">YouTube</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                  @KOAENGINEERING
                </h3>
                <p className="text-white/60 font-sans text-base max-w-md">
                  Subscribe to our channel for project walkthroughs, site updates, and engineering insights.
                </p>
              </div>
              <div className="shrink-0">
                <div className="inline-flex items-center gap-3 bg-red-600 group-hover:bg-red-700 text-white font-display uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-colors duration-300">
                  <YoutubeLogo className="w-5 h-5" />
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </a>
      </Section>

      {/* CTA */}
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