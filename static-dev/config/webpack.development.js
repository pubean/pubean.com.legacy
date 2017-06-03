import webpack from 'webpack';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import helpers from './webpack.helpers';


export default {
  devtool: 'inline-source-map',

  devServer: {
    open: false,
    hot: false,
    historyApiFallback: true,
    stats: {
      children: false,
      chunks: false,
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },

  output: {
    path: helpers.PATH.build,
    filename: 'js/[name].js',
    publicPath: helpers.PATH.public,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: helpers.PATH.exclude,
        use: [
          'babel-loader?cacheDirectory&-compact',
          'eslint-loader?cache',
        ],
      },
      {
        test: /\.s?(a|c)ss$/,
        exclude: helpers.PATH.exclude,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?sourceMap',
            'sass-loader?sourceMap',
            'postcss-loader?sourceMap',
          ],
          fallback: 'style-loader?singleton',
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5120,
            publicPath: '',
            name: 'img/[name].[ext]',
          },
        },
      },
      {
        test: /\.(eot|(o|t)tf|woff2?)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5120,
            publicPath: '../',
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new StyleLintPlugin({
      syntax: 'scss',
      lintDirtyModulesOnly: true,
      files: helpers.PATH.styles,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
    new webpack.WatchIgnorePlugin([
      helpers.PATH.exclude,
    ]),
    new WriteFilePlugin({
      log: false,
      useHashIndex: true,
    }),
  ],
};
