import React from 'react';
import * as Styled from './styles';

interface ISocialNetwork {
    link: string;
    icon: React.ReactElement;
}

interface ISocialProps {
    items: Record<string, ISocialNetwork>;
}

const Social = ({ items }: ISocialProps): React.ReactElement => {
    const rel = 'noopener noreferrer';
    const target = '_blank';
    const elements = Object.entries(items).map(([slug, item]) => {
        return (
            <Styled.Link key={slug} href={item.link} rel={rel} target={target}>
                {item.icon}
            </Styled.Link>
        );
    });

    return (
        <Styled.Container>
            <Styled.Wrapper>{elements}</Styled.Wrapper>
        </Styled.Container>
    );
};

export default Social;
