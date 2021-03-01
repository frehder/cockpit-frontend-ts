import styled from 'styled-components';

export const Container = styled.section`
    max-width: var(--boundary);
    margin: 0 auto var(--space-large);
    padding: 0 var(--grid-gap);
`;

export const Content = styled.div`
    figure {
        display: block;
        margin: 0;
    }
    figcaption {
        padding: var(--space-small);
        font-size: var(--font-size-text-small);
    }
    picture {
        img {
            display: block;
            max-width: 100%;
        }
    }

    .embed-responsive {
        position: relative;
        display: block;
        padding: 0;
        height: 0;
        overflow: hidden;

        &.embed-responsive-16by9 {
            padding-bottom: 56.25%;
        }

        &.embed-responsive-4by3 {
            padding-bottom: 75%;
        }

        iframe,
        video {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
`;
