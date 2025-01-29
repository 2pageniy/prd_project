import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader';

export const suspenseDecorator = (StoryComponent: StoryFn) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
);
