/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato' : ["Lato", 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'home-bg': "url('./src/assets/home-bg.jpg')",
      },
      keyframes: {
        fade: {
          'from' : {
            // opacity: '0',
            backgroundColor: 'transparent',
            visibility: 'hidden',
            transform: 'translateY(-30px)'
          },
          'to' : {
            // opacity: '1',
            backgroundColor: 'black',
            visibility: 'visible',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fade: 'fade 0.5s ease-out'
      }
    },
  },
  plugins: [],
  
}

