
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    reducer as FovaritesReducer,
} from './favorites/fovarites.slice';

const reducers = combineReducers({
    favorites: FovaritesReducer,
});

export const store = configureStore({
    reducer: reducers,
});

