const path = require('path');
const MiniCssExtractplugin = require("mini-css-extract-plugin");

let mode = 'development';

if (process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractplugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    plugins :[new MiniCssExtractplugin()],

    devServer: {
        port: 8080,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist")
        },
    }
}