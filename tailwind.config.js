/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg":
          "linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        "scissors-gradient":
          "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "rock-gradient":
          "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "lizard-gradient":
          "radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        "spock-gradient":
          "radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
        "triangle-gradient": ' url("../src/assets/bg-triangle.svg")',
      },
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },

      boxShadow: {
        customShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.20)",
        glowRadial: `
          0 0 5px 40px rgba(255, 255, 255, 0.07),
          0 0 5px 75px rgba(255, 255, 255, 0.05),
          0 0 5px 105px rgba(255, 255, 255, 0.03)
        `,
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
