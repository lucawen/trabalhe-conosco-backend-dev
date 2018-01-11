var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var config = require('./webpack.base.config.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

config.output.path = require('path').resolve('./static/dist')
config.output.filename = '[name].js'
config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-prod.json'}),

  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),

  // keeps hashes consistent between compilations
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new ExtractTextPlugin({
    disable: false,
    filename: '[name].css'
  }),
  // minifies your code
  new UglifyJSPlugin({
    uglifyOptions: {
      compress: {
        warnings: false,
      },
      output: {
        beautify: false,
        comments: false
      },
      warnings: false
    },
    sourceMap: true,
  }),
])

module.exports = config
