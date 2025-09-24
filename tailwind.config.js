/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "b2bit-blue": "#02274A",
        "b2bit-yellow": "#FDCF00",
      },
    },
  },
  plugins: [],
};
