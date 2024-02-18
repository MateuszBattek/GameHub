/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      }
    }
  },
  plugins: [],
}

