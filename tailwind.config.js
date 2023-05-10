/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-primary': '#424458',
      'dark-second': '#363743',
      'success': '#66FFB6'
    },
    extend: {},
  },
  plugins: [],
}