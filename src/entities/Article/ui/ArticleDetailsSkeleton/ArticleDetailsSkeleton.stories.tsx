import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

const meta = {
    title: 'entities/Article/ArticleDetailsSkeleton',
    component: ArticleDetailsSkeleton,
    parameters: {},
    args: {},
} satisfies Meta<typeof ArticleDetailsSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
