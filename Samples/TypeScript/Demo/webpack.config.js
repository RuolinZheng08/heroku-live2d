
var path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@framework': path.resolve(__dirname, '../../../Framework/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../../..'),
    watchContentBase: true,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    compress: true,
    useLocalIp: true,
    writeToDisk: true
  },
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /node_modules/
  }
}
