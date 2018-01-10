var path = require("path")

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
        use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, 'css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
    }
  }
}
