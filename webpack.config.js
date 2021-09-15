const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devtool = 'source-map';
const optimization = {
  splitChunks: { chunks: 'all' },
  minimizer: [
    '...',
    new CssMinimizerPlugin(),
  ]
};
const configs = {
  entry: './src/index.js',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: path.join(__dirname, 'built'),
  },

  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx']
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
      chunkFilename: '[id].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
          'postcss-loader'
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