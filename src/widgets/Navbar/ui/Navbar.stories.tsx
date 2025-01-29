import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const LightAuthorization: Story = {
    args: {},
};
LightAuthorization.decorators = [storeDecorator({
    user: {
        authData: {},
    },
})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
