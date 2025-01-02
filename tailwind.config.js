const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomInRight: {
          "0%": { opacity: 0, transform: "scale(0.5) translateX(-100%)" },
          "100%": { opacity: 1, transform: "scale(1) translateX(0)" },
        },
        zoomOutUp: {
          "0%": { opacity: 1, transform: "scale(1) translateY(0)" },
          "100%": { opacity: 0, transform: "scale(0.5) translateY(-100%)" },
        },
      },
      animation: {
        zoomInRight: "zoomInRight .5s ease-out forwards", // 1 second for opening
        zoomOutUp: "zoomOutUp .5s ease-in forwards", // 1 second for closing
      },
    },
  },
  
  plugins: [
    require('daisyui'),
  ],
});
