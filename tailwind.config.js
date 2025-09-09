/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          850: '#111827',
          900: '#0f172a',
          950: '#0a0a0b',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'caret': 'typewriter 2s steps(11) forwards, blink 1s steps(1) infinite 2s',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%'
          }
        },
        blink: {
          '0%': {
            opacity: '0'
          },
          '0.1%': {
            opacity: '1'
          },
          '50%': {
            opacity: '1'
          },
          '50.1%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      }
    },
  },
  plugins: [],
}