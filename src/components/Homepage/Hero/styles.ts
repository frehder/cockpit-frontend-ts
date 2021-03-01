import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.section<{ bgimg: string }>`
    --hero-image-size: 200px; /* use image size for img width and content min-height */

    position: relative;
    z-index: 100;

    @media ${bp()} {
        --hero-image-size: 320px;
        background-image: ${({ bgimg }) => `url(${bgimg})`};

        /* White gradient overlay on top and bottom */
        &:after {
            content: '';
            position: absolute;
            z-index: 200;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: var(--color-lightest);
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 60%,
                rgba(255, 255, 255, 1) 100%
            );
        }
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 300;
    display: flex;
    flex-direction: column-reverse; /* reverse order on mobile: img top, text bottom */
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    max-width: var(--grid-10);
    height: 70vh;
    min-height: var(--hero-image-size);
    margin: 0 auto;
    padding: var(--space-regular) var(--grid-gap);

    @media ${bp()} {
        flex-direction: row;
        justify-content: space-between;
        padding: var(--space-medium) var(--grid-gap) var(--space-large);
    }
`;

export const Headline = styled.div`
    h1,
    p {
        text-align: center;
    }
    h1 {
        margin: var(--space-medium) 0 var(--space-regular);
        font-size: var(--font-size-headline-hero);

        span {
            display: block;
            color: var(--color-base-500);
        }
    }
    p {
        font-size: var(--font-size-text-hero);
        line-height: 1.5em;
    }

    @media ${bp()} {
        flex: 1 1 50%;
        margin-top: 0;

        h1,
        p {
            max-width: 580px; /* fixed max width for better readability */
            text-align: left;
        }
        h1 {
            margin-top: 0;
        }
    }
`;

export const Avatar = styled.figure`
    img {
        display: block;
        max-width: var(--hero-image-size);
        margin: 0 auto;
    }

    @media ${bp()} {
        flex: 1 1 50%;
    }
`;
