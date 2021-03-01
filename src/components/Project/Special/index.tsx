import React from 'react';
import { useSelector } from 'react-redux';
import { selectBlock } from '../../../store/homepage/selectors';
import * as Styled from './styles';
import { ReactComponent as ExternalLinkIcon } from '../../../assets/ExternalLink.svg';

const Special = (): React.ReactElement => {
    const special = useSelector(selectBlock('github-special'));
    const url = 'https://github.com/frehder/';

    return (
        <Styled.Container>
            <Styled.Link href={url} rel="noopener noreferrer" target="_blank" title={url}>
                <Styled.Wrapper>
                    <Styled.Headline>{special.headline}</Styled.Headline>
                    <Styled.Content dangerouslySetInnerHTML={{ __html: special.content }} />
                </Styled.Wrapper>
                <ExternalLinkIcon />
            </Styled.Link>
        </Styled.Container>
    );
};

export default Special;
