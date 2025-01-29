import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import IconSvg from '@/shared/assets/icons/about.svg';
import { Icon } from './Icon';

const meta = {
    title: 'shared/Icon',
    component: Icon,
    parameters: {},
    args: {
        Svg: IconSvg,
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
