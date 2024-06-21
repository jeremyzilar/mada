module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_pages/**/*.md",
    "./*.md",
    "./*.html",
    "./assets/css/**/*.scss",
  ],
  theme: {
    fontSize: {
      sm: ["0.7rem", "23.94px"],
      base: ["0.875rem", "23.94px"],
      md: ["0.875rem", "23.94px"],
      lg: ["1.125rem", "30.78px"],
      xl: ["1.25rem", "25.28px"],
      "2xl": ["1.5rem", "29.09px"], // 24px
      "3xl": "2rem",
      "4xl": ["2.5rem", "48.48px"],
      "5xl": "3.052rem",
    },
    fontFamily: {
      sans: [
        "Libre Franklin",
        "Helvetica",
        "Arial",
        "ui-sans-serif",
        "system-ui",
      ],
      serif: ["var(--font-family-serif)", "Georgia", "ui-serif"],
      mono: ["DM Mono", "SFMono-Regular", "monospace"],
      display: [
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "ui-sans-serif",
        "system-ui",
      ],
      body: [
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "ui-sans-serif",
        "system-ui",
      ],
    },
    extend: {
      screens: {
        card: "160px",
        "card-lg": "240px",
        mobile: "320px",
        "mobile-lg": "480px",
        tablet: "640px",
        "tablet-lg": "880px",
        desktop: "1024px",
        "desktop-lg": "1256px",
        widescreen: "1400px",
      },
    },
  },
  plugins: [],
};
