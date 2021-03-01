import { TBlocks, Status } from '../../types/store';

export interface ILegalState {
    blocks: TBlocks;
    status: keyof typeof Status;
}
