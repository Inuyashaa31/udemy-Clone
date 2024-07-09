/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        "primary": "#ffffff",
        "secondary": "#a435f0",
        "tertiary": "#2d2f31"
      }
    },
    screens: {
  
      xl: {'max': '3000px'},

      sm: {'max': '1000px'},
      
    }
  },
  plugins: [],
}