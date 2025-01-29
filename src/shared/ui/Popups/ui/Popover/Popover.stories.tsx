import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from '../../../Button';
import { Popover } from './Popover';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {},
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        trigger: <Button>Trigger</Button>,
        // eslint-disable-next-line i18next/no-literal-string
        children: <p>Content</p>,
    },
} satisfies Meta<typeof Popover>;

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
