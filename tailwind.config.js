/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-purple': '#C6CEF0', // The light purple center column
          'brand-beige': '#E5E1D8',  // The text color
        },
      },
    },
    plugins: [],
  }