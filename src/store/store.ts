import { configureStore } from '@reduxjs/toolkit';

export const initialState = {
};

const rootReducer = {
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export type TRootState = typeof initialState;
export default store;
