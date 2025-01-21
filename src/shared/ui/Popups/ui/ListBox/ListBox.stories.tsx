import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {},
    args: {
        onChange: () => {},
        defaultValue: 'default value',
        items: [
            {
                value: '1',
                content: 'Ru',
            },
            {
                value: '2',
                content: 'En',
            },
            {
                value: '3',
                content: 'Br',
            },
        ],
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} satisfies Meta<typeof ListBox>;

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

export const TopLeft: Story = {
    args: {
        direction: 'top-left',
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top-right',
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom-left',
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom-right',
    },
};
