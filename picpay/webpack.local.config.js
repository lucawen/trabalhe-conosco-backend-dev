var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.devServer = {
  contentBase: path.join(__dirname, "static", "bundles"),
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
  },
  host: '127.0.0.1',
  port: 3000
}

config.output.publicPath = 'http://127.0.0.1:3000/static/bundles/'
config.plugins = [
  new BundleTracker({filename: './webpack-stats.json'}),
]

config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'

module.exports = config
