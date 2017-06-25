import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import helpers from './webpack.helpers';


export default {
  devtool: 'source-map',

  performance: {
    hints: 'warning',
    maxEntrypointSize: 500000,
    maxAssetSize: 100000,
  },

  output: {
    path: helpers.PATH.build,
    publicPath: helpers.PATH.public,
    filename: 'js/[name].[chunkHash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: helpers.PATH.exclude,
        use: [
          'babel-loader?cacheDirectory&-compact',
        ],
      },
      {
        test: /\.s?(a|c)ss$/,
        exclude: helpers.PATH.exclude,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?sourceMap&minimize',
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
            limit: 100,
            publicPath: '',
            name: 'img/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(eot|(o|t)tf|woff2?)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100,
            publicPath: '../',
            name: 'fonts/[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: helpers.PATH.root,
      verbose: true,
      dry: false,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkHash:8].css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
    }),
  ],
};
