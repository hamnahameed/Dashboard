/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: '#1697c7', // Default shade
          '50': '#e5f1f9',
          '100': '#b3d2e6',
          '200': '#80b3d3',
          '300': '#4d94c0',
          '400': '#267fb3',
          '500': '#1697c7', // Same as DEFAULT, just for completeness
          '600': '#0075a6',
          '700': '#00597d',
          '800': '#003c54',
          '900': '#001e2b',
        },
      }
    },
   
  },
  plugins: [],
}