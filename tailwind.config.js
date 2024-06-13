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
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "ui-sans-serif", "system-ui"],
      serif: ["var(--font-family-serif)", "Georgia", "ui-serif"],
      mono: ["var(--font-family-mono)", "SFMono-Regular"],
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
    extend: {},
  },
  plugins: [],
};
