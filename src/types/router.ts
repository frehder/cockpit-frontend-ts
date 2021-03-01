import { TSlug } from './store';

// NOTE: string for now, but not perfect.
export type TUrl = string;

export interface IUrlParams {
    projectSlug: TSlug;
}
