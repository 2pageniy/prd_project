import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
    },
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
        title: 'Title',
        text: 'Text',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
};
OnlyTitleDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Text',
    },
};
OnlyTextDark.decorators = [themeDecorator(Theme.DARK)];
