import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleView } from '../../model/consts/consts';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {},
    args: {
        view: ArticleView.SMALL,
        onViewClick: () => {},
    },
} satisfies Meta<typeof ArticleViewSelector>;

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
