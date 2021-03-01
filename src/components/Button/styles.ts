import styled from 'styled-components';
import { bp } from '../../utils/styles';
import { TButtonType } from '.';

export const Container = styled.div`
    display: inline-block;
`;

export const Button = styled.button<{ buttonType: TButtonType }>`
    color: ${({ buttonType }) => {
        switch (buttonType) {
            case 'primary':
                return 'var(--color-neutral-100)';
            default:
                return 'var(--color-base-500)';
        }
    }};
    background-color: ${({ buttonType }) => {
        switch (buttonType) {
            case 'primary':
                return 'var(--color-base-500)';
            default:
                return 'transparent';
        }
    }};
    border: ${({ buttonType }) => {
        switch (buttonType) {
            case 'primary':
                return '2px solid transparent';
            default:
                return '2px solid var(--color-base-500)';
        }
    }};
    padding: var(--space-regular) var(--space-large);
    font-size: var(--font-size-text-regular);
    border-radius: var(--radius-default);
    outline: 0;
    cursor: pointer;
    transition: var(--transition-default);

    @media ${bp()} {
        padding: var(--space-small) var(--space-medium);
    }

    &:hover,
    &:focus {
        color: ${({ buttonType }) => {
            switch (buttonType) {
                case 'primary':
                    return 'var(--color-lightest)';
                default:
                    return 'var(--color-base-700)';
            }
        }};
        background-color: ${({ buttonType }) => {
            switch (buttonType) {
                case 'primary':
                    return 'var(--color-base-700)';
                default:
                    return 'transparent';
            }
        }};
        border: ${({ buttonType }) => {
            switch (buttonType) {
                case 'primary':
                    return '2px solid transparent';
                default:
                    return '2px solid var(--color-base-700)';
            }
        }};
        transition: var(--transition-default);
    }

    &[disabled]:hover,
    &[disabled]:focus {
        color: var(--color-neutral-500);
        background-color: var(--color-neutral-300);
        cursor: auto;
    }
`;
