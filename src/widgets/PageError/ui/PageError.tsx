import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls['page-error'], {}, [className])}>
            <p>{t('Unexpected error occurred')}</p>
            <Button
                theme={ThemeButton.BASE}
                onClick={reloadPage}
            >
                {t('Reload page')}
            </Button>
        </div>
    );
};
