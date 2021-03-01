import React from 'react';
import useTitle from '../../hooks/useTitle';
import * as Styled from './styles';
import Spinner from '../../components/Spinner';

const FullscreenLoader = (): React.ReactElement => {
    useTitle();

    return (
        <Styled.Container>
            <Spinner spinnerStyle={{ width: 'var(--space-large)' }} />
        </Styled.Container>
    );
};

export default FullscreenLoader;
