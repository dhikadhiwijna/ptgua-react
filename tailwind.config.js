module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      width: {
        "half-screen": "50vh",
        "half-full-screen": "75vh",
      },
      height: {
        "half-screen": "50vh",
        "half-full-screen": "75vh",
      },
      backgroundImage: {
        "header-screen": "url('/assets/png/bg-about.png')",
      },
      colors: {
        "light-green": "#09ab0d",
        "light-white": "#DAF0F2",
        orange: "#ca6435",
        pink: "#D75995",
        gray: "#5e5e60",
        "dark-gray": "#2C2C2C",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
