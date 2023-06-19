const path = require('path');

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
        filename: 'reactui.bundle.js',
    },
};