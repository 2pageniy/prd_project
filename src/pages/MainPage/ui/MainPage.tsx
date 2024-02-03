import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            <Counter />
            {t('Main page')}
        </div>
    );
};

export default MainPage;
