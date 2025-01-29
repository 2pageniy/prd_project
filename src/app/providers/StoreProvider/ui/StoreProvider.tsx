import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '@/app/providers/StoreProvider/config/store';
import { StateSchema, StateSchemaAsync } from '@/app/providers/StoreProvider/config/StateSchema';

export interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchemaAsync>>;
    children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
