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
      sm: ["1.25rem", { lineHeight: "1.6", letterSpacing: "0.06em" }],
      md: ["1.5rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      lg: ["2rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      xl: ["2.5rem", { lineHeight: "48.48px" }],
      "2xl": ["3rem", { lineHeight: "60.48px" }],
      "3xl": ["4rem", { lineHeight: "80.48px" }],
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
      scale: {
        80: "0.8",
        60: "0.6",
        40: "0.4",
        30: "0.3",
      },
    },
  },
  variants: {
    scale: ["responsive"],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scale-80": {
          transform: "scale(0.8)",
        },
        ".scale-60": {
          transform: "scale(0.6)",
        },
        ".scale-40": {
          transform: "scale(0.4)",
        },
        ".scale-30": {
          transform: "scale(0.3)",
        },
        ".transform-origin-top-left": {
          "transform-origin": "top left",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
