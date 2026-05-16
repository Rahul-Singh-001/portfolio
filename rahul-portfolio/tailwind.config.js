/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'void': '#030308',
        'surface': '#0d0d1a',
        'panel': '#12121f',
        'border': '#1e1e35',
        'accent-purple': '#7c3aed',
        'accent-blue': '#2563eb',
        'accent-cyan': '#06b6d4',
        'glow-purple': '#a855f7',
        'glow-blue': '#60a5fa',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(37, 99, 235, 0.12) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'particle': 'particle 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '33%': { transform: 'translate(30px, -30px) scale(1.2)', opacity: '0.8' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.8)', opacity: '0.5' },
        }
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.4)',
        'glow-blue': '0 0 30px rgba(37, 99, 235, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(124, 58, 237, 0.25)',
      }
    },
  },
  plugins: [],
}
