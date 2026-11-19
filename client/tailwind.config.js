/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#FBF6F0',
          surface: '#FFFFFF',
          elevated: '#F5EAE2',
          green: '#163E2B',
          'green-light': '#23583E',
          'green-dim': 'rgba(22, 62, 43, 0.08)',
          'green-border': 'rgba(22, 62, 43, 0.16)',
          terracotta: '#BE523C',
          'terracotta-dark': '#A93B26',
          'terracotta-light': '#E8927C',
          'terracotta-dim': 'rgba(190, 82, 60, 0.12)',
          'terracotta-border': 'rgba(190, 82, 60, 0.28)',
          pine: '#122A1E',
          secondary: '#3D4E44',
          muted: '#637369',
          gold: '#C59B67'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
