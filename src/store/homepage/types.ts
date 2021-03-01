import { TBlocks, Status } from '../../types/store';

export interface IHomepageState {
    blocks: TBlocks;
    status: keyof typeof Status;
}
