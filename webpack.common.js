const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const provide = new webpack.ProvidePlugin({
    $: 'cash-dom',
    jQuery: 'cash-dom'
  })

const extractSass = new ExtractTextPlugin({
    filename: "[name].[chunkhash].css"
//    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        'app': './src/js/app.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                fallback: "style-loader",
                use: [
                    {loader: "css-loader", options: { minimize: process.env.NODE_ENV === "production" } },
                    {loader: 'postcss-loader', // Run post css actions
                        options: {
                          plugins: function () {
                            return [
                              require('precss'),
                              require('autoprefixer')
                            ];
                          }
                        }
                    },
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
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: 'src/index.ejs'
        }),
        extractSass,
        provide
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    }
};