import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {},
    args: {
        tabs: [{
            value: 'tab 1',
            content: 'content tab 1',
        },
        {
            value: 'tab 2',
            content: 'content tab 2',
        },
        {
            value: 'tab 3',
            content: 'content tab 3',
        }],
        value: 'tab 1',
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Gray: Story = {
    args: {},
};
Gray.decorators = [themeDecorator(Theme.GRAY)];
