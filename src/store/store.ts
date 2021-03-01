import { configureStore } from '@reduxjs/toolkit';
import homepageReducer, { homepageInitialState } from './homepage/slices';

export const initialState = {
    homepage: homepageInitialState,
};

const rootReducer = {
    homepage: homepageReducer,
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export type TRootState = typeof initialState;
export default store;
