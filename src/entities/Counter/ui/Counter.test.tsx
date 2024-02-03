import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import RandomValue from 'shared/lib/tests/randomValue/randomValue';
import { Counter } from './Counter';

describe('Counter', () => {
    let value = 0;
    const initialState = {
        counter: {
            value,
        },
    };
    beforeEach(() => {
        const randomNumber = RandomValue.number();
        initialState.counter.value = randomNumber;
        value = randomNumber;
    });
    test('Have counter', () => {
        ComponentRender(<Counter />);
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
    });

    test('Have value counter', () => {
        ComponentRender(<Counter />, { initialState });
        expect(screen.getByTestId('value-title')).toHaveTextContent(value.toString());
    });

    test('Increment counter', () => {
        ComponentRender(<Counter />, { initialState });
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent((value + 1).toString());
    });

    test('Decrement counter', () => {
        ComponentRender(<Counter />, { initialState });
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent((value - 1).toString());
    });
});
