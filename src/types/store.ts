export type TSlug = string;

export interface IBlock {
    slug: TSlug;
    headline: string;
    content: string;
    _mby?: string;
    _by?: string;
    _modified?: Date;
    _created?: Date;
    _id?: string;
}

export type TBlocks = Record<TSlug, IBlock>;

export enum Status {
    IDLE = 'IDLE',
    PENDING = 'PENDING',
    LOADED = 'LOADED',
    REJECTED = 'REJECTED',
}
