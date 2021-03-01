import React from 'react';
import * as Styled from './styles';

interface IHeroProps {
    headline: string;
    subline?: string;
}

const Hero = ({ headline, subline }: IHeroProps): React.ReactElement => {
    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Headline>{headline}</Styled.Headline>
                {!!subline && <Styled.Subline>{subline}</Styled.Subline>}
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Hero;
