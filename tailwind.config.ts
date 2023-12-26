import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow_primary: 'hsl(47, 88%, 63%)',
        white_neutral: 'hsl(0, 0%, 100%)',
        grey_neutral: 'hsl(0, 0%, 50%)',
        black_neutral: 'hsl(0, 0%, 7%)'
      },
      fontWeight: {
        normal: '600',
        heavy: '800'
      }
    },
  },
  plugins: [],
}
export default config
