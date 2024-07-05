/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Grey: "hsl(0, 0%, 75%)",
        GreyishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
