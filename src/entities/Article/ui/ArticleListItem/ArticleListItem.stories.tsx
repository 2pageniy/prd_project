import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { articleMock } from '@/shared/lib/storybookMock/Article/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from './ArticleListItem';

const meta = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {},
    args: {
        article: articleMock,
        view: ArticleView.SMALL,
    },
} satisfies Meta<typeof ArticleListItem>;

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
Dark.decorators = [themeDecorator(Theme.DARK)];
