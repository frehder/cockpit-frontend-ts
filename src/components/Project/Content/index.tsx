import React from 'react';
import BaguetteBox from 'baguettebox.js';
import { baguetteboxClass, baguetteboxOptions } from '../../../vendor/baguettebox.config';
import * as Styled from './styles';

interface IContentProps {
    content?: string;
    styles?: string;
}

const Content = ({ content, styles }: IContentProps): React.ReactElement | null => {
    if (!content) return null;

    React.useEffect(() => {
        BaguetteBox.run(`.${baguetteboxClass}`, baguetteboxOptions);
    }, []);

    return (
        <Styled.Container>
            {!!styles && <style type="text/css">{`${styles}`}</style>}
            <Styled.Content className={baguetteboxClass} dangerouslySetInnerHTML={{ __html: content }} />
        </Styled.Container>
    );
};

export default Content;
