/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'brand-blue': '#C6CEF0', // Light blue-purple center
          'brand-white': '#E5E1D8', // Off-white text
        },
      },
    },
    plugins: [],
  }