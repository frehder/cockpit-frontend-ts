import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Styled from './styles';
import Button from '../Button';

interface IButtonProps {
    label?: string;
    link?: string;
}

interface ICallToActionProps {
    headline?: string;
    text?: string;
    button?: IButtonProps;
}

const CallToAction = ({
    headline = '',
    text = '',
    button = { label: '', link: '/' },
}: ICallToActionProps): React.ReactElement | null => {
    const history = useHistory();
    const location = useLocation();

    if (!headline || !text) return null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!button.link) return null;
        history.push(button.link);
    };

    if (location.pathname === '/kontakt') return null;

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Item>
                    <Styled.Headline>{headline}</Styled.Headline>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Text>{text}</Styled.Text>
                </Styled.Item>
                <Styled.Item>
                    <Button type="primary" label={button.label} onClick={handleButtonClick} />
                </Styled.Item>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default CallToAction;
