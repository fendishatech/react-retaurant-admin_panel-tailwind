/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      flexBasis: {
        20: "20%",
        80: "80%",
      },
      height: {
        90: "90%",
      },
      colors: {
        sideMenuBg: "#181818",
        bodyBg: "#ffff",
        titleColor: "#2b2b2b",
        hoverColor: "#262626",
        textColor: "#e2e2e2",
        colorOne: "#f6eff4",
        colorTwo: "#fbf0ef",
        colorThree: "#f1fcf0",
        colorFour: "#fcf8ef",
        gradient: "linear-gradient(rgb(56,194,166),rgb(124,83,151))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".f-j-between-a-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      });
    },
  ],
};
