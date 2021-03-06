const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    entry: './src/index.js',
    devServer: {
        host: '0.0.0.0',
        port: 3001
    },
    output: {
        chunkFilename: '[id].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'example',
            filename: 'remoteEntry.js',
            exposes: {
                'Test': './src/components/Test',
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}