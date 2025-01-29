import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationButton } from './NotificationButton';

const meta = {
    title: 'shared/NotificationButton',
    component: NotificationButton,
    parameters: {},
    args: {},
} satisfies Meta<typeof NotificationButton>;

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
