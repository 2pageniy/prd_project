const fs = require('fs');
const path = require('path');
const capitalFirst = require('../../utils/capitalFirst');

module.exports = (pathModelTypes, nameSlice) => {
    const capitalNameSlice = capitalFirst(nameSlice);
    const template = (
        `export interface ${capitalNameSlice}Schema {

}
`);

    fs.writeFileSync(path.resolve(pathModelTypes, `${nameSlice}Schema.ts`), template);
};
