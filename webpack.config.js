const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'production',
    // mode: 'development',
    entry: './lib/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: "reactui",
        libraryTarget: 'umd',
        filename: '[name].js',
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html'
    //     })
    // ],
    // 我们的reactui是npm工具库打包不需要打包进去react，进行排除。
    // 开发的使用使用，生产时候是给别人使用，别人node_modules已经有了react
    // externals: {
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     },
    // }
};