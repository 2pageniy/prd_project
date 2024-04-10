import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from 'shared/assets/tests/test_storybook.jpg';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {},
    args: {
        comment: {
            id: '1',
            user: {
                id: 1,
                username: 'Username',
            },
            text: 'Comment text',
        },
    },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const WithAvatar: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: 1,
                username: 'Username',
                avatar: AvatarImg,
            },
            text: 'Comment text',
        },
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Gray: Story = {
    args: {},
};
Gray.decorators = [themeDecorator(Theme.GRAY)];
