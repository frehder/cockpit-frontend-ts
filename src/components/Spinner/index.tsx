import React from 'react';
import * as Styled from './styles';

interface ISpinnerProps {
    spinnerStyle?: React.CSSProperties;
}

const Spinner = ({ spinnerStyle }: ISpinnerProps): React.ReactElement => <Styled.Spinner style={spinnerStyle} />;

export default Spinner;
