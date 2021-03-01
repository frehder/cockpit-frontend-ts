import React from 'react';
import * as Styled from './styles';

export type TButtonType = 'default' | 'primary';

interface IButtonProps {
    label?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: TButtonType;
    buttonStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
}

const Button = ({
    label = '',
    onClick,
    type = 'primary',
    buttonStyle = {},
    containerStyle = {},
}: IButtonProps): React.ReactElement => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <Styled.Container style={containerStyle}>
            <Styled.Button style={buttonStyle} buttonType={type} onClick={handleClick}>
                {label}
            </Styled.Button>
        </Styled.Container>
    );
};

export default Button;
