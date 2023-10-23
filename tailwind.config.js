/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme: "#00737F",
        themeText1:"#000",
        themeText2:"#333",
        themeBg:'#F2F2F2',
      }
    },
  },
  plugins: [],
}