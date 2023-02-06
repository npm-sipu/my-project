/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-col" : "#1497de",
        "secondary-col" : "#0a95f2"
      }
    },
  },
  plugins: [],
}
