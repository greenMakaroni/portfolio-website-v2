/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Open Sans': ['Open Sans'],
      'Geologica': ['Geologica'],
    },
    extend: {
      backgroundImage: {
        'eduBg': "url('/eduBg.jpg')",
        'homeBg': "url('/homeBg.jpg')",
        'portfolioBg': "url('/portfolioBg.jpg')"
      },
      keyframes: {
        'moveCanvas': {
          '0%': {filter: "blur(2px)", marginRight: '0', opacity: '0'},
          '100%': {filter: "blur(0)", marginRight: '-15vw', opacity: '1'}
        },
        'elementIn': {
          '0%': {filter: "blur(2px)", opacity: '0', marginLeft: '-5vw'},
          '100%': {filter: "blur(0)", opacity: '1', marginLeft: '0'}
        }
      },
      animation: {
        moveCanvas: '4s moveCanvas ease-in-out 1s forwards',
        infoElementIn: '1.3s elementIn ease 2s forwards',
        elementIn: 'elementIn 1s forwards'
      },
    },
  },
  plugins: [
  ],
}

