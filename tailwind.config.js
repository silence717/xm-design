const colors = require('./tailwind-color');

module.exports = {
  mode: 'jit',
  corePlugins: {
    preflight: false,
    container: false,
    objectPosition: false,
    overscrollBehavior: false,
    listStyleType: false,
    listStylePosition: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundImage: false,
    backgroundBlendMode: false,
    accessibility: false,
  },
  purge: ['components/**/*.tsx'],
  darkMode: false,
  theme: {
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
