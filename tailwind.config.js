/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'inter': ['inter']
      },
      colors: {
        'dark-primary': '#424458',
        'dark-second': '#363743',
        'success': '#66FFB6'
      },
    },
  },
  plugins: [],
}