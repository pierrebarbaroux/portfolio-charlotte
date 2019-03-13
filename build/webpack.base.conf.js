const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './app/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('app'),
      components: resolve('app/components'),
      pages: resolve('app/pages'),
      scripts: resolve('app/assets/scripts'),
      styles: resolve('app/assets/styles'),
      vars: resolve('app/assets/styles/base/_variables.scss'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('app'), resolve('test')],
      },
      {
        test: require.resolve('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        loader: 'imports-loader?define=>false',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin(resolve('app/assets/images/favicon.png')),
    new VueLoaderPlugin(),
  ],
};
