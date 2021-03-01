import React from 'react';
import * as Styled from './styles';

export interface IFeatureItem {
    value: string;
}

interface IFeatureListProps {
    features?: IFeatureItem[];
}

const FeatureList = ({ features = [] }: IFeatureListProps): React.ReactElement | null => {
    if (!features) return null;

    return (
        <Styled.List>
            {features.map(({ value }, index) => (
                <Styled.Item key={index}>{value}</Styled.Item>
            ))}
        </Styled.List>
    );
};

export default FeatureList;
