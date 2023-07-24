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
        moveCanvas: {
          '0%': { left: '0' },
          '100%': { left: '15vw'},
        }
      },
      animation: {
          moveCanvas: '1s ease-in-out 3s forwards',
      }
    },
  },
  plugins: [],
}

