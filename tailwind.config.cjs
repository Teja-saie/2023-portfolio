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
        'glassmorph':" rgba(0, 0, 0, 0.32)"
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
    },
    animation: {
      fade: 'fadein 1s ease-in-out',
    },
    backgroundImage: {
      'hero-pattern': "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80')",
    }
   },
  },
  plugins: [],
}
