import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { routerDecorator, storeDecorator, themeDecorator } from '../../src/shared/config/storybook';
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
        mockAddonConfigs: {
            globalMockData: [{
                url: '*',
                method: 'GET',
                status: 200,
                response: {},
            }],
        },
    },
    decorators: [
        (Story) => themeDecorator(Theme.LIGHT)(Story),
        (Story) => storeDecorator()(Story),
        (Story) => routerDecorator(Story),
    ],
};

export default preview;
