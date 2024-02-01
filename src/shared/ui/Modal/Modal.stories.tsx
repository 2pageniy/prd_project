import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
    },
    args: {
        onClose: () => {},
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Sed sit amet urna ipsum. Nulla ac mollis metus.',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
    },
};
Dark.decorators = [themeDecorator(Theme.DARK)];
