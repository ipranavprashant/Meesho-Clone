/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "400px",
        120: "700px",
        1200: "1200px",
      },
      spacing: {
        0.25: "1px", // this is for height of div just below the navbar
      },
    },
  },
  plugins: [],
};
