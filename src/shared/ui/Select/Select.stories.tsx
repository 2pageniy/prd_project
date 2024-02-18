import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {},
    args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const WithOption: Story = {
    args: {
        options: [
            { value: 'value0', content: 'content0' },
            { value: 'value1', content: 'content1' },
            { value: 'value2', content: 'content2' },
            { value: 'value3', content: 'content3' },
            { value: 'value4', content: 'content4' },
            { value: 'value5', content: 'content5' },
        ],
    },
};

export const WithOptionDark: Story = {
    args: {
        options: [
            { value: 'value0', content: 'content0' },
            { value: 'value1', content: 'content1' },
            { value: 'value2', content: 'content2' },
            { value: 'value3', content: 'content3' },
            { value: 'value4', content: 'content4' },
            { value: 'value5', content: 'content5' },
        ],
    },
};
WithOptionDark.decorators = [themeDecorator(Theme.DARK)];

export const WithLabel: Story = {
    args: {
        label: 'label',
    },
};
