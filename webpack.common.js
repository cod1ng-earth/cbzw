const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
//    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        'app': './src/js/index.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                fallback: "style-loader",
                use: [
                    {loader: "css-loader", options: { minimize: process.env.NODE_ENV === "production" } },
                    {loader: "sass-loader"} 
                ]
            })
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
        extractSass
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    }
};