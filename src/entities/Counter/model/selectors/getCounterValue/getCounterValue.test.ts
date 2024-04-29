import { StateSchema } from 'app/providers/StoreProvider';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { getCounterValue } from './getCounterValue';

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
