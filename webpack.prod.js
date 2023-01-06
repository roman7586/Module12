const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',//
    entry: './src/index.js',
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    },
    devServer: {
      static: './dist',
      },
       plugins: [
              new HtmlWebpackPlugin({
           title: 'Production',
         }),
       ],
    output: {
        filename: 'main.js'
    }
}