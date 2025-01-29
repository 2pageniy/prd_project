import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AvatarImg from '@/shared/assets/tests/avatar.jpg';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {},
    args: {
        comments: [
            {
                id: '1',
                user: {
                    id: '1',
                    username: 'some user',
                },
                text: 'some comment',
            },
            {
                id: '2',
                user: {
                    id: '2',
                    username: 'some user2',
                },
                text: 'some comment 2',
            },
        ],
    },
} satisfies Meta<typeof CommentList>;

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

export const UserWithAvatar: Story = {
    args: {
        comments: [
            {
                id: '2',
                user: {
                    id: '2',
                    username: 'some user with avatar',
                    avatar: AvatarImg,
                },
                text: 'some comment',
            },
        ],
    },
};

export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
