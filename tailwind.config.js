/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neutral-0': '#FFFFFF',
        'neutral-6': '#F3F3F3',
        'neutral-25': '#DCDBDB',
        'neutral-50': '#9D9A9A',
        'red-20': '#FAC9CD',
        'red-40': '#F8A9B0',
        'red-110': '#C92C39',
        'red-120': '#A52F38',
      },
      boxShadow: {
        'error-100': '0px 0px 0px 4px #FAC9CD',
        'gray-100': '0px 0px 0px 4px #F2F4F7'
      }
    },
  },
  plugins: [],
}

