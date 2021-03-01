import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.article`
    grid-column-start: span 2;
    margin-bottom: var(--grid-gap);

    @media ${bp(500)} {
        margin-bottom: 0;
    }
`;

export const Link = styled.a`
    position: relative;
    z-index: 100;
    display: block;
    padding: var(--space-large);
    background: url(images/code-background.jpg) center / cover no-repeat var(--color-base-900);
    border-radius: var(--radius-default);
    box-shadow: var(--shadow-default);

    h2,
    p {
        color: var(--color-lightest);
    }

    svg {
        position: absolute;
        z-index: 200;
        top: auto;
        right: var(--space-regular);
        bottom: var(--space-regular);
        width: var(--space-regular);

        path {
            fill: var(--color-lightest);
        }
    }

    @media ${bp()} {
        h2,
        p {
            color: var(--color-neutral-300);
            transition: var(--transition-default);
        }
        svg {
            top: var(--space-regular);
            right: var(--space-regular);
            bottom: auto;
            width: calc(0.75 * var(--space-regular));

            path {
                fill: var(--color-neutral-300);
                transition: var(--transition-default);
            }
        }

        &:hover {
            h2,
            p {
                color: var(--color-lightest);
                transition: var(--transition-default);

                &:last-child {
                    color: var(--color-base-500);
                }
            }
            svg path {
                fill: var(--color-base-500);
                transition: var(--transition-default);
            }
        }
    }
`;

export const Wrapper = styled.div`
    @media ${bp(640)} {
        max-width: 80%;
    }
    @media ${bp(1024)} {
        max-width: 62%;
    }
`;

export const Headline = styled.h2`
    font-size: var(--font-size-headline-small);

    @media ${bp()} {
        font-size: var(--font-size-headline-medium);
    }
`;

export const Content = styled.div`
    p {
        margin: calc(0.75 * var(--space-regular)) 0 0;
        font-size: var(--font-size-text-baseline);
    }
`;
