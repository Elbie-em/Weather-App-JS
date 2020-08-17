const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './public/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
};