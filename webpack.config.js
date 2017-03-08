const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack           = require('webpack');
const path              = require('path');

module.exports = {
  entry: './src/roots.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ],
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
