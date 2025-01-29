import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta = {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {},
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.CODE,
            code: 'const a = 5;',
        },
    },
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
