/*eslint-disable*/
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/BlueProtocolSdk.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'BlueProtocolSdk',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          'eslint-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true
            }
          }
        ]
      }
    ]
  }
};
