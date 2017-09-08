const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/js/index.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
            { // creates style nodes from JS strings
                loader: "style-loader" 
            }, 
            { // translates CSS into CommonJS
                loader: "css-loader", options: {  
                    sourceMap: true
                }
            },
            { // compiles Sass to CSS
                loader: "sass-loader", options: {  
                    sourceMap: true
                } 
            }]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }
    ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist']),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    }
};