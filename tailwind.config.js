/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'fem-primary': {
                  100: 'hsl(238, 29%, 16%)',
                  200: 'hsl(14, 88%, 65%)',
                  300: 'hsl(273, 75%, 66%)', // #af67e9
                  400: 'hsl(240, 73%, 65%)', // #6565e7
              },
              'fem-neutral': {
                  100: 'hsl(237, 12%, 33%)',
                  200: 'hsl(240, 6%, 50%)',
                  300: 'hsl(240, 5%, 91%)',
              },
          },
          fontFamily: {
              'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
          },
          screens: {
              'mobile': '376px',
              // => @media (min-width: 640px) { ... }

              'desktop': '1441px',
              // => @media (min-width: 1280px) { ... }
          },
      },
  },
  plugins: [],
}
