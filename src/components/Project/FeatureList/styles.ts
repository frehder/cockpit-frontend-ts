import styled from 'styled-components';

export const List = styled.ul`
    margin: 0;
    padding: 0 0 0 var(--space-regular);
`;
export const Item = styled.li`
    margin: 0 0 4px;

    &:before {
        content: '\\2022';
        display: inline-block;
        width: var(--space-regular);
        margin-left: calc(-1 * var(--space-regular));
        color: var(--color-base-700);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-text-baseline);
    }
`;
