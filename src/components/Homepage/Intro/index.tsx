import React from 'react';
import * as Styled from './styles';

interface IIntroProps {
    headline: string;
    content: string;
}

const Intro = ({ headline, content }: IIntroProps): React.ReactElement => {
    return (
        <Styled.Container>
            <Styled.Item>
                <Styled.Headline>{headline}</Styled.Headline>
                <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
            </Styled.Item>
        </Styled.Container>
    );
};

export default Intro;
