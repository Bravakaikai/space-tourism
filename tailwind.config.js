module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "375px",
      // => @media (min-width: 576px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        themeBg: "var(--background)",
        themeText: "var(--text)",
        subBg: "var(--input-background)",
        light: "#40a9ff",
        hover: "rgb(100, 100, 100, 0.2)",
        mask: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
