const fs = require('fs');
const pathResolved = require('./pathResolved');
const createStructure = require('./templates/createStructure');

const createSlice = (layer, slice) => {
    const pathSlice = pathResolved('src', layer, slice);
    fs.mkdirSync(pathSlice);

    createStructure(pathSlice, slice, layer);
};

const init = () => {
    const layer = process.argv[2];
    const slice = process.argv[3];

    const layers = ['pages', 'entities', 'features'];

    if (!layer) {
        throw new Error('layers must be defined');
    }

    if (!layers.includes(layer)) {
        throw new Error('layer must be "pages", "entities" or "features"');
    }

    if (!slice) {
        throw new Error('slice must be defined');
    }

    createSlice(layer, slice);
};

init();
