import React from 'react';
import * as Styled from './styles';
import { TNavigationItems } from '../../types/navigation';
import Logo from '../Logo';
import Navigation from './Navigation';

interface IHeaderProps {
    navigationItems: TNavigationItems;
}

const Header = ({ navigationItems }: IHeaderProps): React.ReactElement => {
    return (
        <Styled.Header>
            <Styled.Brand>
                <Logo linkTo={navigationItems.home.link} />
            </Styled.Brand>
            <Styled.Navigation>
                <Navigation items={navigationItems} />
            </Styled.Navigation>
        </Styled.Header>
    );
};

export default Header;
