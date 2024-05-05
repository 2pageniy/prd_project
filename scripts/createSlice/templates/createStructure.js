const fs = require('fs');

const path = require('path');
const capitalFirst = require('../utils/capitalFirst');
const createUI = require('./ui/createUI');
const createModel = require('./model/createModel');

module.exports = (pathSlice, nameSlice, layer) => {
    createUI(pathSlice, nameSlice, layer);
    createModel(pathSlice, nameSlice);

    const capitalNameSlice = capitalFirst(nameSlice);
    const template = (
        `export { ${capitalNameSlice} } from './ui/${capitalNameSlice}';
export { ${capitalNameSlice}Schema } from './model/types/${nameSlice}Schema';
`);

    fs.writeFileSync(path.resolve(pathSlice, 'index.ts'), template);
};
