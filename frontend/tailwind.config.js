/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter":['Roboto', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}