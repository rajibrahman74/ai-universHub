/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a4e043",

          secondary: "#3e08a3",

          accent: "#e2c51d",

          neutral: "#3A2541",

          "base-100": "#E5ECF0",

          info: "#91B6E3",

          success: "#7CE4BA",

          warning: "#AB8207",

          error: "#E96D83",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};