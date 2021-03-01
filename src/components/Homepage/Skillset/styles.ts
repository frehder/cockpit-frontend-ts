import styled from 'styled-components';
import { bp } from '../../../utils/styles';
import { ReactComponent as DesignIcon } from '../../../assets/Design.svg';
import { ReactComponent as CodeIcon } from '../../../assets/Code.svg';

export const Container = styled.section`
    position: relative;
    z-index: 100;

    &:after {
        content: '';
        position: absolute;
        z-index: 200;
        top: 0;
        right: 0;
        left: 0;
        height: var(--space-large);
        background-color: var(--color-base-500);
    }
`;

export const Deck = styled.div`
    position: relative;
    z-index: 300;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    max-width: var(--grid-10);
    margin: 0 auto;
    padding: 0 var(--grid-gap) var(--space-medium);

    @media ${bp(720)} {
        flex-direction: row;
    }
`;

export const Card = styled.div`
    flex: 1 1 100%;
    margin-bottom: var(--space-medium);
    padding: var(--space-medium) var(--space-regular);
    background-color: var(--color-lightest);
    border-radius: var(--radius-default);
    box-shadow: var(--shadow-default);

    @media ${bp(720)} {
        flex-basis: 50%;
        margin-bottom: 0;
        padding: var(--space-regular);

        &:nth-child(1) {
            margin-right: calc(0.5 * var(--grid-gap));
        }

        &:nth-child(2) {
            margin-left: calc(0.5 * var(--grid-gap));
        }
    }
`;

export const Design = styled(DesignIcon)``;
export const Code = styled(CodeIcon)``;

export const Headline = styled.h2`
    margin-bottom: var(--space-small);
    font-size: var(--font-size-headline-medium);

    svg {
        height: var(--font-size-headline-small);
        margin: 0 var(--space-regular) -1px 0;

        path {
            fill: var(--color-base-700);
        }
    }
`;

export const Content = styled.div`
    overflow: hidden;

    h3 {
        margin: var(--space-regular) 0 var(--space-small);
        color: var(--color-base-700);
    }
    p {
        margin: 0;
    }
    ul {
        margin: 0;
        padding: 0 0 0 var(--space-regular);
    }
    li {
        margin: 0 0 4px;
    }
    li:before {
        content: '\\2022';
        display: inline-block;
        width: var(--space-regular);
        margin-left: calc(-1 * var(--space-regular));
        color: var(--color-base-700);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-text-baseline);
    }
    .col {
        width: 50%;
        float: left;
    }
`;
