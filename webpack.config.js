// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
      filename: 'main.min.js',
      publicPath: 'assets'
    }
  };