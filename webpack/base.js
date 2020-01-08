const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const path = require('path')
const inProductionMode = process.env.NODE_ENV === 'production'
const CleanWebpackPlugin = require('clean-webpack-plugin')

const base = {
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js'
      // 'vue$': `vue/dist/vue.runtime.${inProductionMode ? 'min' : 'esm'}.js`
    }
  },
  module: {
    // noParse: /^(vue|vue-router|vuex)$/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../build-cache/vue')
            }
          },
          {
            loader: 'vue-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../build-cache/vue') 
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true
            }
          }
        ]
      },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'babel-loader',
      //     {
      //       loader: 'ts-loader',
      //       options: { appendTsxSuffixTo: [/\.vue$/] }
      //     },
      //     {
      //       loader: 'tslint-loader'
      //     }
      //   ]
      // },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../build-cache/js')
            }
          }, 
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              cacheDirectory: true
            }
          },
        ],
        include: [
          path.resolve(__dirname, '../src')
          // path.resolve(__dirname, '../node_modules/someModule')
        ]
      },
    {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        // {
        //   loader: 'sass-resources-loader',
        //   options: {
        //     resources: path.resolve(__dirname, '../src/assets/css/base_var.scss')
        //   }
        // }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 20480, // 20K
          name: 'images/[name].[hash:7].[ext]',
          // publicPath: './'
        }
      }
    },
    {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash:7].[ext]',
          outputPath: 'images/'
        }
      }
    }
  ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 需要定义全局变量用这个
    // new webpack.DefinePlugin({
    //   'STATIC_DIR': inProductionMode ? '"/iform_web/static/static/"' : '/static/'
    // })
  ]
}
module.exports = base