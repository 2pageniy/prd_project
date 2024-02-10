import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const loginForm = {
    username: 'username123',
    password: 'password456',
};

export const Primary: Story = {
    args: {},
};
Primary.decorators = [storeDecorator({ loginForm })];

export const WithError: Story = {
    args: {},
};
WithError.decorators = [storeDecorator({
    loginForm: {
        ...loginForm,
        error: 'Wrong password or login',
    },
})];

export const WithLoading: Story = {
    args: {},
};
WithLoading.decorators = [storeDecorator({
    loginForm: {
        isLoading: true,
    },
})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [storeDecorator({ loginForm }), themeDecorator(Theme.DARK)];
