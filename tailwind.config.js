module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
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
