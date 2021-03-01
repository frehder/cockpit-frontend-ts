import styled from 'styled-components';

export const Container = styled.section`
    max-width: var(--grid-6);
    min-height: 40vh;
    margin: 0 auto;
    padding: var(--space-large) var(--grid-gap);
`;

export const Headline = styled.h1`
    font-size: var(--font-size-headline-large);
    margin-bottom: var(--space-regular);
`;

export const Content = styled.div`
    h2,
    h3,
    h4 {
        margin: var(--space-regular) 0 var(--space-small);
    }
    h2 {
        font-size: var(--font-size-headline-medium);
    }
    h3,
    h4 {
        font-size: var(--font-size-headline-small);
    }
    ul {
        list-style-type: disc;
        padding: 0 0 0 var(--space-medium);
    }
    li {
        margin-bottom: var(--space-small);
    }
`;
