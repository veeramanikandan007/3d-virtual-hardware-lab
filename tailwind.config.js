/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lab: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          primary: '#2563EB',
          primaryHover: '#1D4ED8',
          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
          textMain: '#0F172A',
          textSecondary: '#64748B',
          border: '#E2E8F0',
          // Keep old colors for backward compatibility just in case
          950: '#070b14',
          900: '#0b1120',
          850: '#10192e',
          800: '#16233f',
          700: '#233863',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        pin: {
          power5v: '#DC2626', // Updated to new red
          power3v3: '#D97706', // Updated to new orange/warning
          gnd: '#0F172A', // Updated to new main text color (slate-900)
          gpio: '#2563EB', // Updated to new primary blue
          analog: '#16A34A', // Updated to new green
          comm: '#8B5CF6', // Standard purple
          pwm: '#06B6D4', // Standard cyan
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 1.2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        }
      }
    },
  },
  plugins: [],
}
