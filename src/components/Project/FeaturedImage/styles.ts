import styled from 'styled-components';

export const Visual = styled.picture`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    opacity: 0.25;
`;

export const Image = styled.img`
    display: block;
    max-width: 100%;
    max-height: 100%;
`;
