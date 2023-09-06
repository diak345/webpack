const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',

    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    target: 'web',
    devServer: {
        port: '5000',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
    },
};