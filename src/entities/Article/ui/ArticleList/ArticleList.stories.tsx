import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { articleMock } from 'shared/lib/storybookMock/Article/article';
import { ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    parameters: {},
    args: {
        articles: Array(5).fill(0).map((_, index) => ({
            ...articleMock,
            id: index.toString(),
        })),
    },
} satisfies Meta<typeof ArticleList>;

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

export const Empty: Story = {
    args: {
        articles: [],
    },
};

export const IsLoading: Story = {
    args: {
        articles: [],
        isLoading: true,
    },
};

export const ViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
};

export const ViewBigLoading: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.BIG,
    },
};

export const ViewSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const ViewSmallLoading: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.SMALL,
    },
};
