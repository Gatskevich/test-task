var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: "source-map",
 
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    devServer: {
      historyApiFallback: true,
      port: 8081,
      proxy: {
        '/api/**': {
          target: 'http://react-test.somee.com',
          secure: false,
          changeOrigin: true
        },
      },

    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader"},
            { test: /\.js$/, use: "source-map-loader" },
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {
                test: /\.html$/,
              loader: 'html-loader',
            },
            {
                test: /\.scss$/,
                  use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader" 
                  }, {
                    loader: "sass-loader"
                  }]
            }
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
  
};