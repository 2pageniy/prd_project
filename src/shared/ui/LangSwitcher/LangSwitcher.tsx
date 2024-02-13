import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export const LangSwitcher = memo(({
    className,
    short,
}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('lang-switcher', {}, [className])}
            onClick={toggle}
        >
            {t(short ? 'Short language' : 'Language')}
        </Button>
    );
});
