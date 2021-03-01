import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.section`
    position: relative;
    z-index: 100;
    padding-bottom: calc(2 * var(--space-large));

    picture {
        position: absolute;
        z-index: 200;
        top: var(--space-large);
        right: var(--space-large);
        bottom: calc(3 * var(--space-large));
        left: var(--space-large);

        img {
            max-height: 30vh;
        }
    }

    @media ${bp()} {
        padding-bottom: var(--space-large);

        picture {
            bottom: calc(2 * var(--space-large));
        }
    }
`;

export const Headline = styled.h1<{ colorscheme: string }>`
    position: relative;
    z-index: 300;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    max-width: var(--grid-10);
    height: 60vh;
    margin: 0 auto;
    padding: var(--space-large) var(--grid-gap);

    color: ${({ colorscheme }) => {
        switch (colorscheme) {
            case 'light':
                return `var(--color-lightest)`;
                break;
            default:
                return `var(--color-neutral-900)`;
                break;
        }
    }};
    font-size: var(--font-size-headline-hero);
    text-align: center;

    @media ${bp()} {
        height: 40vh;
    }
`;
