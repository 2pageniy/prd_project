import { memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({
    className,
}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('theme-switcher', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <DarkIcon />
            ) : (
                <LightIcon />
            )}
        </Button>

    );
});
