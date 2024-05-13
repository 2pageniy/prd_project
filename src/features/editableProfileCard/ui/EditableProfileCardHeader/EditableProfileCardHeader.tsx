import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileData, getProfileReadonly } from '../../model/selectors';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

export const EditableProfileCardHeader = () => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify='between'>
            <Text
                title={t('Profile')}
            />
            {canEdit && (
                readonly ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                        data-testid='editable-profile-card-header.edit-button'
                    >
                        {t('Edit')}
                    </Button>
                ) : (
                    <HStack gap={8}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                            data-testid='editable-profile-card-header.save-button'
                        >
                            {t('Save')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                            data-testid='editable-profile-card-header.cancel-button'
                        >
                            {t('Cancel')}
                        </Button>

                    </HStack>
                )
            )}

        </HStack>
    );
};
