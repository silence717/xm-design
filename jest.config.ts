module.exports = {
  jest: {
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
  },
}
