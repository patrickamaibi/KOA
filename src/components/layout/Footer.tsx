import { Link } from "react-router-dom";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-koa-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/logo.png"
              alt="KOA Engineering"
              className="h-24 md:h-32 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 font-sans max-w-sm mb-8">
              Precision. Innovation. Excellence. Delivering world-class structural and civil engineering solutions across the globe.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-koa-green hover:text-white transition-all">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-koa-green hover:text-white transition-all">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-koa-green hover:text-white transition-all">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-koa-green hover:text-white transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-koa-green hover:text-white transition-all">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@KOAENGINEERING"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 font-sans text-gray-400">
              <li><Link to="/about" className="hover:text-koa-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-koa-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-koa-accent transition-colors">Projects</Link></li>
              <li><Link to="/testimonials" className="hover:text-koa-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/about#leadership" className="hover:text-koa-accent transition-colors">Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 font-sans text-gray-400">
              <li><Link to="/legal" className="hover:text-koa-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-koa-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="hover:text-koa-accent transition-colors">Health &amp; Safety</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-gray-500 font-sans flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} KOA Engineering. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Designed &amp; developed by{" "}
            <a
              href="https://www.discoverytechhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-koa-accent transition-colors font-medium"
            >
              DiscoveryTech Hub
            </a>
          </p>
          <div className="hidden md:block">
            <span>COREN Registered</span>
          </div>
        </div>

      </div>
    </footer>
  );
}