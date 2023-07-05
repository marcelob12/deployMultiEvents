/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      indigo: colors.indigo,
      white: colors.white,
      'black': '#000000',
      'gray': {
        '50': '#9e9e9f',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d5dce5',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
      },
      'blue': {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
      },
      red: colors.red,
      primary: {
        '400': '#febc14',
        '500': '#f5b512',
      },
      secondary: '#212121', //color negro de multiEvent
      greenLoader: '#20b620', // verde loader animacion de pago
      card1: '#00a896',
      card2: '#f8961e',
      card3: '#e56b6f',
      'green': '#619c16',
    },
    // medidas para el responsive
    // screens: {
    //   'sm': '250px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    // },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Saira': ['Saira Semi Condensed', 'sans-serif'],
    },
    extend:{
      backgroundImage:{
        'index-img': "url('/img/background.jpg')"
      }
    }

  },
  plugins: [],
});
