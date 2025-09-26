/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{html,js,vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],


}