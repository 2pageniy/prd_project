import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    },
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

export const Base: Story = {
    args: {
        theme: ThemeButton.BASE,
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
};
OutlineDark.decorators = [themeDecorator(Theme.DARK)];
