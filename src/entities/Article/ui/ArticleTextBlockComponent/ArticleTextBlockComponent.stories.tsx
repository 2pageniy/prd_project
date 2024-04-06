import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta = {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    parameters: {},
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.TEXT,
            paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.'],
            title: 'Title',
        },
    },
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
