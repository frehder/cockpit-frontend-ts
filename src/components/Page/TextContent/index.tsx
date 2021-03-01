import React from 'react';
import * as Styled from './styles';

interface ITextContentProps {
    headline: string;
    content: string;
}

const TextContent = ({ headline, content }: ITextContentProps): React.ReactElement => {
    return (
        <Styled.Container>
            <Styled.Headline>{headline}</Styled.Headline>
            <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
        </Styled.Container>
    );
};

export default TextContent;
