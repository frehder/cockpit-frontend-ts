import styled from 'styled-components';
import { bp } from '../../utils/styles';

export const Container = styled.section`
    position: relative;
    z-index: 100;
    padding: var(--space-regular) var(--grid-gap);

    &:after {
        content: '';
        position: absolute;
        z-index: 200;
        background-color: var(--color-lightest);
        top: 0;
        right: 0;
        left: 0;
        height: calc(1.5 * var(--space-large));
    }

    @media ${bp(900)} {
        &:after {
            height: calc(1.5 * var(--space-medium));
        }
    }
`;

export const Wrapper = styled.div`
    position: relative;
    z-index: 300;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    padding: var(--space-medium) 0;
    max-width: var(--grid-10);
    background-color: var(--color-base-900);
    box-shadow: var(--shadow-dark);
    border-radius: var(--radius-default);

    @media ${bp()} {
        padding: var(--space-regular) 0;
    }

    @media ${bp(900)} {
        flex-direction: row;
        padding: 0;
    }
`;

export const Item = styled.div`
    flex: 1 1 100%;
    padding: var(--space-small) var(--space-regular);
    text-align: center;

    @media ${bp(900)} {
        padding: var(--space-regular);
    }

    @media ${bp(900)} {
        flex: 1 1 30%;
        padding: var(--space-medium) var(--space-regular);

        &:nth-child(2) {
            flex: 1 1 40%;
        }
    }
`;

export const Headline = styled.h3`
    color: var(--color-lightest);
    font-size: var(--font-size-headline-medium);
`;

export const Text = styled.p`
    margin: 0 0 var(--space-regular);
    color: var(--color-lightest);

    @media ${bp()} {
        margin: 0 0 var(--space-small);
    }

    @media ${bp(900)} {
        margin: 0;
    }
`;
