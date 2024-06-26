import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),

    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
