import styled from 'styled-components';
import { bp } from '../../utils/styles';

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: var(--boundary);
    margin: 0 auto;
    padding: var(--space-regular) var(--grid-gap);
`;

export const Brand = styled.div`
    svg {
        height: 32px;
    }

    @media ${bp()} {
        svg {
            height: 42px;
        }
    }
`;

export const Navigation = styled.div``;

// TODO: remove grid stuff
export const HeaderGrid = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    max-width: var(--boundary);
    margin: 0 auto;
    padding: var(--space-regular) var(--grid-gap);
    background-color: orange;
`;

export const BrandGrid = styled.div``;

export const NavigationGrid = styled.div`
    justify-self: end;
`;
