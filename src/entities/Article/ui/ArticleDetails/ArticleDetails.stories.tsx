import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook';
import { articleMock } from '@/shared/lib/storybookMock/Article/article';
import { FetchArticleErrors } from '../../model/consts/consts';
import { ArticleDetails } from './ArticleDetails';

const meta = {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    parameters: {},
    args: {
        id: '1',
    },
} satisfies Meta<typeof ArticleDetails>;

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

export const Loading: Story = {
    args: {},
};
Loading.decorators = [storeDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error: Story = {
    args: {},
};
Error.decorators = [storeDecorator({
    articleDetails: {
        error: FetchArticleErrors.SERVER_ERROR,
    },
})];
