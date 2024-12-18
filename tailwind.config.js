/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
        '180': '180deg',
        '90': '90deg',
        '270': '270deg',
        '0': '0deg',
      },
    },
  },
  plugins: [],
}

