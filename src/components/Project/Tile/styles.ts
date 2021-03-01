import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { bp } from '../../../utils/styles';

export const Container = styled.article`
    position: relative;
    z-index: 100;
    margin-bottom: var(--grid-gap); /* see ../List/styles: Tiles */
    border-radius: var(--radius-default);
    box-shadow: var(--shadow-default);

    @media ${bp(500)} {
        margin-bottom: 0;
    }

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;
export const Link = styled(RouterLink)`
    position: absolute;
    z-index: 200;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: var(--radius-default);

    @media ${bp()} {
        &:hover {
            picture {
                opacity: 0.25;
                transition: var(--transition-default);
            }

            figcaption {
                opacity: 1;
                transition: var(--transition-default);
            }
        }
    }
`;

export const Tile = styled.figure`
    picture {
        position: absolute;
        z-index: 300;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        padding: var(--space-large);
    }

    @media ${bp()} {
        picture {
            padding: calc(1.5 * var(--space-large));
            opacity: 1;
            transition: var(--transition-default);
        }
    }
`;

export const Caption = styled.figcaption<{ colorScheme: string }>`
    position: absolute;
    z-index: 400;
    top: var(--space-medium);
    right: var(--space-medium);
    left: var(--space-medium);

    @media ${bp()} {
        top: var(--space-regular);
        right: var(--space-regular);
        left: var(--space-regular);
        opacity: 0;
        transition: var(--transition-default);
    }

    h2,
    p {
        color: ${({ colorScheme }) => {
            switch (colorScheme) {
                case 'dark':
                    return `var(--color-neutral-900)`;
                    break;

                case 'light':
                default:
                    return `var(--color-lightest)`;
                    break;
            }
        }};
    }
`;
export const Headline = styled.h2`
    font-size: var(--font-size-headline-small);

    @media ${bp()} {
        margin-bottom: var(--space-small);
        font-size: var(--font-size-headline-medium);
    }
`;
export const Subline = styled.p`
    display: none;

    @media ${bp()} {
        display: block;
        font-size: var(--font-size-text-baseline);
    }
`;
