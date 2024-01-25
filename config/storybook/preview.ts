import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { themeDecorator, routerDecorator } from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => themeDecorator(Theme.LIGHT)(Story),
        (Story) => routerDecorator(Story),
    ],
};

export default preview;
