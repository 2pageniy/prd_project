import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter', () => {
        const value = RandomValue.number();
        const state: DeepPartial<StateSchema> = {
            counter: {
                value,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value });
    });
});
