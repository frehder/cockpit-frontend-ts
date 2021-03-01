import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { bp } from '../../../utils/styles';

export const Container = styled.nav``;

export const Link = styled(NavLink)`
    display: inline-block;
    margin-left: var(--space-regular);
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-text-large);

    &.active {
        color: var(--color-base-700);
    }

    &,
    &.active {
        &:hover {
            color: var(--color-base-500);
        }
    }

    @media ${bp()} {
        margin-left: var(--space-medium);
    }
`;
