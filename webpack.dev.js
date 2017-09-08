const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map', //inline-source-map',
    plugins: [
    ]
});