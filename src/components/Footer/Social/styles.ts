import styled from 'styled-components';

export const Container = styled.section`
    padding: 0 var(--grid-gap);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    padding: 0 var(--space-regular);

    svg {
        height: calc(0.75 * var(--space-large));

        polygon,
        path {
            fill: var(--color-lightest);
            transition: var(--transition-default);
        }
    }

    &:hover {
        svg {
            polygon,
            path {
                fill: var(--color-neutral-300);
                transition: var(--transition-default);
            }
        }
    }
`;
