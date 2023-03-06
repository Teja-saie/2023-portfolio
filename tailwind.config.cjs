/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors:{
        "Main_black":"#191825",
        'second_blue':'#865DFF',
        'third':'#E384FF',
        'fourth':'#FFA3FD',
        'fifth':'#E9E8E8',
        'glassmorph':" rgba( 255, 255, 255, 0.1 )"
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
