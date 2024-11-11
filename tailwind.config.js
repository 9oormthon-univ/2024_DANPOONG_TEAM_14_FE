/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow_01: "#FFD332",
        yellow_02: "#fff3cf",
        blue_01: "#3284FF",
        green_01: "#34a853",
        black_01: "#212121",
        black_02: "#707579",
        black_03: "#e2e2e2",
        white_bg: "#ffffff",
      },
    },
  },
  plugins: [],
}
