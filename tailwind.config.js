/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'nav-blur': 'rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}