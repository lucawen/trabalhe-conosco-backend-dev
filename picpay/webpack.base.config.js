var path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: {
    users: './users/static/js/main.js'
  },

  output: {
      path: path.resolve(__dirname, 'static/bundles/'),
      filename: '[name]-[hash].js'
  },

  plugins: [],

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: { loader: 'css-loader', options: { minimize: true, sourceMap: true } }
        })

      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.css', '.js'],
    alias: {}
  }
}
