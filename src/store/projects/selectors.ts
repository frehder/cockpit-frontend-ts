import { TRootState } from '../store';
import { IProject, TProjects } from './types';
import { TSlug, Status } from '../../types/store';

export const selectProjects = (state: TRootState): TProjects => state.projects.entries;

export const selectProject = (slug: TSlug) => (state: TRootState): IProject => state.projects.entries[slug];

export const selectStatus = (state: TRootState): keyof typeof Status => state.projects.status;
