module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        player: '32rem',
      },
      fontFamily: {
        display: ['Monoton'],
        body: ['Open Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
