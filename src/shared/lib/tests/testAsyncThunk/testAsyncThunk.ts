import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { $api } from 'shared/api/api';

type ActionCreateType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreate: ActionCreateType<Return, Arg, RejectedValue>;

    constructor(actionCreate: ActionCreateType<Return, Arg, RejectedValue>) {
        this.actionCreate = actionCreate;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreate(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: $api },
        );

        return result;
    }
}
