const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        blue: {
          midnight:"#0f3049",
          icon: "#2071b3",
          pale:'#d6e0ef',
          periwinkle: '#e0e9ff',
          cerulean: '#1a75bb',
          lightSteel: '#c4d4e1',
        },
        gray: {
          background: '#e9e9e9',
        },
        indigo: {
          dye: '#2d5773',
        }
      },
      height: {
        '108': '27rem',
        '136': '34rem',
      },
      width: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        'banner':'360px',
        
      },
      fontSize:{
        'ourpeople':'19px',
        'footerleft':'10px'
      },
      maxWidth: {
        'maxScreen': '1100px',
      },
    },
  },
  plugins: [],
}

