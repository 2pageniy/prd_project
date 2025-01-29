import { StateSchema } from '@/app/providers/StoreProvider';
import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('selector/addCommentFormSelectors', () => {
    test('should return text', () => {
        const text = RandomValue.string('text');
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text,
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(text);
    });

    test('should return string with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return error', () => {
        const error = RandomValue.string('text');
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error,
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual(error);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
