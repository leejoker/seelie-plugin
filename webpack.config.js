/*
 * @Date: 2021-11-24 15:32:09
 * @LastEditors: leejoker
 * @Author: leejoker
 * @LastEditTime: 2021-11-24 15:32:09
 */
const host = '127.0.0.1';
const port = 8080;

const path = require('path')
const OwlResolver = require('opal-webpack-loader/resolver')
const TampermonkeyWebpackPlugin = require('tampermonkey-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const tampermonkeyOptions = require('./tampermonkey.config.js')

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.user.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `http://${host}:${port}/`,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TampermonkeyWebpackPlugin(tampermonkeyOptions),
  ],
  devServer: {
    host,
    port,
    filename: 'index.user.js',
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
  resolve: {
    plugins: [
      // this makes it possible for webpack to find ruby files
      new OwlResolver('resolve', 'resolved')
    ]
  },
  module: {
    rules: [
      {
        test: /.(rb|js.rb)$/,
        use: [
          {
            loader: 'opal-webpack-loader',
            options: {
              sourceMap: false,
              hmr: true,
              hmrHook: ''
            }
          }
        ]
      }
    ]
  }
}
