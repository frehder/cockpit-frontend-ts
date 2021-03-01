import styled, { keyframes } from 'styled-components';
import { ReactComponent as SpinnerIcon } from '../../assets/Spinner.svg';

const loading = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(1turn);
    }
`;

export const Spinner = styled(SpinnerIcon)`
    width: var(--space-medium);
    animation: ${loading} 1s linear infinite;

    path {
        fill: var(--color-base-500);
    }
`;
