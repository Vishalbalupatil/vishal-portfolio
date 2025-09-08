import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#050510',
        foreground: '#f8fafc',
        accent: {
          500: '#3b82f6',
          600: '#7c3aed'
        }
      },
      boxShadow: {
        glow: '0 0 15px rgba(124,58,237,0.6)'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        heading: ['ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
export default config
