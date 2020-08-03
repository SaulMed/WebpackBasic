const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer:{
        port:7070
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    }
    ,
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        })
    ]
}