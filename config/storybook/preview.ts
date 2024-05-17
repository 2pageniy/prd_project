import type { Preview } from '@storybook/react';
import 'loki/configure-react';
import 'app/styles/index.scss';
import {
    routerDecorator, storeDecorator, suspenseDecorator, themeDecorator,
} from '../../src/shared/config/storybook';
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
        (Story) => storeDecorator()(Story),
        (Story) => routerDecorator(Story),
        (Story) => suspenseDecorator(Story),
    ],
};

export default preview;
