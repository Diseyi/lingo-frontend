/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "primaryColor": "#99E3D9",
      "secondaryColor": "#2F3646",
    },
  },
  plugins: [],
}
