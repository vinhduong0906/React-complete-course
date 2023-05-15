const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        /*[name]: [path]*/
        app: './src/index.js',
        print: './src/my-test.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};