/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#14131B",
        "very-dark-grey": "#18171F",
        "dark-grey": "#24232C",
        grey: "#817D92",
        "almost-white": "#E6E5EA",
        "neon-green": "#A4FFAF",
        yellow: "#F8CD65",
        orange: "#FB7C58",
        red: "#F64A4A",
      },
      fontFamily: {
        "jetbrains-mono": "JetBrains Mono",
      },
      backgroundImage: {
        checkmark: "url('/checkmark.svg')",
      },
    },
  },
  plugins: [],
};
