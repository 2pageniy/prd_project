const fs = require('fs');
const path = require('path');
const capitalFirst = require('../../utils/capitalFirst');

module.exports = (pathUI, nameSlice, layer) => {
    const capitalNameSlice = capitalFirst(nameSlice);
    const template = (
        `import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ${capitalNameSlice} } from './${capitalNameSlice}';

const meta = {
    title: '${layer}/${capitalNameSlice}',
    component: ${capitalNameSlice},
    parameters: {},
    args: {},
} satisfies Meta<typeof ${capitalNameSlice}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Gray: Story = {
    args: {},
};
Gray.decorators = [themeDecorator(Theme.GRAY)];
`);

    fs.writeFileSync(path.resolve(pathUI, `${capitalNameSlice}.stories.tsx`), template);
};
