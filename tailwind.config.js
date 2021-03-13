module.exports = {
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/filters'),
    require('windicss/plugin/scroll-snap'),
  ],
};
