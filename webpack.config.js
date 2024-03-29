var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports= {
    module : {
        rules:[
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }

            },
            {
                test : /\.html$/,
                use:[
                    {
                        loader : "html-loader",
                        options : {
                            minimize : false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                          limit : 5000
                        }
                      }
                ]
            },
            {
                test : /\.scss$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]                
            }
        ]
    },
    plugins :[
        new HtmlWebpackPlugin({
             template : "./src/index.html",
             filename : "./index.html"
         }),
         new MiniCssExtractPlugin({
             filename : "[name].css",
             chunkFilename: "[id].css"
         })

    ]
}
