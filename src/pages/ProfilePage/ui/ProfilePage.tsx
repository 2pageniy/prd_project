import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>();
    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
