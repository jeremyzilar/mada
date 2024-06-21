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
      heading: ["2.5rem", { lineHeight: "48.48px" }],
      body: ["1.5rem", { lineHeight: "37.68px", letterSpacing: "0.02em" }],
      "body-bold": [
        "1.5rem",
        { lineHeight: "37.92px", letterSpacing: "0.02em" },
      ],
      caption: ["1.125rem", { lineHeight: "30.78px", letterSpacing: "0.06em" }], // 18px / 171
      "heading-mobile": ["1.5rem", { lineHeight: "29.09px" }],
      "body-mobile": [
        "1rem",
        { lineHeight: "25.28px", letterSpacing: "0.02em" },
      ],
      "body-bold-mobile": [
        "1rem",
        { lineHeight: "25.28px", letterSpacing: "0.02em" },
      ],
      "caption-mobile": [
        "0.875rem",
        { lineHeight: "23.94px", letterSpacing: "0.06em" },
      ],
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
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      "body-regular": "0.157em",
      "body-bold": "0.158em",
      caption: "0.171em",
      "body-regular-mobile": "0.158em",
      "body-bold-mobile": "0.158em",
      "caption-mobile": "0.171em",
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
