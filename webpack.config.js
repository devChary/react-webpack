const path = require('path');

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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },


    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, "dist")
        },
    }
}