import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from '../Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
    },
    args: {
        isOpen: true,
        onClose: () => {},
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Sed sit amet urna ipsum. Nulla ac mollis metus.',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
