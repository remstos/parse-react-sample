var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './app/js/main'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
};
