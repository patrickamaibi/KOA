import { Section } from "../components/ui/Section";
import { Building2, Award, Users, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="pt-24 bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden">
        <img
          src="/images/project2.png"
          alt="Engineering"
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
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)" }}
          >
            About KOA Engineering
          </h1>
          <p
            className="text-xl text-white/90"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Building the future through structural excellence and uncompromised precision.
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────────── */}
      <Section variant="white" className="pt-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-koa-dark mb-6">Our Story</h2>
            <p className="text-gray-600 mb-5 font-sans text-lg leading-relaxed">
              In 2019, a spark of determination ignited a journey of excellence. With every project,
              every challenge, and every triumph, KOA Engineering has grown stronger. From blueprints
              to reality, our team embodies innovation, precision, and passion.
            </p>
            <p className="text-gray-600 font-sans text-lg leading-relaxed">
              We're not just building structures; we're shaping futures. With expertise in structural
              engineering, backed by certifications and a commitment to safety, we're crafting a legacy
              of excellence. Welcome to KOA Engineering: where vision meets reality.
            </p>
          </div>
          <div className="aspect-square bg-gray-100 relative overflow-hidden" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}>
            <img src="/images/project1.png" alt="Company History" className="w-full h-full object-cover" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} />
          </div>
        </div>
      </Section>

      {/* ── Mission / Vision ──────────────────────────────────────────────── */}
      <Section variant="dark" className="relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-koa-green rounded-full blur-[160px] opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-koa-green rounded-full blur-[160px] opacity-10 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="border-t-2 border-koa-accent pt-10 pb-8"
          >
            <p className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-5">Our Vision</p>
            <p className="font-display font-light italic text-white text-xl md:text-2xl leading-relaxed max-w-2xl">
              "At KOA Engineering, we're committed to pushing the boundaries of structural excellence,
              delivering innovative solutions that exceed expectations and shape the future of our industry."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border-t-2 border-koa-mid pt-10 pb-8"
          >
            <p className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-5">Our Mission</p>
            <p className="font-display font-light italic text-white text-xl md:text-2xl leading-relaxed max-w-2xl">
              "We're dedicated to providing top-notch engineering services with optimum competence,
              leveraging our expertise in structural engineering, project management, and risk mitigation
              to drive success for our clients. With a focus on safety, quality, and professionalism,
              we're building a reputation for excellence, one project at a time."
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ── Founder ───────────────────────────────────────────────────────── */}
      <Section id="leadership" variant="white" className="border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-koa-accent font-sans text-xs uppercase tracking-[0.3em] mb-10 text-center">Leadership</p>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-koa-green/10 rounded-tl-2xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-2 bg-koa-green rounded-full z-0" />
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/team_paul.jpg"
                  alt="Engr. Paul Abba Ojonugwa"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-koa-dark/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-6 z-20 bg-white border border-gray-100 shadow-lg rounded-xl px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-koa-green" />
                <span className="text-xs font-display uppercase tracking-widest text-koa-dark font-bold">Founder, Est. 2019</span>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <h2 className="text-3xl font-display font-bold text-koa-dark mb-1">
                Engr. Paul Abba Ojonugwa
              </h2>
              <p className="text-gray-500 font-sans text-sm mb-3">Founder & Lead Principal Structural Engineer</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {["COREN", "NSE", "HSE", "PMP", "CSRM", "HRM"].map((cert) => (
                  <div key={cert} className="flex items-center gap-1.5 text-xs font-display uppercase tracking-widest text-koa-green border border-koa-green/20 bg-koa-green/5 rounded-full px-3 py-1">
                    <BadgeCheck size={12} />
                    {cert}
                  </div>
                ))}
              </div>

              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-4">
                Engr. Paul Abba Ojonugwa is the founder and driving force behind KOA Engineering.
                A dedicated professional with a deep passion for structural excellence, he established
                the firm in 2019 with a clear vision to deliver world-class engineering solutions
                rooted in technical precision and innovation.
              </p>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-4">
                With expertise spanning structural engineering, soil mechanics, and highway engineering,
                he leads every project with a commitment to quality and forward-thinking solutions.
                His multidisciplinary approach ensures that each engagement from concept to completion
                is handled with the highest level of competence.
              </p>
              <p className="text-gray-600 font-sans text-lg leading-relaxed">
                Certified in HSE, PMP, CSRM, and HRM, and holding both NSE and COREN certifications,
                he leads a team committed to building a stronger tomorrow blending decades of
                experience with cutting-edge solutions to turn visions into reality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Affiliations ──────────────────────────────────────────────────── */}
      <Section variant="white" className="border-t border-gray-100">
        <h2 className="text-center text-3xl font-display font-bold text-koa-dark mb-12">
          Certifications &amp; Affiliations
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { icon: Award,     label: "ISO 9001"   },
            { icon: Building2, label: "COREN"      },
            { icon: Users,     label: "NSE Member" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-koa-dark">
              <Icon size={22} className="text-koa-green" />
              <span className="font-display font-bold text-lg">{label}</span>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}