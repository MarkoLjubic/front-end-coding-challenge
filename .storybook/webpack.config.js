const path = require('path');
const webpack = require('webpack');
const { version } = require('../package.json');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
      }, {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
