const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // added this line
    entry: './src/index.js',
    // devtool: 'inline-source-map', //added this line to track errors with webpack
    output: {
        filename: 'main.js', // where we want to output
        path: path.resolve(__dirname, 'dist'), // path to the output directory
        clean: true, // each time we run webpack, this will empty output directory first
    },
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['./src/template.html'],
    },
    // for html bundling
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // for image files we reference in our HTML template
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            // for image files we use in our JS, where we will need to import files
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // for babel so that jest can work with ES6 import/export
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: 'defaults',
                        presets: [['@babel/preset-env']],
                    },
                },
            },
        ],
    },
};
