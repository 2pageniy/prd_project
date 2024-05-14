import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Page } from 'widgets/Page';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input';
import { ListBox } from 'shared/ui/ListBox';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <BugButton />
            <Counter />
            <ListBox
                defaultValue='YA GAYYA GAYYA GAYYA GAY'
                onChange={() => {}}
                value={undefined}
                items={[
                    { value: '1', content: '123' },
                    { value: '2', content: '1234' },
                    { value: '3', content: '1235', disabled: true },
                ]}
            />

            <Input
                placeholder='SALUT'
                value={value}
                onChange={onChange}
            />
            {t('Main page')}
        </Page>
    );
};

export default MainPage;
