import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';
import { selectBlock } from '../../store/homepage/selectors';
// import CallToAction from '../CallToAction';
import Brand from './Brand';
import Social from './Social';
import { ReactComponent as GithubIcon } from '../../assets/Github.svg';
import { ReactComponent as XingIcon } from '../../assets/Xing.svg';
import { ReactComponent as InstagramIcon } from '../../assets/Instagram.svg';
import Credits from './Credits';

const Footer = (): React.ReactElement => {
    const cta = useSelector(selectBlock('cta'));
    const hero = useSelector(selectBlock('hero'));

    return (
        <Styled.Container>
    {/*
            <CallToAction
                headline={cta.headline}
                text={cta.content}
                button={{ label: 'Kontakt aufnehmen', link: '/kontakt' }}
            />
    */}
            <Brand headline={hero.headline} linkTo="/" />
            <Social
                items={{
                    github: { link: 'https://github.com/frehder/', icon: <GithubIcon /> },
                    xing: { link: 'https://www.xing.com/profile/Florian_Rehder2', icon: <XingIcon /> },
                    instagram: { link: 'https://www.instagram.com/florian.rehder/', icon: <InstagramIcon /> },
                }}
            />
            <Credits imprintLink="/impressum" privacyLink="/datenschutz" />
        </Styled.Container>
    );
};

export default Footer;
