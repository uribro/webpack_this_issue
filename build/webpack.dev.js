const PATH = require('path');
const ROOT = PATH.resolve(__dirname, '../');
const SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'src/');
const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist/');

module.exports = {
    mode: 'development',
    cache: true,
    context: ROOT,
    entry: {
        bundle: PATH.resolve(SRC_FOLDER, 'index.js'),
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: BUILD_FOLDER,
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [SRC_FOLDER],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    }
                },
            },
        ]
    },
};