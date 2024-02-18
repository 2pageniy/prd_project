import { StoryFn } from '@storybook/react';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const authDecorator = () => (StoryComponent: StoryFn) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({}));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <StoryComponent />
    );
};
