import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './models/characterSlice';

const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
