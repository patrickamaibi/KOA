import { Section } from "../components/ui/Section";
import { SEO } from "../components/ui/SEO";

export function Legal() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Legal & Policies - KOA Engineering"
        description="Privacy policy, terms of service, cookie policy, and health & safety standards for KOA Engineering. NDPR compliant."
        url="https://koaengineering.com/legal"
      />

      <section className="relative py-32 bg-koa-dark overflow-hidden mb-12">
        <img src="/images/webp/KOAOG1.webp" alt="Legal & Policies" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-koa-green/60 to-koa-dark/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Legal & Policies</h1>
         
        </div>
      </section>

      <Section variant="white" className="max-w-3xl mx-auto pt-0">
        <div className="space-y-12 font-sans text-gray-700 leading-relaxed">

          {/* 1. Privacy Policy */}
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">1. Privacy Policy</h2>
            <p className="mb-4">
              KOA Engineering is committed to protecting your personal data and respecting your privacy in full compliance with the Nigeria Data Protection Regulation (NDPR) 2019 and the Nigeria Data Protection Act (NDPA) 2023.
            </p>
            <p className="mb-4">
              We collect only the data necessary to provide our services including name, email address, phone number, and project enquiry details submitted via our contact form. Technical data such as IP address and browser type may also be collected automatically via server logs.
            </p>
            <p className="mb-4">
              We use your data solely to respond to enquiries, deliver our engineering services, and improve our website. We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
            <p className="mb-4">
              Contact form submissions are retained for a maximum of 24 months. Project correspondence may be retained for up to 7 years in accordance with Nigerian business record-keeping requirements.
            </p>
            <p>
              Under the NDPA 2023, you have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at{" "}
              <a href="mailto:info@koaengineering.com" className="text-koa-green underline">info@koaengineering.com</a>.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          {/* 2. Terms of Service */}
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">2. Terms of Service</h2>
            <p className="mb-4">
              By accessing and using koaengineering.com, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of this website.
            </p>
            <p className="mb-4">
              All content on this website is provided for informational purposes only. Engineering specifications and project details shown are illustrative of completed works and should not be replicated or relied upon for construction without independent professional consultation. KOA Engineering accepts no liability for decisions made based solely on information published here.
            </p>
            <p className="mb-4">
              You agree not to use this website for any unlawful purpose, attempt unauthorized access to any part of the site, or reproduce any content without prior written permission from KOA Engineering.
            </p>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of the Federal Capital Territory, Abuja.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          {/* 3. Cookie Policy */}
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">3. Cookie Policy</h2>
            <p className="mb-4">
              This website uses cookies small text files stored on your device to ensure the site functions correctly and to remember your preferences. We use essential cookies for session management and form submissions, and preference cookies to store your cookie consent choice.
            </p>
            <p className="mb-4">
              We do not currently use advertising or tracking cookies.
            </p>
            <p>
              You can withdraw consent at any time by clearing your browser's local storage or adjusting your browser settings. Note that disabling cookies may affect certain website features.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          {/* 4. Health & Safety Policy */}
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">4. Health & Safety Policy</h2>
            <p className="mb-4">
              KOA Engineering is committed to maintaining the highest standards of health, safety, and environmental protection across all project sites and office operations. The safety of our staff, clients, subcontractors, and the public is non-negotiable.
            </p>
            <p className="mb-4">
              All operations adhere to COREN guidelines, NSE professional standards, ISO 45001:2018 Occupational Health and Safety Management, the Nigerian Building Code, and Environmental Impact Assessment (EIA) requirements where applicable.
            </p>
            <p className="mb-4">
              Site safety protocols include mandatory Personal Protective Equipment (PPE), regular risk assessments, toolbox talks before operations commence, and strict excavation and confined space entry procedures. We operate a zero-tolerance policy for unsafe working practices.
            </p>
            <p>
              Any safety incident or near-miss on a KOA Engineering project site must be reported immediately to the Site Supervisor or Project Manager. All incidents are investigated and documented to continuously improve our safety management systems.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website including text, images, project photography, engineering drawings, logos, and design elements is the exclusive intellectual property of KOA Engineering or its licensed contributors.
            </p>
            <p>
              Unauthorized reproduction or distribution of any content without prior written consent is strictly prohibited and may constitute an infringement of Nigerian copyright law. For media or licensing inquiries, contact{" "}
              <a href="mailto:info@koaengineering.com" className="text-koa-green underline">info@koaengineering.com</a>.
            </p>
          </section>

          <div className="h-px w-full bg-gray-200"></div>

          {/* 6. Contact & Data Requests */}
          <section>
            <h2 className="text-2xl font-display font-bold text-koa-dark mb-4">6. Contact & Data Requests</h2>
            <p className="mb-4">
              For questions about these policies, to exercise your data rights, or to report a compliance concern, please contact us:
            </p>
            <p className="mb-2"><strong className="text-koa-dark">KOA Engineering</strong></p>
            <p className="mb-2">No. 1 Rockview Street, Ushafa Bwari, FCT Abuja, Nigeria</p>
            <p className="mb-2">
              <a href="mailto:info@koaengineering.com" className="text-koa-green underline">info@koaengineering.com</a>
            </p>
            <p className="mb-2">
              <a href="tel:+2347036026716" className="text-koa-green underline">+234 703 602 6716</a>
            </p>
            <p className="mb-8">RC Number: 9626084</p>
            <p className="text-sm text-gray-400">
              KOA Engineering reserves the right to update these policies at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.
            </p>
          </section>

        </div>
      </Section>
    </div>
  );
}