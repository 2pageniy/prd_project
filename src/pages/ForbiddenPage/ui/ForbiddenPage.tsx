import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo(({
    className,
}: ForbiddenPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t('Forbidden Page')}
        </Page>
    );
});

export default ForbiddenPage;
