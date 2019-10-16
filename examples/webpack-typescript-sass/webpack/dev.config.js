const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./common.config')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')

module.exports = webpackMerge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id]-chunk.js',
    publicPath: '/'
  },
  plugins: [
    new CleanTerminalPlugin(),
    new TSLintPlugin({
      files: ['./src/**/*.ts', './src/**/*.tsx']
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    }),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
      HOMEPAGE: JSON.stringify('/')
    })
  ]
})
