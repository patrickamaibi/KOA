// src/components/ui/CookieConsent.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("koa_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("koa_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("koa_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-koa-dark border-t border-white/10 shadow-lg">
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/80 font-sans text-sm leading-relaxed max-w-2xl">
          We use cookies to improve your experience on our site and analyze traffic. By continuing, you agree to our{" "}
          <Link to="/legal" className="text-koa-accent underline hover:text-white transition-colors">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 text-sm font-display uppercase tracking-widest text-white/70 hover:text-white border border-white/20 rounded-sm transition-colors duration-300"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-display uppercase tracking-widest text-koa-dark bg-koa-accent hover:bg-white rounded-sm transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
