import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HardHat, Leaf, Zap, ArrowRight, Briefcase, Calculator, ClipboardList, Truck, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const hiringCategories = [
  {
    title: "Engineering",
    desc: "Design, analysis, and site delivery across every discipline we build with.",
    roles: [
      { icon: HardHat, name: "Structural & Civil Engineering" },
      { icon: Leaf, name: "Environmental Engineering" },
      { icon: Zap, name: "Electrical Engineering" },
    ],
  },
  {
    title: "Business & Operations",
    desc: "Keeping projects funded, planned, and growing.",
    roles: [
      { icon: Briefcase, name: "Project Management" },
      { icon: Calculator, name: "Accounting & Finance" },
      { icon: Users, name: "Business Development" },
    ],
  },
  {
    title: "Support & Logistics",
    desc: "The backbone that keeps our sites and offices running.",
    roles: [
      { icon: ClipboardList, name: "Office Administration" },
      { icon: Truck, name: "Logistics & Driving" },
    ],
  },
];

export function Careers() {
  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Careers - KOA Engineering | Join Our Team in Abuja, Nigeria"
        description="Explore career opportunities at KOA Engineering. We are always looking for talented engineers and professionals to join our growing team in Abuja, Nigeria."
        url="https://koaengineering.com/careers"
        image="https://koaengineering.com/images/webp/KOAOG.webp"
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden">
        <img
          src="/images/webp/KOAOG1.webp"
          alt="Careers at KOA Engineering"
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
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)" }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/90"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Build your career with one of Nigeria's growing engineering firms.
          </motion.p>
        </div>
      </section>

      {/* ── No Openings Notice ────────────────────────────────────────────── */}
      <Section variant="white" className="pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p {...fadeUp()} className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-4">
            Current Openings
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl font-display font-bold text-koa-dark mb-6">
            No Vacancies At This Time
          </motion.h2>
          <motion.p {...fadeUp(0.15)} className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
            We do not have any open positions right now, but we are a growing firm and new opportunities arise regularly. If you are a driven engineer or built environment professional who shares our passion for precision and excellence, we would love to hear from you.
          </motion.p>
          <motion.p {...fadeUp(0.2)} className="text-gray-600 font-sans text-lg leading-relaxed">
            Send your CV and a brief introduction to{" "}
            <a href="mailto:info@koaengineering.com" className="text-koa-green underline">
              info@koaengineering.com
            </a>{" "}
            and we will keep your profile on file for future consideration.
          </motion.p>
        </div>
      </Section>

      {/* ── Why KOA ───────────────────────────────────────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-koa-green rounded-full blur-[160px] opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-koa-green rounded-full blur-[160px] opacity-10 -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p {...fadeUp()} className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-4 text-center">
            Why KOA Engineering
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl font-display font-bold text-white mb-12 text-center">
            A Place to Grow
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Real Projects", desc: "Work on live structural, highway, and civil engineering projects across Nigeria from day one." },
              { title: "Professional Growth", desc: "We support continuous learning, professional certifications, and career advancement for every team member." },
              { title: "Purpose-Driven Work", desc: "Every project we deliver contributes to Nigeria's infrastructure, communities, and built environment." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-[4px] p-8 hover:bg-white/10 hover:border-koa-accent/30 transition-all duration-300 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                  className="w-2 h-2 rounded-full bg-koa-accent mb-5"
                />
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.35 }}
                  className="font-display font-bold text-white text-lg mb-3"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.45 }}
                  className="text-white/70 font-sans text-sm leading-relaxed"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
{/* ── Areas We Hire In ──────────────────────────────────────────────── */}
      <Section variant="white" className="border-t border-gray-100">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <p className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-3">Opportunities</p>
          <h2 className="text-3xl font-display font-bold text-koa-dark">Areas We Hire In</h2>
          <p className="text-gray-500 font-sans text-base mt-4 max-w-xl mx-auto">
            We build teams across every function from engineering to operations, administration, and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hiringCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: i * 0.15 },
                },
              }}
              whileHover={{ y: -6 }}
              className="group bg-gray-50/60 border border-gray-100 rounded-[4px] p-7 hover:border-koa-green/30 hover:bg-white hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all duration-500 ease-out"
            >
              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  show: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                style={{ transformOrigin: "left" }}
                className="w-9 h-1 rounded-full bg-koa-gradient mb-5"
              />

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="font-display font-bold text-koa-dark text-lg mb-2"
              >
                {cat.title}
              </motion.h3>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="text-gray-500 font-sans text-sm leading-relaxed mb-6"
              >
                {cat.desc}
              </motion.p>

              <ul className="space-y-3">
                {cat.roles.map((role) => (
                  <motion.li
                    key={role.name}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-koa-dark/85 font-sans text-sm"
                  >
                    <motion.span
                      variants={{
                        hidden: { scale: 0, rotate: -30 },
                        show: {
                          scale: 1,
                          rotate: 0,
                          transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                        },
                      }}
                      className="w-7 h-7 rounded-[4px] bg-koa-green/10 text-koa-green flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-koa-green group-hover:text-white"
                    >
                      <role.icon size={14} />
                    </motion.span>
                    {role.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Section variant="dark" className="text-center border-t border-white/10">
        <motion.h2
          {...fadeUp()}
          className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
        >
          Ready to build something great?
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg text-white/70 font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Even without an open role, we welcome expressions of interest from talented engineers and construction professionals.
        </motion.p>
        <motion.div {...fadeUp(0.2)}>
          <Link to="/contact">
            <Button size="lg" variant="primary">
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </Section>

    </div>
  );
}