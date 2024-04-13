import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

const meta = {
    title: 'entities/Article/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
    parameters: {},
    args: {
        view: ArticleView.SMALL,
    },
} satisfies Meta<typeof ArticleListItemSkeleton>;

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

export const ViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
