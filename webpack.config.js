var webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: './src/app.js',
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
            loader: 'style!css'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192' // 图片低于 8MB 时转换成 inline base64
        }]
    }
}