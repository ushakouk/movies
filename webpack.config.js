const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devtool = 'source-map';
const optimization = {
  splitChunks: { chunks: 'all' }
};
const configs = {
  entry: './src/index.js',

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'built'),
  },

  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    extensions: ['.js']
  },

  plugins: [
    new CleanWebpackPlugin(['built']),
    new HtmlWebpackPlugin({
      title: 'Movies',
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { attrs: false }
          }
        ]
      },
    ]
  }
}

module.exports = (env, argv) => argv.mode === 'development'
  ? { ...configs, devtool }
  : { ...configs, optimization };