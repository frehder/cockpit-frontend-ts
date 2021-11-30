import styled, { css } from 'styled-components';
import { bp } from '../../utils/styles';

export const Container = styled.section`
    max-width: var(--grid-6);
    margin: 0 auto;
    padding: 0 var(--grid-gap) var(--space-large);
`;
// padding: var(--space-large) var(--grid-gap);

export const Alert = styled.div<{ alertType: string }>`
    margin-bottom: var(--space-regular);
    padding: var(--space-small) var(--space-regular);
    color: var(--color-lightest);
    background-color: ${({ alertType }) => `var(--color-${alertType}-700)`};
    border-radius: var(--radius-default);
`;

export const FormGroup = styled.div`
    padding: var(--space-regular) 0;

    &.form-field-error {
        textarea,
        input {
            border-color: var(--color-error-700);
        }
    }
`;

export const Label = styled.label`
    display: block;
    padding: 0 var(--space-small) calc(0.5 * var(--space-small)) var(--space-small);
    color: var(--color-neutral-900);
    font-size: var(--font-size-text-small);
`;

const InputStyles = css`
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: var(--space-small);
    font-size: var(--font-text-baseline);
    font-family: var(--font-family-regular);
    background-color: var(--color-neutral-300);
    border: 2px solid transparent;
    border-radius: var(--radius-default);
    transition: var(--transition-default);
    outline: 0;
`;
export const Input = styled.input`
    ${InputStyles}
`;
export const Textarea = styled.textarea`
    ${InputStyles}
`;

export const Help = styled.span`
    display: block;
    padding: var(--space-regular) 0;
    font-size: var(--font-size-text-small);

    @media ${bp(400)} {
        display: inline-block;
        padding: var(--space-small) 0 0 var(--space-regular);
    }
`;
