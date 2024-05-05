const fs = require('fs');
const path = require('path');
const createSlice = require('./createSlice');
const createTypes = require('./createTypes');

module.exports = (pathSlice, nameSlice) => {
    const pathModel = path.resolve(pathSlice, 'model');
    // Создание папки model
    fs.mkdirSync(pathModel);

    // Создание внутренний папок
    fs.mkdirSync(path.resolve(pathModel, 'selecotrs'));
    fs.mkdirSync(path.resolve(pathModel, 'services'));
    // Создание слайса
    const pathModelSlice = path.resolve(pathModel, 'slice');
    fs.mkdirSync(pathModelSlice);
    createSlice(pathModelSlice, nameSlice);

    const pathModelTypes = path.resolve(pathModel, 'types');
    fs.mkdirSync(pathModelTypes);
    createTypes(pathModelTypes, nameSlice);
};
