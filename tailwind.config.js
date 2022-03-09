module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBackground: "var(--background)",
        themeText: "var(--text)",
      },
    },
  },
  plugins: [],
};
