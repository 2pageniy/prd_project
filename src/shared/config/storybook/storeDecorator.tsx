import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const storeDecorator = (StoryComponent: StoryFn) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
