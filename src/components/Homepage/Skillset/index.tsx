import React from 'react';
import * as Styled from './styles';

interface ISkillset {
    headline: string;
    content: string;
}

interface ISkillsetProps {
    design: ISkillset;
    development: ISkillset;
}

const Skillset = ({ design, development }: ISkillsetProps): React.ReactElement => {
    return (
        <Styled.Container>
            <Styled.Deck>
                <Styled.Card>
                    <Styled.Headline>
                        <Styled.Design />
                        {design.headline}
                    </Styled.Headline>
                    <Styled.Content dangerouslySetInnerHTML={{ __html: design.content }} />
                </Styled.Card>
                <Styled.Card>
                    <Styled.Headline>
                        <Styled.Code />
                        {development.headline}
                    </Styled.Headline>
                    <Styled.Content dangerouslySetInnerHTML={{ __html: development.content }} />
                </Styled.Card>
            </Styled.Deck>
        </Styled.Container>
    );
};

export default Skillset;
