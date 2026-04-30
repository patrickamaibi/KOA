/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ── Colours ──────────────────────────────────────────────────────────
      // All values are hardcoded hex — no CSS variable dependencies.
      // CSS vars in colors[] silently break when the :root block is missing
      // or loaded out of order; hardcoded values always resolve correctly.
      colors: {
        "koa-dark":   "#0D1F17",   // near-black forest — nav, CTA sections, dark bg
        "koa-green":  "#1B4D35",   // primary brand green — headings, borders
        "koa-mid":    "#2A7A54",   // mid green — hover states, active elements
        "koa-accent": "#A8C5B0",   // pale sage — hero subtitles, stat labels
        "koa-steel":  "#8C9BA5",   // brushed steel — secondary text, dividers
        "koa-light":  "#F4F7F5",   // near-white w/ green tint — light section bg
      },

      // ── Typography ───────────────────────────────────────────────────────
      // Cormorant Garamond: editorial gravitas for display/headings (font-display)
      // DM Sans: clean legibility for body copy and UI (font-sans)
      // Both loaded via Google Fonts in index.css.
      // Inter/Montserrat removed — too generic for a premium engineering brand.
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:    ["'DM Sans'", "system-ui", "sans-serif"],
      },

      // ── Background images / gradients ────────────────────────────────────
      backgroundImage: {
        // Hero overlay — deep left-to-transparent, directional (105° not 135°
        // so the bright right edge doesn't fight the slide content on the left)
        "hero-gradient":
          "linear-gradient(105deg, rgba(13,31,23,0.92) 0%, rgba(13,31,23,0.65) 50%, rgba(13,31,23,0.20) 100%)",

        // Service card icon hover bg + active filter buttons
        "koa-gradient":
          "linear-gradient(135deg, #1B4D35 0%, #2A7A54 100%)",

        // Decorative strip / shimmer accent
        "koa-shimmer":
          "linear-gradient(90deg, #0D1F17 0%, #1B4D35 40%, #2A7A54 60%, #0D1F17 100%)",

        // CTA / dark-section background (replaces solid koa-dark for depth)
        "koa-dark-gradient":
          "linear-gradient(160deg, #0D1F17 0%, #112a1e 100%)",

        // Navbar — slightly more opaque than hero to keep links legible on scroll
        "nav-gradient":
          "linear-gradient(135deg, rgba(13,31,23,0.97) 0%, rgba(27,77,53,0.97) 100%)",
      },

      // ── Shadows ──────────────────────────────────────────────────────────
      boxShadow: {
        // Primary button + service icon hover glow
        "glow-green":  "0 0 24px rgba(42,122,84,0.45), 0 4px 16px rgba(27,77,53,0.30)",

        // Hero image inner depth (inset on the overlay div, not the img)
        "hero-glow":   "inset 0 -120px 80px rgba(13,31,23,0.80)",

        // Card resting state
        "card":        "0 4px 24px rgba(13,31,23,0.10)",

        // Card hovered state
        "card-hover":  "0 12px 40px rgba(13,31,23,0.18)",
      },

    },
  },
  plugins: [],
};