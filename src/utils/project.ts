import { TProjectEntries } from '../store/projects/types';
import { TCompareFunction } from '../types/utils';

export const sortByPublishDate = (
    [_slug1, data1]: TProjectEntries,
    [_slug2, data2]: TProjectEntries,
): TCompareFunction => {
    if (typeof data1 !== 'object' || typeof data2 !== 'object') return 0;

    const date1 = new Date(data1.publish_date);
    const date2 = new Date(data2.publish_date);

    if (date1 < date2) return 1;
    if (date1 > date2) return -1;
    return 0;
};
