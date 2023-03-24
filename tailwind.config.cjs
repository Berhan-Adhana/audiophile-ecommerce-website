/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#D87D4A",
        accent: "#fbaf85",
        secondary: "#101010",
        lightGrey: "#F1F1F1",
        veryLightGrey: "#FAFAFA",
        white: "#fff",
        black: "#000",
        background: "#0E0E0E",
        bodyBg: "#F2F2F2",
      },
      screens: {
        xs: "375px",
      },
      backgroundImage: (theme) => ({
        heroDesktop: "url('./src/assets/home/desktop/image-hero.jpg')",
        heroMobile: "url('./src/assets/home/mobile/image-header.jpg')",
        heroTablet: "url('./src/assets/home/tablet/image-header.jpg')",
        circularPattern: "url('./src/assets/home/desktop/pattern-circles.svg')",
      }),
      boxShadow: {
        checkoutShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
