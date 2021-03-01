import React from 'react';
import * as Styled from './styles';
import { IImage } from '../../../store/projects/types';
import FeaturedImage from '../FeaturedImage';

interface IHeroProps {
    headline?: string;
    colorscheme?: string;
    bgcolor?: string;
    image?: IImage;
}

const Hero = ({ headline = '', colorscheme = 'light', bgcolor = '', image }: IHeroProps): React.ReactElement => {
    return (
        <Styled.Container style={{ backgroundColor: bgcolor }}>
            <Styled.Headline colorscheme={colorscheme}>{headline}</Styled.Headline>
            <FeaturedImage img={image} alt={headline} />
        </Styled.Container>
    );
};

export default Hero;
