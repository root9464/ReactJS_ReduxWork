/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleToFavites(state, { payload: recipe }) {
            if (state.some(r => r.id === recipe.id)) {
                const index = state.findIndex(item => item.id === recipe.id);
                if (index !== -1) {
                    state.splice(index, 1);
                }
            } else {
                state.push(recipe);
            }
        },
    },
});

export const { actions, reducer } = favoritesSlice;
