import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta = {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {},
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.IMAGE,
            title: 'Title',
            src: '',
        },
    },
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
