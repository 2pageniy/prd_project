import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleType } from '../../model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {},
    args: {
        value: ArticleType.ALL,
        onChangeType: fn(),
    },
} satisfies Meta<typeof ArticleTypeTabs>;

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
