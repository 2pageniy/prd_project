import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {},
    args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};

export const Dark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const CircleDark: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};
CircleDark.decorators = [themeDecorator(Theme.DARK)];
