/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main : '#1D1D1D',
        sec : '#F59115',
        bg : '#FFFFF7'
      }
    },
  },
  plugins: [],
}

