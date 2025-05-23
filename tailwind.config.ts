import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        myXs: '0.75rem',
      },
      colors: {
        baseText: '#5c6876',
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#9FD6EC',
        primarybg: '#E8F6FB',
        primaryText: '#7ccae9',
        line: '#C8E0E9',
      },
    },
  },
}
export default config
