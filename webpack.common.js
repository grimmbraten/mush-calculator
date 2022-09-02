const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

const alias = {};
const jsonConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'jsconfig.json')).toString());

if (jsonConfig?.compilerOptions?.paths) {
  const aliases = Object.entries(jsonConfig.compilerOptions.paths);

  aliases.forEach(([key, [value]]) => {
    alias[key] = `${path.resolve(__dirname, value)}/`;
  });
}

module.exports = env => ({
  entry: './src/app/index.js',
  resolve: {
    alias,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.gql', '.graphql']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.(graphql|gql)$/,
        use: { loader: 'graphql-tag/loader' }
      },
      {
        exclude: /node_modules/,
        test: /\.(jpe?g|png|gif|webp|svg|otf|eot|ttf|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: true,
              outputPath: 'assets',
              publicPath: '/static/assets/',
              name: 'assets/[name]-[contenthash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SubresourceIntegrityPlugin(),
    new Dotenv({ safe: true, allowEmptyValues: true }),
    ...(env.eval
      ? [
          new LoadablePlugin({
            writeToDisk: true,
            filename: '../loadable-stats.json'
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            generateStatsFile: true,
            openAnalyzer: !!env.openAnalyzer,
            reportFilename: '../cache-groups.html',
            reportTitle: `Cache group evaluation - ${new Date()}`
          })
        ]
      : []),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        graphql: {
          chunks: 'all',
          name: 'cache/graphql',
          test: /[\\/]node_modules[\\/]graphql[\\/]/
        },
        mantine: {
          chunks: 'all',
          name: 'cache/mantine',
          test: /[\\/]node_modules[\\/]@mantine[\\/]/
        },
        reactDom: {
          chunks: 'all',
          name: 'cache/react-dom',
          test: /[\\/]node_modules[\\/]react-dom[\\/]/
        },
        apolloclient: {
          chunks: 'all',
          name: 'cache/apollo-client',
          test: /[\\/]node_modules[\\/]@apollo[\\/]client[\\/]/
        }
      }
    }
  }
});
