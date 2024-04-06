import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {},
    args: {
        children: `import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {},
    args: {
        children: 
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof me`,
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
