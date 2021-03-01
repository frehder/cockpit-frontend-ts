import styled from 'styled-components';

export const Container = styled.section`
    padding: var(--space-large) var(--grid-gap);
    text-align: center;

    svg {
        max-height: calc(var(--space-large));
    }

    a svg {
        path,
        polygon {
            fill: var(--color-lightest);
            transition: var(--transition-default);
        }
    }

    a:hover svg {
        path,
        polygon {
            fill: var(--color-neutral-300);
            transition: var(--transition-default);
        }
    }
`;

export const Headline = styled.h2`
    margin: var(--space-regular) 0;
    font-size: var(--font-size-headline-medium);
`;
