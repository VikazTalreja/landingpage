/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'grow-line': 'grow-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'move-dot': 'move-dot 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'progress': 'progress 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        'grow-line': {
          'from': { transform: 'scaleX(0) translateY(-50%)' },
          'to': { transform: 'scaleX(1) translateY(-50%)' }
        },
        'move-dot': {
          '0%': { left: '0%', opacity: '0', transform: 'translateY(-50%) scale(1)' },
          '20%': { opacity: '1', transform: 'translateY(-50%) scale(1.2)' },
          '80%': { opacity: '1', transform: 'translateY(-50%) scale(1.2)' },
          '100%': { left: '100%', opacity: '0', transform: 'translateY(-50%) scale(1)' }
        },
        'progress': {
          'from': { transform: 'scaleX(0)' },
          'to': { transform: 'scaleX(1)' }
        },
        'fadeIn': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' }
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' }
        }
      }
    },
  },
  plugins: [],
} 