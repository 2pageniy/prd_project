import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const cssLoaders =  {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /(.module.)/,
                        localIdentName: isDev
                            ? '[path][name]__[local][hash:base64:8]'
                            : '[hash:base64:8]'
                    },
                },
            },
            "sass-loader"
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
    };

    return [
        typescriptLoader,
        cssLoaders,
        svgLoader,
        fileLoader
    ];
}
