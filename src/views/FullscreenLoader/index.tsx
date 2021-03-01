import React from 'react';
import * as Styled from './styles';
import Spinner from '../../components/Spinner';

const FullscreenLoader = (): React.ReactElement => {
    return (
        <Styled.Container>
            <Spinner spinnerStyle={{ width: 'var(--space-large)' }} />
        </Styled.Container>
    );
};

export default FullscreenLoader;
