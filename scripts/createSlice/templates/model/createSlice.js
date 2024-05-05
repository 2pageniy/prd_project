const fs = require('fs');
const path = require('path');
const capitalFirst = require('../../utils/capitalFirst');

module.exports = (pathModelSlice, nameSlice) => {
    const capitalNameSlice = capitalFirst(nameSlice);
    const template = (
        `import { createSlice } from '@reduxjs/toolkit';
import { ${capitalNameSlice}Schema } from '../types/${nameSlice}Schema';

const initialState: ${capitalNameSlice}Schema = {

};

export const ${nameSlice}Slice = createSlice({
    name: '${nameSlice}',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state: PayloadAction<string>) => {
    //         })
    //         .addCase(, (state, action: PayloadAction<string>) => {
    //         })
    //         .addCase(, (state, action: PayloadAction<string>) => {
    //         });
    // },

});

export const { actions: ${nameSlice}Actions } = ${nameSlice}Slice;
export const { reducer: ${nameSlice}Reducer } = ${nameSlice}Slice;
`);

    fs.writeFileSync(path.resolve(pathModelSlice, `${nameSlice}Slice.ts`), template);
};
