/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-Violet' : 'hsl(260, 8%, 14%)',
        'very-dark-blue' : 'hsl(255, 11%, 22%)',
        'grayish-violet' : 'hsl(257, 7%, 63%)',
        'dark-violet' : 'hsl(257, 27%, 26%)',
        'gray' : 'hsl(0, 0%, 75%)',
        'cyan' : 'hsl(180, 66%, 49%)',
        'red' : 'hsl(0, 87%, 67%)',
        'blue' : 'hsl(228, 45%, 44%)',
      },
      backgroundImage:{
        'shorten-desktop': "url('images/bg-shorten-desktop.svg')",
        'shorten-mobile' : "url('images/bg-shorten-mobile.svg')",
        'boost-mobile' : "url('images/bg-boost-mobile.svg')",
        'boost-desktop' : "url('images/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}
