/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#d946ef',
          600: '#c026d3',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.25)',
      },
    },
  },
  plugins: [],
}

