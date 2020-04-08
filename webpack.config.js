const path = require('path');
const webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/frontend/src');
const DIST_DIR = path.join(__dirname, '/frontend/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
