const fs = require('fs');
const path = require('path');
const createComponent = require('./createComponent');
const createStyles = require('./createStyles');
const createStories = require('./createStories');

module.exports = (pathSlice, nameSlice, layer) => {
    const pathUI = path.resolve(__dirname, pathSlice, 'ui');
    // Создание папки ui
    fs.mkdirSync(pathUI);

    createComponent(pathUI, nameSlice);
    createStyles(pathUI, nameSlice);
    createStories(pathUI, nameSlice, layer);
};
