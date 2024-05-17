import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleSortField } from '../../model/consts/consts';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {},
    args: {
        sort: ArticleSortField.VIEWS,
        order: 'asc',
        onChangeOrder: fn(),
        onChangeSort: fn(),
    },
} satisfies Meta<typeof ArticleSortSelector>;

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
