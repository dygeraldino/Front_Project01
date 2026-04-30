/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2F1D73',
        night: '#251659',
        mist: '#D9A3C0',
        aurora: '#BD6DF2',
        plasma: '#4634BF',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(189, 109, 242, 0.5)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
