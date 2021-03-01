import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--color-base-500);
`;

export const Item = styled.div`
    max-width: var(--grid-8);
    margin: 0 auto;
    padding: var(--space-large) var(--grid-gap);
`;

export const Headline = styled.h1`
    margin-bottom: var(--space-regular);
    color: var(--color-lightest);
    font-size: var(--font-size-headline-medium);
`;

export const Content = styled.div`
    color: var(--color-lightest);
`;
