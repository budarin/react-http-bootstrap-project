import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import babelConfig from './babelLoaderConfig';

const wpConfig = () => {
    return {
        cache: true,
        target: 'web',
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        // devtool: 'eval',
        entry: ['./src/index.tsx'],
        output: {
            publicPath: '/',
            filename: 'bundle.js',
            path: path.resolve('./dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    include: path.resolve('./src'),
                    exclude: path.resolve('node_modules'),
                    use: {
                        loader: 'babel-loader',
                        options: babelConfig,
                    },
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    include: path.resolve('./src'),
                    exclude: path.resolve('node_modules'),
                    use: {
                        loader: 'image-size-loader',
                        options: {
                            name: 'img/[name].[hash:7].[ext]',
                            context: path.resolve(__dirname, 'src'),
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader/useable',
                            options: {
                                hmr: true,
                            },
                        },
                        {
                            loader: '@budarin/ts-css-loader',
                            options: {
                                modules: true,
                                usable: true,
                                server: true,
                                camelCase: true,
                                importLoaders: 1,
                                localIdentName: '[name].[local]_[hash:7]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                include: [/node_modules/],
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
            modules: ['node_modules', path.resolve('./src')],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CopyWebpackPlugin([{ from: './src/index.html' }]),
            new webpack.WatchIgnorePlugin([/css\.d\.ts$/]), // due to slow building ignore changes
            new webpack.DefinePlugin({
                __DEV__: true,
                'process.env.__BROWSER__': true,
            }),
        ],
        devServer: {
            port: 4430,
            hot: true,
            inline: true,
            overlay: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            https: {
                ca: fs.readFileSync('certs/cacert.crt'),
                key: fs.readFileSync('certs/server.key'),
                cert: fs.readFileSync('certs/server.crt'),
            },
            contentBase: path.resolve('./dist'),
        },
    };
};

export default wpConfig;
