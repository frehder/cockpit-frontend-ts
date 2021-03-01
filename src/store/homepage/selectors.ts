import { TRootState } from '../store';
import { TSlug, IBlock, TBlocks, Status } from '../../types/store';
import { homepageInitialBlock } from './slices';

export const selectBlocks = (state: TRootState): TBlocks => state.homepage.blocks;

export const selectBlock = (slug: TSlug) => (state: TRootState): IBlock => {
    const block = state.homepage.blocks[slug];

    return !!block
        ? block
        : {
              ...homepageInitialBlock,
              slug: slug,
          };
};

export const selectStatus = (state: TRootState): keyof typeof Status => state.homepage.status;
