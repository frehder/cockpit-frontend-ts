import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.section`
    position: relative;
    z-index: 400;
    margin-top: calc(-2 * var(--space-large));
    padding: 0 var(--grid-gap) var(--space-large);

    @media ${bp()} {
        margin-top: calc(-1 * var(--space-large));
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--grid-10);
    margin: 0 auto;
    padding: var(--space-regular);
    background-color: var(--color-lightest);
    border-radius: var(--radius-default);
    box-shadow: var(--shadow-default);

    @media ${bp()} {
        flex-wrap: nowrap;
        flex-direction: row;
    }
`;

export const Content = styled.div`
    flex: 1 1 100%;

    @media ${bp()} {
        flex-basis: 60%;
        margin-right: calc(0.5 * var(--grid-gap));
    }
`;
export const Headline = styled.h3`
    margin-bottom: var(--space-regular);
    font-size: var(--font-size-headline-medium);
`;
export const Text = styled.div``;

export const Features = styled.aside`
    flex: 1 1 100%;

    @media ${bp()} {
        flex-basis: 40%;
        margin-left: calc(0.5 * var(--grid-gap));
    }
`;

export const FeatureHeadline = styled.h4`
    margin-bottom: var(--space-regular);
    font-size: var(--font-size-headline-medium);
`;
