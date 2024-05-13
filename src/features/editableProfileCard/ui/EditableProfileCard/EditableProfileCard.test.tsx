import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 56,
    currency: Currency.RUB,
    country: Country.ARMENIA,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        ComponentRender(<EditableProfileCard />, options);

        await userEvent.click(screen.getByTestId('editable-profile-card-header.edit-button'));

        expect(screen.getByTestId('editable-profile-card-header.cancel-button')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        ComponentRender(<EditableProfileCard />, options);

        await userEvent.click(screen.getByTestId('editable-profile-card-header.edit-button'));

        await userEvent.clear(screen.getByTestId('profile-card.first-name'));
        await userEvent.clear(screen.getByTestId('profile-card.last-name'));

        await userEvent.type(screen.getByTestId('profile-card.first-name'), 'user');
        await userEvent.type(screen.getByTestId('profile-card.last-name'), 'user');

        expect(screen.getByTestId('profile-card.first-name')).toHaveValue('user');
        expect(screen.getByTestId('profile-card.last-name')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('editable-profile-card-header.cancel-button'));

        expect(screen.getByTestId('profile-card.first-name')).toHaveValue('admin');
        expect(screen.getByTestId('profile-card.last-name')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        ComponentRender(<EditableProfileCard />, options);

        await userEvent.click(screen.getByTestId('editable-profile-card-header.edit-button'));
        await userEvent.clear(screen.getByTestId('profile-card.first-name'));
        await userEvent.click(screen.getByTestId('editable-profile-card-header.save-button'));

        expect(screen.getByTestId('editable-profile-card.error.paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfileCard />, options);

        await userEvent.click(screen.getByTestId('editable-profile-card-header.edit-button'));
        await userEvent.type(screen.getByTestId('profile-card.first-name'), 'user');
        await userEvent.click(screen.getByTestId('editable-profile-card-header.save-button'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
