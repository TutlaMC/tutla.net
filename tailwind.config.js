/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        muted: '#999999',
        accent: '#6366F1',
        border: '#1A1A1A',
        hover: '#1F1F1F',
        code: '#111111',
      }
    },
  },
  plugins: [],
}
