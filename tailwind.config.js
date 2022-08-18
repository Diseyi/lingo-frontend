/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "background": "#F2F3F4",
      "primaryColor": "#99E3D9",
      "secondaryColor": "#2F3646",
    },
  },
  plugins: [],
}
