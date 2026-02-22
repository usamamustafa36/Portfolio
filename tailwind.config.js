/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        navy: {
          950: '#020B18',
          900: '#071020',
          800: '#0B1426',
          700: '#0F1E36',
          600: '#132038',
          500: '#1a2d4a',
          400: '#1e3a5f',
          300: '#2d5282',
          200: '#4a7ab5',
          100: '#90bbee',
          50: '#d6e8ff',
        },
        gold: {
          950: '#1A0F00',
          900: '#3D2A00',
          800: '#5C3F00',
          700: '#8B6914',
          600: '#A07820',
          500: '#C9A84C',
          400: '#D4B45A',
          300: '#E0C580',
          200: '#EDD9A3',
          100: '#F5EBC6',
          50: '#FBF6E7',
        },
        // Keep beige for compatibility
        beige: {
          50: '#faf9f7',
          100: '#f5f5dc',
          200: '#e6e6d3',
          300: '#d2b48c',
          400: '#c8b99c',
          500: '#d4c5a9',
          600: '#c4b5a0',
          700: '#b8a892',
          800: '#a8957a',
          900: '#9b8a6f',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-gold': 'glowGold 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowGold: {
          '0%': { boxShadow: '0 0 5px rgba(201,168,76,0.2), 0 0 10px rgba(201,168,76,0.15)' },
          '100%': { boxShadow: '0 0 15px rgba(201,168,76,0.5), 0 0 30px rgba(201,168,76,0.3), 0 0 45px rgba(201,168,76,0.15)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
