import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './models/characterSlice';

const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
});

export default store;
