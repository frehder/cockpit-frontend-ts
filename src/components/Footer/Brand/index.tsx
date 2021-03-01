import React from 'react';
import * as Styled from './styles';
import Logo from '../../Logo';

interface IBrandProps {
    headline?: string;
    linkTo?: string;
}

const Brand = ({ headline = '', linkTo = '/' }: IBrandProps): React.ReactElement => {
    return (
        <Styled.Container>
            <Logo linkTo={linkTo} />
            <Styled.Headline dangerouslySetInnerHTML={{ __html: headline }} />
        </Styled.Container>
    );
};

export default Brand;
