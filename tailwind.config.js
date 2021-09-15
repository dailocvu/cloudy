module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#010230",
      },
      spacing: {
        98: "40rem",
        99: "45rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
