import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Without params', () => {
        render(
            <Button>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With theme params', () => {
        render(
            <Button theme={ThemeButton.CLEAR}>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
