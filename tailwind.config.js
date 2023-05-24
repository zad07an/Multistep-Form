/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2563EB",
        "secondary-blue": "#397EEE",
        "primary-green": "#22C55E",
      },
      dropShadow: {
        "primary-green-shadow": "0 0 10px #22C55E",
      },
    },
  },
  plugins: [],
};
