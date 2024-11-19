/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'custom': ['Sour Gummy', 'sans-serif']
    },
    extend: {
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    },
  },
  plugins: [require('daisyui'),],
}

