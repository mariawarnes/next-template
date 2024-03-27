import type { Config } from "tailwindcss";
import { primaryColor } from './constants';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "var(--font-open-sans)",
      },
      colors: {
        'custom-bg': {
          light: '#ffffff',
          dark: '#2c2c2c',
        },
        'custom-text': {
          light: '#2c2c2c',
          dark: '#cccccc',
        },
        'primary-color': primaryColor,
        'secondary-color': '#2B8D42',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ]
};
export default config;
