import { TRootState } from '../store';
import { TSlug, TBlocks, IBlock, Status } from '../../types/store';
import { legalInitialBlock } from './slices';

export const selectBlocks = (state: TRootState): TBlocks => state.legal.blocks;

export const selectBlock = (slug: TSlug) => (state: TRootState): IBlock => {
    const block = state.legal.blocks[slug];

    return !!block
        ? block
        : {
              ...legalInitialBlock,
              slug: slug,
          };
};

export const selectStatus = (state: TRootState): keyof typeof Status => state.legal.status;
