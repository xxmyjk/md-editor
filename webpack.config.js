const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlResolve = new HtmlWebpackPlugin({
    title: 'md-editor',
    filename: 'index.html',
    template: './app/index.template.ejs',
    favicon: ''
});

module.exports = {
    context: __dirname,
    entry: {
        main: './app/entry.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js'
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.less', '.css', '.sass'],
        alias: {
            'ace': 'ace-builds/src-min'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)|(jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env', 'react']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }, {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.(md|txt)$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        htmlResolve
    ],
    watch: false,
    watchOptions: {
        ignored: /(node_modules)|(dist)/,
        aggregateTimeout: 300,
        poll: 1000 * 10
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
