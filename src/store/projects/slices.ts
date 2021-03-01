import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../request';
import { TSlug, Status } from '../../types/store';
import { IProject, IProjectsState } from './types';

export const projectsInitialState: IProjectsState = {
    entries: {},
    status: Status.IDLE,
};

export const getProjects = createAsyncThunk('projects/get', async () => {
    return request
        .get(`/collections/get/project`)
        .then((response) => {
            const entries = response.data.entries;

            if (entries.length <= 0) return projectsInitialState.entries;

            return entries.reduce((entries: Record<TSlug, IProject>, entry: IProject) => {
                return {
                    ...entries,
                    [entry.slug]: entry,
                };
            }, projectsInitialState.entries);
        })
        .catch((error) => {
            console.error('getProjects thunk error:', error);
        });
});

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: projectsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        builder.addCase(getProjects.pending, (state, action) => {
            return {
                ...state,
                status: Status.PENDING,
            };
        });

        builder.addCase(getProjects.fulfilled, (state, { payload }) => {
            return {
                ...state,
                entries: payload,
                status: Status.LOADED,
            };
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        builder.addCase(getProjects.rejected, (state, action) => {
            console.error('getProjects rejected');
            return {
                ...state,
                status: Status.REJECTED,
            };
        });
    },
});

export default projectsSlice.reducer;
