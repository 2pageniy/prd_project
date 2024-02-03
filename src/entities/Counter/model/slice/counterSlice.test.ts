import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    let value = 0;
    beforeEach(() => {
        value = RandomValue.number();
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value,
        };
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: value - 1 });
    });

    test('increment', () => {
        const state: CounterSchema = {
            value,
        };
        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: value + 1 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
