import { Status, TSlug } from '../../types/store';

interface IImageMeta {
    styles?: string;
    title?: string;
}

export interface IImage {
    path: string;
    meta?: IImageMeta;
}

export interface IInfoFeatureList {
    value: string;
}

export interface IProject {
    slug: TSlug;
    is_published: boolean;
    publish_date: Date;
    header_background_color?: string;
    header_headline?: string;
    header_headline_color?: string;
    header_image?: IImage;
    header_image_style?: string;
    info_feature_list?: IInfoFeatureList[];
    info_meta?: string;
    info_text?: string;
    project_content?: string;
    project_content_styles?: string;
}

export type TProjects = Record<TSlug, IProject>;

export interface IProjectsState {
    entries: TProjects;
    status: keyof typeof Status;
}

export type TProjectEntries = (string | IProject)[];
