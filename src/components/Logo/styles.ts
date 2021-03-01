import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
    svg {
        display: block;
    }

    path,
    polygon {
        fill: var(--color-neutral-900);
        transition: var(--transition-default);
    }

    &:hover {
        path,
        polygon {
            fill: var(--color-base-500);
            transition: var(--transition-default);
        }
    }
`;
