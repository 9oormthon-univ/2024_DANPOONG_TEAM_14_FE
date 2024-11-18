/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cir_yellow_01: "#FFD332",
        cir_yellow_02: "#fff3cf",
        cir_blue_01: "#3284FF",
        cir_green_01: "#34a853",
        cir_black_01: "#212121",
        cir_black_02: "#707579",
        cir_black_03: "#e2e2e2",
        cir_white: "#ffffff",
      },
      fontFamily: {
        goorm: ["Goorm Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
