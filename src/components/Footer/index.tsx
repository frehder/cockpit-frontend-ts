import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';
import { selectBlock } from '../../store/homepage/selectors';
import Brand from './Brand';
import Credits from './Credits';

const Footer = (): React.ReactElement => {
    const hero = useSelector(selectBlock('hero'));

    return (
        <Styled.Container>
            <Brand headline={hero.headline} linkTo="/" />
            <Credits imprintLink="/impressum" privacyLink="/datenschutz" />
        </Styled.Container>
    );
};

export default Footer;
