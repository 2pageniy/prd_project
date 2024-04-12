import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleList } from './ArticleList';

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    parameters: {},
    args: {
        articles: [],
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
