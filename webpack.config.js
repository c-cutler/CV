const path = require('path');

module.exports = {
  entry: {
    snake: path.join(__dirname, 'src', 'snake.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
      }
    }]
  }
}
