import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/test_storybook.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
    },
    args: {
        size: 150,
        src: AvatarImg,
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

export const Small: Story = {
    args: {
        size: 50,
    },
};

export const AltText: Story = {
    args: {
        src: undefined,
        alt: 'alt text',
    },
};

export const Dark: Story = {
    args: {
    },
};
Dark.decorators = [themeDecorator(Theme.DARK)];
