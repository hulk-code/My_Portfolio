const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-rgb":
          "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
      },
      backgroundSize: {
        "200%": "200%",
      },
      keyframes: {
        rgbEffect: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
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
        rgbEffect: "rgbEffect 5s infinite linear",
        zoomInRight: "zoomInRight .5s ease-out forwards", // Animation for opening
        zoomOutUp: "zoomOutUp .5s ease-in forwards", // Animation for closing
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin for pre-designed components
  ],
});
