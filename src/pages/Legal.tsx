import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";

export function Legal() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO 
        title="Legal & Policies - KOA Engineering"
        description="Privacy policy, terms of service, and health & safety standards for KOA Engineering."
      />
      <section className="relative py-32 bg-koa-dark overflow-hidden mb-12">
        <img src="/images/webp/project2.webp" alt="Legal & Policies" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-koa-green/60 to-koa-dark/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Legal & Policies</h1>
        </div>
      </section>

      <Section variant="white" className="max-w-3xl mx-auto pt-0">
        <div className="space-y-12 font-sans text-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">1. Privacy Policy</h2>
            <p className="mb-4">
              At KOA Engineering, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
            </p>
            <p>
              We only collect data necessary to provide our structural and civil engineering consulting services. We do not sell your personal information to third parties.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">2. Terms of Service</h2>
            <p className="mb-4">
              By using our website, you agree to these terms. All content provided on the KOA Engineering website is for informational purposes only. Engineering specifications and calculations provided here are illustrative and should not be used for actual construction without consultation.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">3. Health & Safety Policy</h2>
            <p className="mb-4">
              KOA Engineering is committed to maintaining the highest standards of health and safety in all our operations. We adhere strictly to COREN guidelines and international safety standards in every structural design we produce.
            </p>
          </section>
        </div>
      </Section>
    </div>
  );
}
