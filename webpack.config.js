var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  output: {
    publicPath: '/',
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader!scss-loader'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./src"
  },
  debug: true
};
