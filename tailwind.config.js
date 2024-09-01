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
        homeBg: "url('/homeBg.jpg')",
        portfolioBg: "url('/bg_projects.jpg')",
        journeyButtonBg: "url('/dmu_logo.png')",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveCanvas: {
          "0%": { filter: "blur(2px)", marginRight: "0", opacity: "0" },
          "100%": { filter: "blur(0)", marginRight: "-10vw", opacity: "1" },
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
        moveCanvas: "3s moveCanvas ease-in-out 1s forwards",
        infoElementIn: "1.3s elementIn ease 3s forwards",
        elementIn: "elementIn 1s forwards",
        parIn: "parIn 1s forwards",
        appear: " appear 1s forwards",
      },
    },
  },
  plugins: [],
};
