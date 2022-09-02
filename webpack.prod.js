const path = require('path');
const common = require('./webpack.common.js');

module.exports = env => ({
  ...common(env),
  devtool: false,
  mode: 'production',
  output: {
    filename: '[contenthash:8].js',
    crossOriginLoading: 'anonymous',
    chunkFilename: 'webpack/[contenthash:8].js',
    path: path.resolve(__dirname, 'build/web')
  },
  performance: { maxEntrypointSize: 800000, maxAssetSize: 256000, hints: 'warning' }
});
