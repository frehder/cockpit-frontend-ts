import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../request';
import { Status, IBlock, TBlocks } from '../../types/store';
import { ILegalState } from './types';

export const legalInitialBlock: IBlock = { slug: '', headline: '', content: '' };

export const legalInitialState: ILegalState = {
    blocks: {},
    status: Status.IDLE,
};

export const getLegal = createAsyncThunk('legal/get', async () => {
    return request
        .get(`/collections/get/legal`)
        .then((response) => {
            // TODO: this could be a utility function.
            if (response.data.entries.length <= 0) return legalInitialState.blocks;

            return response.data.entries.reduce((entries: TBlocks, entry: IBlock) => {
                return {
                    ...entries,
                    [entry.slug]: entry,
                };
            }, legalInitialState.blocks);
        })
        .catch((error) => {
            console.error('getProjects thunk error:', error);
        });
});

export const legalSlice = createSlice({
    name: 'legal',
    initialState: legalInitialState,
    reducers: {},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        builder.addCase(getLegal.pending, (state, action) => {
            return {
                ...state,
                status: Status.PENDING,
            };
        });

        builder.addCase(getLegal.fulfilled, (state, { payload }) => {
            return {
                ...state,
                blocks: payload,
                status: Status.LOADED,
            };
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        builder.addCase(getLegal.rejected, (state, action) => {
            console.error('getLegal rejected');
            return {
                ...state,
                status: Status.REJECTED,
            };
        });
    },
});

export default legalSlice.reducer;
