import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const WithAuth: Story = {
    args: {
    },
};
WithAuth.decorators = [storeDecorator({
    user: { authData: {} },
})];

export const Dark: Story = {
    args: {
    },
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Gray: Story = {
    args: {
    },
};
Gray.decorators = [themeDecorator(Theme.GRAY)];
