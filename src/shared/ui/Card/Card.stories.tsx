import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {},
    args: {
        children: (
            <Text
                title='title'
            />
        ),
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
