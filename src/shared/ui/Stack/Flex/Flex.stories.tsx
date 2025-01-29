/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {},
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {},
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
};

export const RowGap4: Story = {
    args: {
        gap: 4,
    },
};

export const RowGap8: Story = {
    args: {
        gap: 8,
    },
};

export const RowGap16: Story = {
    args: {
        gap: 16,
    },
};

export const RowGap32: Story = {
    args: {
        gap: 32,
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: 4,
    },
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: 8,
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: 16,
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: 32,
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
    },
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Gray: Story = {
    args: {},
};
Gray.decorators = [themeDecorator(Theme.GRAY)];
