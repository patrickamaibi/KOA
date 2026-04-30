import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-24 bg-white">
      <SEO
        title="Contact Us - KOA Engineering"
        description="Get in touch with KOA Engineering to discuss your next visionary structural or civil engineering project."
      />

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
            Contact Us
          </h1>
          <p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            style={{ textShadow: "0 0 24px rgba(255,255,255,0.3)" }}
          >
            Get in touch with our engineering team.
          </p>
        </div>
      </section>

      <Section variant="white" className="py-12">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-koa-dark">Send a Message</h2>
            <p className="text-black mb-10 font-sans">Reach out to our engineering team to discuss your next visionary project.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-display uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-200 py-2 focus:border-koa-green outline-none transition-colors resize-none"></textarea>
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="bg-gray-50 p-12 rounded-[4px] flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold mb-8">Headquarters</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 text-black">
                <MapPin className="text-koa-green shrink-0 mt-1" />
                <p className="font-sans">120 Engineering Blvd,<br />Innovation District,<br />Abuja, Nigeria</p>
              </div>
              <div className="flex items-center gap-4 text-black">
                <Phone className="text-koa-green shrink-0" />
                <p className="font-sans">+234 800 KOA ENGR</p>
              </div>
              <div className="flex items-center gap-4 text-black">
                <Mail className="text-koa-green shrink-0" />
                <p className="font-sans">contact@koaengineering.com</p>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-[4px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126078.36153641772!2d7.398012643534571!3d9.054366629910545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714316104085!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}