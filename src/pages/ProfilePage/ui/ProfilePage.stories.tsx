import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/test_storybook.jpg';
import ProfilePage from './ProfilePage';

const profileData = storeDecorator({
    profile: {
        form: {
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
});

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};
Light.decorators = [profileData];

export const Dark: Story = {
    args: {
    },
};
Dark.decorators = [profileData, themeDecorator(Theme.DARK)];
