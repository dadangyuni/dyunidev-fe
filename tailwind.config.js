/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: "#42C2FF",
        dark:"#000000",
        textPrimary:"#42C2FF",
        textMain:"#6E6E6E",
        yellowOne: "#FFF27E",
        bgWhite:"#FFFFFF",
        bgLight:'#EFFFFD',
        borderLight:"#F0F0F0"
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}
