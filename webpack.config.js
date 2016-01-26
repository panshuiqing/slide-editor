var webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    // 入口
    entry: './src/boot.js',
    // 输出
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            query: {
            	presets: ['es2015']
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(css|scss)$/,
            loader: 'style!css!sass-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192' // 图片低于 8MB 时转换成 inline base64
        }]
    }
}