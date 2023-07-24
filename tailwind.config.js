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
          '0%': { left: '0'},
          '100%': {  left: '-105vw' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        moveCanvas: 'moveCanvas ease-in-out 0.7s forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

