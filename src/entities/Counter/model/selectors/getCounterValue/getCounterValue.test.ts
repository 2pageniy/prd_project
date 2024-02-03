import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const value = RandomValue.number();
        const state: DeepPartial<StateSchema> = {
            counter: {
                value,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(value);
    });
});
