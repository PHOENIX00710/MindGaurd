/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-1": "#477be4",
        "blue-2": "#0693e3",
        "gray-hover":"#262829"
      },
      textColor: {
        "blue-1": "#477be4",
        "blue-2": "#0693e3",
      },
      boxShadow: {
        "main-svg": "0px 0px 2px 4px #0692e3da, 0px 0px 2px 4px #0692e3c7, 0p 0px 2px 4px #0692e3a6, 0px 0px 2px 4px #0692e38c; "
      },
    },
  },
  plugins: [],
}