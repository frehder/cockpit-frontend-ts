import { configureStore } from '@reduxjs/toolkit';
import projectsReducer, { projectsInitialState } from './projects/slices';
import homepageReducer, { homepageInitialState } from './homepage/slices';

export const initialState = {
    projects: projectsInitialState,
    homepage: homepageInitialState,
};

const rootReducer = {
    projects: projectsReducer,
    homepage: homepageReducer,
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export type TRootState = typeof initialState;
export default store;
