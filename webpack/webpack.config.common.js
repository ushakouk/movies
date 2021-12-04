const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  optimization: {
    moduleIds: 'named'
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  module: {
    rules: [
      {
        test: /\.j?t?sx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.s?css$/,
        include: /src/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ],

      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ].filter(Boolean)
};
