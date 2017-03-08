const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack           = require('webpack');
const path              = require('path');

module.exports = {
  entry: [
    './src/roots.js'
  ],
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
      },
      {
        test: /\.sass$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('https://newton.now.sh/derive/')
    })//,
    // new ExtractTextPlugin("styles.css")
  ]
}
