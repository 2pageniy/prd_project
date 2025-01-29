import RandomValue from '@/shared/lib/tests/randomValue/randomValue';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('slice/addCommentFormSlice', () => {
    let text = '';
    let updateText = '';

    beforeEach(() => {
        text = RandomValue.string('text');
        updateText = RandomValue.string('update-text');
    });

    test('set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text,
        };

        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText(updateText),
        )).toEqual({
            text: updateText,
        });
    });
});
