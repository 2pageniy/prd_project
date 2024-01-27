import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
    },
    args: {
        children: 'Link',
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY_INVERTED,
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY_INVERTED,
    },
};
SecondaryDark.decorators = [themeDecorator(Theme.DARK)];
