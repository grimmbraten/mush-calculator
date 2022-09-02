const path = require('path');
const common = require('./webpack.common.js');

module.exports = env => ({
  ...common(env),
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
    crossOriginLoading: 'anonymous',
    chunkFilename: 'webpack/[name].js',
    path: path.resolve(__dirname, 'build/web')
  },
  devServer: {
    hot: true,
    port: 5000,
    host: 'localhost',
    historyApiFallback: true,
    devMiddleware: { writeToDisk: true }
  }
});
