import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            <Counter />
            <Input
                placeholder='SALUT'
                value={value}
                onChange={onChange}
            />
            {t('Main page')}
        </div>
    );
};

export default MainPage;
