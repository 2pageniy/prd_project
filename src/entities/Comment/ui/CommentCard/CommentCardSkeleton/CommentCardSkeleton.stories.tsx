import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCardSkeleton } from './CommentCardSkeleton';

const meta = {
    title: 'entities/Comment/CommentCardSkeleton',
    component: CommentCardSkeleton,
    parameters: {},
    args: {},
} satisfies Meta<typeof CommentCardSkeleton>;

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
