import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta = {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {},
    args: {},
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
