import React from 'react';
import { useLocation } from 'react-router-dom';
import { TUrl } from '../types/router';

export const ExternalRoute = (target: TUrl): React.ReactElement | null => {
    window.location.href = target;
    return null;
};

export const ScrollToTop = (): React.ReactElement | null => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
