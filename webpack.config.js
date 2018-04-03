const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const developmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function decorateWithHRM(entry) {
  if (developmentMode) {
    return [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      entry,
    ];
  }
  return [entry];
}

const extractSCSS = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: developmentMode,
});

module.exports = {
  context: path.join(__dirname, 'src', 'assets'),
  entry: {
    app: decorateWithHRM('./js/index.js'),
    appReact: decorateWithHRM('./js/app.jsx'),
  },
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, 'build', 'assets'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  devtool: developmentMode ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        loader: 'file-loader?name=assets/[name].[ext]',
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    extractSCSS,
    new CopyWebpackPlugin(
      [{ from: 'images', to: '[name].[ext]' }],
    ),
  ],
};
