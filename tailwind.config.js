/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#393D46',
      'white': '#fff',
      'brown-light': '#94765B',
      'brown-dark': '#816F67',
      'brown-custom': '#756B63',
      'biege': '#D7CDC9',
      'biege-dark': '#9E918C',
      'bg': '#E8E4E2',
      
    

    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'Bahnschrift': ['Bahnschrift', 'regular'],
      }
    }
  },
  plugins: [],
}

