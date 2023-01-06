const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',//
    entry: './src/index.js',
    devServer: {
      static: './dist',
      hot: true, 
      },
       plugins: [
              new HtmlWebpackPlugin({
           title: 'Development',
         }),
       ],
    output: {
        filename: 'main.js'
    }
}

