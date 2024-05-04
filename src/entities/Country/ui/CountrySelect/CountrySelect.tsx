import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
];

export const CountrySelect: FC<CountrySelectProps> = memo(({
    className,
    value,
    onChange = () => {},
    readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange(value as Country);
    }, [onChange]);

    return (
        <ListBox
            defaultValue={t('Select country')}
            label={t('Select country')}
            items={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
            direction='top-right'
            className={className}
        />
    );
});
