/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        muted: '#667085',
        navy: '#08345a',
        'navy-deep': '#061b30',
        gold: '#d98a21',
        leaf: '#2f7d62',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 24, 40, 0.12)',
        glow: '0 18px 40px rgba(217, 138, 33, 0.24)',
      },
    },
  },
  plugins: [],
}
