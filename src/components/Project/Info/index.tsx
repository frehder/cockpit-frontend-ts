import React from 'react';
import * as Styled from './styles';
import FeatureList, { IFeatureItem } from '../FeatureList';

interface IInfoProps {
    headline?: string;
    content?: string;
    features?: IFeatureItem[];
}

const Info = ({ headline = '', content = '', features = [] }: IInfoProps): React.ReactElement => {
    return (
        <Styled.Container>
            <Styled.Card hasFeatures={!!features}>
                <Styled.Content hasFeatures={!!features}>
                    <Styled.Headline>{headline}</Styled.Headline>
                    {!!content && <Styled.Text dangerouslySetInnerHTML={{ __html: content }} />}
                </Styled.Content>
                {!!features && (
                    <Styled.Features>
                        <Styled.FeatureHeadline>Projekt Features</Styled.FeatureHeadline>
                        <FeatureList features={features} />
                    </Styled.Features>
                )}
            </Styled.Card>
        </Styled.Container>
    );
};

export default Info;
