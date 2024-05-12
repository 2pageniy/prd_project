import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/test_storybook.jpg';
import { FetchProfileErrors } from 'features/editableProfileCard';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {},
    args: {
        data: {
            first: 'Vladislav',
            lastname: 'Hello',
            age: 21,
            currency: Currency.RUB,
            country: Country.RUSSIA,
            city: 'Saint-Petersburg',
            username: 'admin123',
            avatar,
        },
    },

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const isLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const WithError: Story = {
    args: {
        error: FetchProfileErrors.FORBIDDEN,
    },
};
