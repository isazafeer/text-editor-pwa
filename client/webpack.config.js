const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // This plugin creates an HTML file to serve your webpack bundles and automatically injects all your bundles to this file.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E'
      }),

      // InjectManifest plugin for configuring the service worker with workbox
      new InjectManifest({
        swSrc: './src-sw.js', // Updated source of your service worker file
        swDest: 'src-sw.js', // Updated destination filename in output directory
        exclude: [/\.map$/, /asset-manifest\.json$/] // Exclude maps and manifest to avoid caching them
      }),

      // This plugin generates a 'manifest.json' for Progressive Web App
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'A simple text editor as a PWA',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '.',
        publicPath: '.',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes for different resolutions
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'], // Loaders for processing CSS
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // Babel loader to transpile modern JavaScript to backward compatible versions
            options: {
              presets: ['@babel/preset-env'], // Preset for compiling ES2015+ syntax
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'], // Plugins for Babel to support modern JavaScript features
            },
          },
        },
      ],
    },
  };
};
