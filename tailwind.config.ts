import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#123E52', // Deep Forest Green - main brand color
        secondary: '#397F86', // Sage Green - secondary accent
        accent: '#397F86', // Sage Green accent
        cream: '#F7F3E8', // Warm cream background
        'brand-dark': '#123E52', // Deep Forest Green
        'brand-sage': '#397F86', // Sage Green
        'brand-cream': '#F7F3E8', // Cream
        text: '#123E52', // Deep Forest Green text / dark neutral
        'text-gray': '#526B76', // Muted green-gray text
        'bg-light': '#F7F3E8', // Warm cream light background
        'border-gray': '#DDDCD3', // Warm light border
        'nav-gray': '#397F86', // Navigation bar sage green
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        heading: ['var(--font-dm-sans)', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    // line-clamp plugin removed; included by default in Tailwind 3.3+
  ],
}
export default config 