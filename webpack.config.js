const { resolve } = require('path')
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: resolve(__dirname, '')
        }
    },
    target: 'node',
    mode: 'production'
}