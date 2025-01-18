import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildTypescriptLoader } from '../build/loaders/buildTypescriptLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
        entities: path.resolve(paths.src, 'entities'),
    };

    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module!.rules.push(buildCssLoader(true));
    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules.push(buildTypescriptLoader());

    config.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
