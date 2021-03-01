import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';
import { selectBlock } from '../../store/homepage/selectors';
import Brand from './Brand';

const Footer = (): React.ReactElement => {
    const hero = useSelector(selectBlock('hero'));

    return (
        <Styled.Container>
            <Brand headline={hero.headline} linkTo="/" />
        </Styled.Container>
    );
};

export default Footer;
