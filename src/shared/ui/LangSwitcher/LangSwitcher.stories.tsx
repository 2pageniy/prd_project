import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

const meta = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    parameters: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const PrimaryShort: Story = {
    args: {
        short: true,
    },
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
