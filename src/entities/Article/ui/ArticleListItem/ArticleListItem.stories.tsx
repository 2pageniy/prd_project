import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Img from 'shared/assets/tests/test_storybook.jpg';
import { ArticleBlockType, ArticleType, ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const meta = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {},
    args: {
        article: {
            id: '1',
            title: 'Title',
            subtitle: 'subtitle',
            img: Img,
            views: 10,
            createdAt: '10.02.16',
            type: [ArticleType.IT],
            blocks: [{
                id: '1',
                type: ArticleBlockType.CODE,
                code: 'const a = 5;',
            }],
        },
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
