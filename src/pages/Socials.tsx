import { useEffect, useState, type ReactElement } from "react";
import { Helmet } from "react-helmet-async";

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: ReactElement;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Icons = {
  instagram: (
    <svg {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg {...iconProps}>
      <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  linkedin: (
    <svg {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="11" y1="10" x2="11" y2="17" />
    </svg>
  ),
  youtube: (
    <svg {...iconProps}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg {...iconProps}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5c.36 0 .7.05 1 .14" />
      <path d="M14 3c0 2.5 2 4.5 4.5 4.5" />
    </svg>
  ),
  globe: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
};

const LINKS: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@koa.engineering",
    href: "https://www.instagram.com/koa.engineering/",
    icon: Icons.instagram,
  },
  {
    label: "LinkedIn",
    handle: "KOA Engineering",
    href: "https://www.linkedin.com/company/koaengineering",
    icon: Icons.linkedin,
  },
  {
    label: "Facebook",
    handle: "KOA Engineering",
    href: "https://www.facebook.com/share/1Bf6UNfjvq/?mibextid=wwXIfr",
    icon: Icons.facebook,
  },
  {
    label: "YouTube",
    handle: "@KOAENGINEERING",
    href: "https://www.youtube.com/@KOAENGINEERING",
    icon: Icons.youtube,
  },
  {
    label: "TikTok",
    handle: "@koaengineering",
    href: "https://www.tiktok.com/@koaengineering",
    icon: Icons.tiktok,
  },
  {
    label: "Website",
    handle: "koaengineering.com",
    href: "https://koaengineering.com/",
    icon: Icons.globe,
  },
];

export function Socials() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="koa-socials-page">
      <Helmet>
        <title>Connect With Us | KOA Engineering</title>
      </Helmet>
      <style>{`
        .koa-socials-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          font-family: 'DM Sans', -apple-system, sans-serif;
        }
        .koa-socials-page h1 {
          font-family: 'Cormorant Garamond', serif;
        }
        .koa-bg-img {
          position: absolute;
          inset: 0;
          background-image: url(/images/webp/bgkoa.webp);
          background-size: cover;
          background-position: center;
          filter: blur(6px) brightness(0.4) saturate(1.05);
          animation: koa-kenburns 16s ease-in-out infinite;
          z-index: 0;
        }
        .koa-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,31,23,0.55) 0%, rgba(13,31,23,0.85) 100%);
          z-index: 1;
        }
        @keyframes koa-kenburns {
          0%, 100% { transform: scale(1.15) translate(0, 0); }
          50% { transform: scale(1.25) translate(-1.5%, -1%); }
        }
        @keyframes koa-float-a { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(3deg); } }
        @keyframes koa-float-b { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(-3deg); } }
        @keyframes koa-float-logo { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes koa-fadeup { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .koa-link-card {
          transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
        }
        .koa-link-card:hover {
          transform: translateY(-3px);
          background-color: rgba(168,197,176,0.16) !important;
          border-color: rgba(168,197,176,0.4) !important;
        }
        .koa-link-card:hover .koa-icon-badge {
          background-color: var(--koa-mid, #2A7A54) !important;
        }
      `}</style>

      <div className="koa-bg-img" />
      <div className="koa-bg-overlay" />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: "140px 20px 48px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 420 }}>
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 40,
              opacity: loaded ? 1 : 0,
              animation: loaded ? "koa-fadeup 0.6s ease forwards" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--koa-accent, #A8C5B0)",
                margin: "0 0 8px",
                fontWeight: 500,
              }}
            >
              Connect With Us
            </p>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              Pushing Boundaries. Building Futures.
            </h1>
          </div>

          {/* Link cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="koa-link-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  border: "1px solid rgba(168,197,176,0.25)",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 16,
                  padding: "14px 18px",
                  opacity: loaded ? 1 : 0,
                  animation: loaded
                    ? `koa-fadeup 0.5s ease ${0.15 + i * 0.07}s forwards`
                    : "none",
                }}
              >
                <div
                  className="koa-icon-badge"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    backgroundColor: "rgba(42,122,84,0.75)",
                    color: "#ffffff",
                    flexShrink: 0,
                    animation: `${
                      i % 2 === 0 ? "koa-float-a" : "koa-float-b"
                    } ${3.5 + (i % 3) * 0.6}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    transition: "background-color 0.25s ease",
                  }}
                >
                  {link.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15.5,
                      fontWeight: 500,
                      color: "#ffffff",
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12.5,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {link.handle}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(168,197,176,0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>
      </div>
    </div>
  </div>
  );
}