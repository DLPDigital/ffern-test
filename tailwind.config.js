/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: {
          300: "#EB9466",
          400: "#D0865D",
          500: "#B35F32",
        },
      },
    },
  },
}
