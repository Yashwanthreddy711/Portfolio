/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['__inter_20b187', '__inter_Fallback_20b187', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    extend: {
      colors:{
        custom:'#030618',
        custom2:'#96fcff'
      }
    },
    screens: {
      'sm': '320px',
      'md': '918px', // Updated minimum screen width for "md"
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

  },
  
  darkMode:'media'
}