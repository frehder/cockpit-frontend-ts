import React from 'react';
import * as Styled from './styles';
import { IProject } from '../../../store/projects/types';
import FeaturedImage from '../FeaturedImage';

interface ITileProps {
    project: IProject;
}

const Tile = ({ project }: ITileProps): React.ReactElement | null => {
    const {
        slug,
        header_headline: headline,
        header_headline_color: colorscheme = 'light',
        header_background_color: bgcolor,
        info_meta: subline,
        header_image: image,
        is_published,
    } = project;

    if (!is_published) return null;

    return (
        <Styled.Container className={`item-${slug}`} style={{ backgroundColor: bgcolor }}>
            <Styled.Link to={`portfolio/${slug}`}>
                <Styled.Tile>
                    <FeaturedImage img={image} alt={headline} />
                    <Styled.Caption colorScheme={colorscheme}>
                        <Styled.Headline>{headline}</Styled.Headline>
                        <Styled.Subline>{subline}</Styled.Subline>
                    </Styled.Caption>
                </Styled.Tile>
            </Styled.Link>
        </Styled.Container>
    );
};

export default Tile;
