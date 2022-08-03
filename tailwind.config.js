/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      light: "400",
      normal: "500",
      bold: "700",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        gray: {
          100: "hsl(0, 0%, 98%)",
          150: "hsl(0, 0%, 95%)",
          400: "hsl(0, 0%, 48%)",
        },
        black: "hsl(0, 0%, 0%)",
        cyan: {
          400: "hsl(176, 50%, 47%)",
          800: "hsl(176, 72%, 28%)",
        },
      },
    },
  },
  plugins: [],
};
