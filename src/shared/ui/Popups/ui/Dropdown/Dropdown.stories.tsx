import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from '../../../Button';
import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {},
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Trigger</Button>,
        items: [
            {
                content: 'first',
                key: 'first',
            },
            {
                content: 'second',
                key: 'second',
            },
            {
                content: 'third',
                key: 'third',
            },
        ],
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} satisfies Meta<typeof Dropdown>;

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
