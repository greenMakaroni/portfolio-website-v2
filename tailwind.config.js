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
      keyframes: {
        'shortTransition': {
          '0%': { left: '0'},
          '100%': {  left: '-105vw' },
        },
        'moveCanvas': {
          '0%': {margin: '0'},
          '100%': {margin: '0 -15vw 0 0'}
        },
        'showNav': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        'elementIn': {
          '0%': {opacity: '0', margin: '0 0 0 -5vw'},
          '100%': {opacity: '1', margin: '0'}
        }
      },
      animation: {
        shortTransition: 'shortTransition ease-in-out 0.7s forwards',
        moveCanvas: '2s moveCanvas ease-in-out 1s forwards',
        showNav: 'showNav ease 0.3s forwards',
        infoElementIn: '1s elementIn ease 1.6s forwards',
        elementIn: 'elementIn 1s forwards'
      },
    },
  },
  plugins: [],
}

