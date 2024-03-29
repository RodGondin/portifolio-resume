import type { Config } from 'tailwindcss'

const textShadow = require('tailwindcss-textshadow');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        'custom-black': '1px 1px black',
        'custom-white': '1px 1px white',
      },
    },
  },
  plugins: [
    textShadow
  ],
}
export default config
