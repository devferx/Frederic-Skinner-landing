module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2C74FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bodoni: ["Bodoni Moda", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
