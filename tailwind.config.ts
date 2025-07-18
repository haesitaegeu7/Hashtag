// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1d2d66',
        'brand-orange': '#eb5b18',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', ...fontFamily.sans],
      },

    },
  },
  plugins: [],
}
export default config