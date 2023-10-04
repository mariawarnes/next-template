import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-100': '#2B2C35',
        grey: '#747A88',
        gold: '#EBB54B',
        'primary-blue': {
          dark: '#2B2D42',
          light: '#8D99AE',
        },
      },
    },
  },
  plugins: [],
};
export default config;
