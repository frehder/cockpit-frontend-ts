import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../request';
import { Status, IBlock, TBlocks } from '../../types/store';
import { IHomepageState } from './types';

export const homepageInitialBlock: IBlock = { slug: '', headline: '', content: '' };

export const homepageInitialState: IHomepageState = {
    blocks: {},
    status: Status.IDLE,
};

export const getHomepage = createAsyncThunk('homepage/get', async () => {
    return request
        .get(`/collections/get/homepage`)
        .then((response) => {
            // TODO: this could be a utility function.
            if (response.data.entries.length <= 0) return homepageInitialState.blocks;

            return response.data.entries.reduce((entries: TBlocks, entry: IBlock) => {
                return {
                    ...entries,
                    [entry.slug]: entry,
                };
            }, homepageInitialState.blocks);
        })
        .catch((error) => {
            console.error('getProjects thunk error:', error);
        });
});

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState: homepageInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomepage.pending, (state, _action) => {
            return {
                ...state,
                status: Status.PENDING,
            };
        });

        builder.addCase(getHomepage.fulfilled, (state, { payload }) => {
            return {
                ...state,
                blocks: payload,
                status: Status.LOADED,
            };
        });

        builder.addCase(getHomepage.rejected, (state, _action) => {
            console.error('getHomepage rejected');
            return {
                ...state,
                status: Status.REJECTED,
            };
        });
    },
});

export default homepageSlice.reducer;
