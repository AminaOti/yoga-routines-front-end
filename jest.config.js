module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/unit/fileTransformer.js',
  },
  "collectCoverage": true,
  "collectCoverageFrom": ["**/src/**/*.{js,vue}", "!**/node_modules/**"],
}
