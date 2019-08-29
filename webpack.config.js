const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const args = require('minimist')(process.argv.slice(2));
const devMode = args.mode === 'development';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? '[name].js' : '[name].[contenthash].js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.(png|jpeg|jpg|gif|ttf)$/, use: 'file-loader' },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') })
    ],
    watchOptions: {
        ignored: ['node_modules']
    }
};

const development = {
    devtool: 'inline-source-map', // replace with 'eval-source-map', if build times become too long
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader',  options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
            ]}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ]
};

const production = {
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
};

module.exports = merge(common, devMode ? development : production);
