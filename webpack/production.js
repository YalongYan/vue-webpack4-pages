const merge = require('webpack-merge')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./base')
const modules = require('../src/modules')

const TerserJSPlugin = require('terser-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin') // 这个写法不可以
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const distDir = path.resolve(__dirname, '../dist/')

module.exports = merge.smart(base, {
  mode: 'production',
  entry: (() => {
    const entries = {}
    modules.forEach(m => {
      entries[m] = path.resolve(__dirname, `../src/${m}/main.js`)
    })
    console.log(entries)
    return entries
  })(),
  output: {
    filename: '[name].[hash].js',
    path: distDir,
    publicPath: '../dist/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        parallel: 4,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }), 
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  },
  module: {
    rules:[
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    ...modules.map(module => {
      return new HtmlWebpackPlugin({
        chunks: [module, 'vendors', 'commons'],
        filename: `${module}.html`,
        template: `./src/${module}/index.html`
      })
    }),
    // new CopyWebpackPlugin(
    //   [{
    //     from: path.resolve(__dirname, '../static'),
    //     to: 'static',
    //     ignore: ['.*']
    //   }]
    // ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }), 
    // new BundleAnalyzerPlugin()
  ]
})