var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var config = require('./webpack.base.config.js')

config.output.path = require('path').resolve('./static/dist')

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

  // minifies your code
  new UglifyJSPlugin({
    uglifyOptions: {
        compress: {
          warnings: false,
        },
        output: {
          comments: false
        },
    },
    sourceMap: true,
  })
])

module.exports = config
