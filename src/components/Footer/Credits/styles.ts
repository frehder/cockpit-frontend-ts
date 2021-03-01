import styled from 'styled-components';
import { bp } from '../../../utils/styles';

export const Container = styled.section``;

export const Text = styled.p`
    margin: 0;
    padding: var(--space-regular) var(--grid-gap);
    text-align: center;

    &,
    a {
        color: var(--color-lightest);
        font-size: var(--font-size-text-small);
    }
    a:hover {
        color: var(--color-neutral-300);
    }

    @media ${bp()} {
        &,
        a {
            font-size: var(--font-size-text-baseline);
        }
    }
`;
