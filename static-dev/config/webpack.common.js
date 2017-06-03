import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import helpers from './webpack.helpers';


export default {
  target: 'web',
  context: helpers.PATH.root,
  resolve: {
    extensions: ['.js', '.json', '.vue'],
  },

  entry: {
    main: helpers.PATH.main,
    vendor: ['jquery'],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'vendor'],
    }),
    new HtmlWebpackPlugin({
      title: '拍逗科技',
      chunks: ['main', 'vendor'],
      template: `ejs-compiled-loader!${helpers.PATH.index}`,
      filename: 'index.html',
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
  ],
};

