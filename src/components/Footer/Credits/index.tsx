import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

interface ICreditsProps {
    imprintLink?: string;
    privacyLink?: string;
}

const Credits = ({ imprintLink = '/impressum', privacyLink = '/datenschutz' }: ICreditsProps): React.ReactElement => {
    const name = 'Florian Rehder';
    const year = new Date().getFullYear();
    const imprint = <Link to={imprintLink}>Impressum</Link>;
    const privacy = <Link to={privacyLink}>Datenschutz</Link>;

    return (
        <Styled.Container>
            <Styled.Text>
                &copy; {year} {name} &middot; {imprint} &middot; {privacy}
            </Styled.Text>
        </Styled.Container>
    );
};

export default Credits;
