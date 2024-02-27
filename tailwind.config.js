/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};

      // Define custom height values
      for (let i = 100; i <= 1000; i += 50) {
        newUtilities[`.h-${i}px`] = {
          height: `${i}px`,
        };
      }

      // Define custom width values
      for (let i = 100; i <= 1000; i += 50) {
        newUtilities[`.w-${i}px`] = {
          width: `${i}px`,
        };
      }

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
