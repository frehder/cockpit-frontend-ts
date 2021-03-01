import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { projectsInitialState } from './projects/slices';
import homepageReducer, { homepageInitialState } from './homepage/slices';
import legalReducer, { legalInitialState } from './legal/slices';

export const initialState = {
    projects: projectsInitialState,
    homepage: homepageInitialState,
    legal: legalInitialState,
};

const rootReducer = {
    projects: projectsReducer,
    homepage: homepageReducer,
    legal: legalReducer,
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export type TRootState = typeof initialState;
export default store;
