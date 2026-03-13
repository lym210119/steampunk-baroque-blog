import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brass: {
          50: '#faf6e9',
          100: '#f0e2b3',
          200: '#e0c87a',
          300: '#c9a64c',
          400: '#c09f3f',   // 新增（介于300和500之间）
          500: '#b88b2f',
          600: '#9f7630',   // 可选，但暂时未使用
          700: '#7a5e2a',
          800: '#5e4822',   // 新增（介于700和900之间）
          900: '#3d311a',
        },
        burgundy: '#4a1f2d',
        'dark-teal': '#1e3f4a',
        parchment: '#f9f1d9',
        'metal-dark': '#2c2c2c',
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Cinzel', 'serif'],
        sans: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        mono: ['var(--font-special-elite)', 'Special Elite', 'monospace'],
      },
      backgroundImage: {
        'steampunk-pattern': "url('/textures/paper-old.jpg')",
        'gear-pattern': "url('/textures/gears-bg.svg')",
        'baroque-pattern': "url('/textures/baroque-damask.png')",
      },
      boxShadow: {
        embossed: 'inset 0 2px 4px rgba(0,0,0,0.6), 0 4px 6px rgba(0,0,0,0.3)',
        'metal-rim': '0 0 0 2px #c9a64c, 0 4px 8px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}
export default config
