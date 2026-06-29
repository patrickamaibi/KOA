import { useState } from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/send_mail.php", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24 bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-koa-dark overflow-hidden mb-12">
        <img
          src="/images/project1.png"
          alt="Engineering Contact"
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
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
            style={{
              textShadow:
                "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(34,197,94,0.35)",
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Reach our engineering team to discuss your next project.
          </motion.p>
        </div>
      </section>

      <Section variant="white" className="py-12">
        <div className="grid md:grid-cols-2 gap-16">

          {/* ── Contact Form ──────────────────────────────────────────────── */}
          <motion.div {...fadeUp()}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-koa-dark">
              Send a Message
            </h2>
            <p className="text-gray-500 mb-10 font-sans">
              Tell us about your project and our team will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* ── Honeypot: hidden from humans, filled by bots ── */}
              <input
                name="website"
                type="text"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    required
                    maxLength={100}
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    name="last_name"
                    type="text"
                    required
                    maxLength={100}
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  maxLength={20}
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  maxLength={5000}
                  className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors resize-none bg-transparent"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-koa-green font-sans text-sm">
                  ✓ Your message has been sent. We will get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 font-sans text-sm">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href="mailto:info@koaengineering.com" className="underline">
                    info@koaengineering.com
                  </a>
                  .
                </p>
              )}

              <Button
                size="lg"
                className="w-full"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* ── Contact Details ───────────────────────────────────────────── */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-8">

            <div className="bg-koa-dark rounded-[4px] p-8 text-white">
              <h3 className="text-xl font-display font-bold mb-6 text-koa-accent uppercase tracking-widest text-sm">
                Headquarters
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-koa-accent shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-sans text-white/90 leading-relaxed">
                      No.1 Rockview Street
                      <br />
                      Ushafa Bwari, FCT Abuja
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-koa-accent shrink-0" size={18} />
                  <a
                    href="tel:+2347036026716"
                    className="font-sans text-white/90 hover:text-koa-accent transition-colors"
                  >
                    +234 703 602 6716
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-koa-accent shrink-0" size={18} />
                  <a
                    href="mailto:info@koaengineering.com"
                    className="font-sans text-white/90 hover:text-koa-accent transition-colors"
                  >
                    info@koaengineering.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="text-koa-accent shrink-0" size={18} />
                  <a
                    href="https://www.koaengineering.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-white/90 hover:text-koa-accent transition-colors"
                  >
                    www.koaengineering.com
                  </a>
                </div>
              </div>
            </div>

            {/* ── Map ───────────────────────────────────────────────────── */}
            <div className="w-full flex-1 min-h-64 bg-gray-200 rounded-[4px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d7.3290!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMzUuNCJOIDfCsDE5JzQ0LjQiRQ!5e0!3m2!1sen!2sng!4v1714316104085!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KOA Engineering Location"
              />
            </div>
          </motion.div>

        </div>
      </Section>
    </div>
  );
}