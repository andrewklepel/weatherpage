// webpack.config.js
module.exports = {
    mode: 'development',
    entry: ['./src/js/main.js', './src/styles/main.scss'],
    output: {
      filename: 'main.min.js',
      publicPath: 'assets'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'css/[name].css',
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader?-url'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };