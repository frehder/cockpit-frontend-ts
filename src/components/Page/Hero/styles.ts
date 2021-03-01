import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.section`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: var(--color-base-500);

    @media ${bp()} {
        height: 40vh;
    }
`;

export const Wrapper = styled.div`
    max-width: var(--grid-6);
    padding: 0 var(--grid-gap);
`;

export const Headline = styled.h1`
    color: var(--color-lightest);
    font-size: var(--font-size-headline-hero);
`;

export const Subline = styled.p`
    margin: var(--space-regular) 0 0;
    color: var(--color-lightest);
    font-size: var(--font-size-headline-medium);
    line-height: 1.5em;
`;
