/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // https://vercel.com/design/color
      colors: {
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },

      fontFamily: {
        head: 'Quicksand, sans-serif',
        body : 'Lato, sans-serif'
      },
      fontWeight : {
        W_head: '700',
        W_body:'400'
      },
      lineHeight: {
        head:'1.3',
        body:'1.6'
      },
      fontSize:{
        body:'15px',
        h1:'44px',
        h2:'40px',
        h3:'32px',
        h4:'24px',
        h5:'20px',
        h6:'16px',
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            'border-color': theme('colors.vercel.pink'),
          },
          '40%': {
            'border-color': theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
};
