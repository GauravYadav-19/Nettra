/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          400: "#34f5c5",
        },
        cyan: {
          400: "#3fdcff",
        },
      },
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
}