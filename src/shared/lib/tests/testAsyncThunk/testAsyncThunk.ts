import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';
import { $api } from '@/shared/api/api';

type ActionCreateType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

jest.mock('shared/api/api');

const mockedAxios = jest.mocked($api);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreate: ActionCreateType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosInstance>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreate: ActionCreateType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreate = actionCreate;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreate(arg);
        console.log(action, this.actionCreate);
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            },
        );

        return result;
    }
}
