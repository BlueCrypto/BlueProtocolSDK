/* eslint-disable */
const config = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime'
  ]
};

module.exports = config;
