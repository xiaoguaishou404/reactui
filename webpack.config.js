const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './lib/index.tsx',
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: "reactui",
        libraryTarget: 'umd',
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};