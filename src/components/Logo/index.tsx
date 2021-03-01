import React from 'react';
import * as Styled from './styles';
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';

interface ILogoProps {
    linkTo?: string;
    logoStyle?: React.CSSProperties;
}

const Logo = ({ linkTo = '/', logoStyle = {} }: ILogoProps): React.ReactElement => {
    return (
        <Styled.Link to={linkTo}>
            <LogoIcon style={logoStyle} />
        </Styled.Link>
    );
};

export default Logo;
