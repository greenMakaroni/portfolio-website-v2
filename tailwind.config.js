/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Open Sans": ["Open Sans"],
      Geologica: ["Geologica"],
    },
    extend: {
      backgroundImage: {
        eduBg: "url('/bg_edu.jpg')",
        homeBg: "url('/homeBg.jpg')",
        portfolioBg: "url('/bg_projects.jpg')",
        journeyButtonBg: "url('/dmu_logo.png')",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        arrowBounce: {
          "0%": { marginLeft: "1rem" },
          "50%": { marginLeft: "2rem" },
          "100%": { marginLeft: "1rem" },
        },
        moveCanvas: {
          "0%": { filter: "blur(2px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        elementIn: {
          "0%": { filter: "blur(2px)", opacity: "0", marginLeft: "-5vw" },
          "100%": { filter: "blur(0)", opacity: "1", marginLeft: "0" },
        },
        parIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        arrowBounce: "1s arrowBounce ease-in-out infinite",
        moveCanvas: "1s moveCanvas ease-in-out 1s forwards",
        infoElementIn: "1s elementIn ease 1s forwards",
        elementIn: "elementIn 1s forwards",
        parIn: "parIn 1s forwards",
        appear: " appear 1.5s forwards",
      },
    },
  },
  plugins: [],
};
