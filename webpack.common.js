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
        'app': './src/app.js'
    },
    module: {
        rules: [{
            test: /\.hbs$/,
            use: {
                loader: 'handlebars-template-loader'
            }
        },
            
        {
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
        },
        {
            test: /\.(jpe?g|gif|png)$/,
            use: [
                'file-loader'
            ]
        }
    ]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        }),
        extractSass,
        provide
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    },
    node: {
        fs: "empty" // avoids error messages
    }
};