const fs = require('fs');
const path = require('path');
const capitalFirst = require('../../utils/capitalFirst');

module.exports = (pathUI, nameSlice) => {
    const capitalNameSlice = capitalFirst(nameSlice);
    const template = (
        `.${capitalNameSlice} {

}
`);

    fs.writeFileSync(path.resolve(pathUI, `${capitalNameSlice}.module.scss`), template);
};
