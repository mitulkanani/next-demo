/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: 'Inter',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
      heading: '32px',
    },
    extend: {
      colors: {
        gray: {
          25: '#919BA7',
          50: '#5F6D7E',
          700: '#272D37',
        },
        neutral: {
          100: '#F8F9FB',
          200: '#F9F9F9',
          700: '#DAE0E6',
          950: '#6B7B8F',
        },
        primary: {
          50: '#F5F8FE',
        },
        secondary: {
          500: '#5D55F6',
          600: '#574EFA',
        },
      },
      boxShadow: {
        button: '0px 1px 2px rgba(16, 24, 40, 0.04)',
        priceCard:
          '0px 8px 10px -6px rgba(16, 24, 40, 0.1), 0px 20px 25px -5px rgba(16, 24, 40, 0.1);',
      },
    },
  },
  plugins: [],
};
