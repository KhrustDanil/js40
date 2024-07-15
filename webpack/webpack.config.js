const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
              }
            
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
};