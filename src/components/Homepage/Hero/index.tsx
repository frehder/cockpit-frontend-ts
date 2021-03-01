import React from 'react';
import * as Styled from './styles';

interface IHeroProps {
    headline?: string;
    subline?: string;
}

const Hero = ({ headline = '', subline = '' }: IHeroProps): React.ReactElement => {
    return (
        <Styled.Container bgimg={`${process.env.PUBLIC_URL}/images/icon-pattern.png`}>
            <Styled.Content>
                <Styled.Headline>
                    <h1 dangerouslySetInnerHTML={{ __html: headline }} />
                    <p dangerouslySetInnerHTML={{ __html: subline }} />
                </Styled.Headline>
                <Styled.Avatar>
                    <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/images/avatar.webp`} type="image/webp" />
                        <img
                            loading="lazy"
                            src={`${process.env.PUBLIC_URL}/images/avatar.png`}
                            alt="Florian Rehder"
                            className="lazyload"
                        />
                    </picture>
                </Styled.Avatar>
            </Styled.Content>
        </Styled.Container>
    );
};

export default Hero;
