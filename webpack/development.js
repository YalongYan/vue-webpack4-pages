const HtmlWebpackPlugin = require('html-webpack-plugin')
let modules = require('../src/modules')
const merge = require('webpack-merge')
const base = require('./base')
const webpack = require('webpack')
const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(base, {
  mode: 'development',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  
  devServer: {
    hot: true,
    // host: '0.0.0.0',
    host: '127.0.0.1',
    disableHostCheck: true,
    stats: {
      all: false,
      warnings: true,
      timings: true,
      errors: true,
      assets: false
    },
    inline: true,
    port: 8080,
    proxy: {
      '/': {
        target: 'http://baidu.com/',
        secure: false,
        changeOrigin: true,
        // timeout: 1000,
        // proxyTimeout: 1000,
        // protocolRewrite: true
      }
    },
  },
  devtool: 'eval-source-map',
  entry: (() => {
    const entries = {}
    modules.forEach(m => {
      entries[m] = path.resolve(__dirname, `../src/${m}/main.js`)
    })
    return entries
  })(),
  output: {
    pathinfo: false,
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  plugins: [
    ...modules.map(module => {
      return new HtmlWebpackPlugin({
        chunks: [module],
        filename: `${module}.html`,
        template: `./src/${module}/index.html`
      })
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin(
    //   [{
    //     from: path.resolve(__dirname, '../static'),
    //     to: 'static',
    //     ignore: ['.*']
    //   }]
    // )
  ],
})