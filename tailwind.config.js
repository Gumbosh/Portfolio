/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1439px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "575px" },
      xs: { max: "359px" },
    },
    extend: {
      fontFamily: {
        grotesk: ["'Schibsted Grotesk', sans-serif, monospace"],
      },
      backgroundImage: {
        hero: "url('./src/assets/images/header-bg.png')",
        "cv-photo": "url(./src/assets/images/cv-photo.png)",
      },
      colors: {
        "custom-white": "#F1F1EF",
        "custom-dark-grey": "#101010",
        "custom-grey": "#171717",
        "custom-light-grey": "#ADADAD",
        "custom-purple": "#5D4FEE",
      },
    },
  },
  plugins: [],
};
