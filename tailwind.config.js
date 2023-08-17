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
        'moveCanvas': {
          '0%': {marginRight: '0'},
          '100%': {marginRight: '-15vw'}
        },
        'elementIn': {
          '0%': {opacity: '0', marginLeft: '-5vw'},
          '100%': {opacity: '1', marginLeft: '0'}
        }
      },
      animation: {
        moveCanvas: '2s moveCanvas ease-in-out 2s forwards',
        infoElementIn: '1s elementIn ease 3s forwards',
        elementIn: 'elementIn 1s forwards'
      },
    },
  },
  plugins: [
  ],
}

