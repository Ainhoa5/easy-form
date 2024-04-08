/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'e8eeee': '#e8eeee',
        },
      },
    },
  },
  plugins: [],
}
