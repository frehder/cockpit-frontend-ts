import React from 'react';
import * as Styled from './styles';
import { TNavigationItems } from '../../../types/navigation';

interface INavigationProps {
    items?: TNavigationItems;
}

const Navigation = ({ items }: INavigationProps): React.ReactElement | null => {
    if (!items) return null;

    const navigation = Object.entries(items).map(([key, item]) => {
        return (
            <Styled.Link key={key} exact to={item.link}>
                {item.label}
            </Styled.Link>
        );
    });

    return <Styled.Container>{navigation}</Styled.Container>;
};

export default Navigation;
