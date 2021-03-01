import React from 'react';
import TextContent from '../../components/Page/TextContent';

interface IErrorProps {
    headline?: string;
    text?: string;
}

const Error = ({ headline = '', text = '' }: IErrorProps): React.ReactElement => {
    return <TextContent headline={headline} content={`<p>${text}</p>`} />;
};

export default Error;
