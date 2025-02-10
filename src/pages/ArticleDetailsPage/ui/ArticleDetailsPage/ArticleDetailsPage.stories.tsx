import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { storeDecorator } from '@/shared/config/storybook';
import { articleMock } from '@/shared/lib/storybookMock/Article/article';
import { ArticleDetailsPage } from './ArticleDetailsPage';

const meta = {
    title: 'pages/Article/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {},
    args: {},
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
Primary.decorators = [storeDecorator({
    articleDetails: {
        data: articleMock,
    },
})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    articleDetails: {
        data: articleMock,
    },
})];
