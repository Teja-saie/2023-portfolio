/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors:{
        "first":"#FFE5D9",
        'second':'#F9D9C9',
        'third':'#E8C6B7',
        'fourth':'#F1E1D9',
        'fifth':'#C6D8D3',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
    },
    animation: {
      fade: 'fadein 1s ease-in-out',
    }
   },
  },
  plugins: [],
}
