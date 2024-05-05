const fs = require('fs');
const path = require('path');
const capitalFirst = require('../../utils/capitalFirst');

module.exports = (pathUI, nameSlice) => {
    const capitalNameSlice = capitalFirst(nameSlice);
    const template = (
        `import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './${capitalNameSlice}.module.scss';

interface ${capitalNameSlice}Props {
    className?: string;
}

export const ${capitalNameSlice} = memo(({
    className,
}: ${capitalNameSlice}Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.${capitalNameSlice}, {}, [className])}>
            {t('${capitalNameSlice}')}
        </div>
    );
});
`);

    fs.writeFileSync(path.resolve(pathUI, `${capitalNameSlice}.tsx`), template);
};
