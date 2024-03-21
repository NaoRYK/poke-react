/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors:{
        'mahogany': {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc1c1',
          '300': '#ff9696',
          '400': '#ff5a5a',
          '500': '#ff2727',
          '600': '#fb0707',
          '700': '#d40101',
          '800': '#ae0606',
          '900': '#900c0c',
          '950': '#570000',
      },
      
      
      }
    },
  },
  plugins: [],
}