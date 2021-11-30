import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.main``;

export const Header = styled.header`
    padding: var(--space-small) var(--grid-gap) var(--space-medium);
`;
// padding: var(--space-medium) var(--grid-gap) var(--space-large);

export const Headline = styled.h3`
    font-size: var(--font-size-headline-medium);
    text-align: center;
`;

export const Subline = styled.p`
    margin: var(--space-small) 0 0;
    font-size: var(--font-size-text-large);
    text-align: center;
`;

export const Tiles = styled.div`
    max-width: var(--grid-10);
    margin: 0 auto var(--space-large);
    padding: 0 var(--grid-gap);

    @media ${bp(500)} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--grid-gap);
    }
`;
