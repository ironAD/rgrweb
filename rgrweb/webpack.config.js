const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath : 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['style-loader','css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer:{
      overlay : true
  },
  plugins: [
    new ExtractTextPlugin('style.css')
   ]
};