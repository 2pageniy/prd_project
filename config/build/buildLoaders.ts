import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoaders = buildCssLoader(isDev);

    const typescriptLoader = buildTypescriptLoader();

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    const babelLoader = buildBabelLoader();

    return [
        babelLoader,
        typescriptLoader,
        cssLoaders,
        svgLoader,
        fileLoader,
    ];
}
