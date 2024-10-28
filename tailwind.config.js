/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#ECA539',
        },
        red: {
          DEFAULT: '#C00E20',
          light: '#F22539'
        },
        gray: {
          DEFAULT: '#5E5E5E',
          light: '#BFBFBF',
          dark: '#353535'
        },
        white: {
          DEFAULT: '#F5F5F5',
          light: '#F9F9F9',
          dark: '#E8E8E8'
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        buscador: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

