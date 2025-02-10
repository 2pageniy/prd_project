import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleRating } from './ArticleRating';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&article=1`,
                method: 'GET',
                status: 200,
                response: [{
                    rate: 4,
                }],
            },
        ],
    },
    args: { articleId: '1' },
} satisfies Meta<typeof ArticleRating>;

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
