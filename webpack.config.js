const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const browserConfig = {
    mode: 'development',
    entry: { app: './browser/App.jsx' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                            ["@babel/preset-env", {
                                targets: "defaults"
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].styles.css'
        })
    ]
};

const serverConfig = {
    mode: 'development',
    entry: { server: './server/uiserver.js' },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                            ["@babel/preset-env", {
                                targets: "defaults"
                            }]
                        ]
                    }
                }
            }
        ]
    }
};

module.exports = [ serverConfig, browserConfig ];
