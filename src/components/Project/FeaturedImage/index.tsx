import React from 'react';
import * as Styled from './styles';
import { IImage } from '../../../store/projects/types';

interface IImageProps {
    img?: IImage;
    alt?: string;
}

const Image = ({ img, alt }: IImageProps): React.ReactElement | null => {
    if (!img || !img.path) return null;

    const imageUrl = `${process.env.REACT_APP_API_BASE_URL}/${img.path}`;
    const altAttr = !!alt ? alt : img?.meta?.title ? img.meta.title : '';

    return (
        <Styled.Visual>
            <source srcSet={imageUrl.replace(/\.jpg|\.png/gi, '.webp')} type="image/webp" />
            <Styled.Image loading="lazy" src={imageUrl} alt={altAttr} className="lazyload" />
        </Styled.Visual>
    );
};

export default Image;
