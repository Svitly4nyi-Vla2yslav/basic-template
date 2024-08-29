import React from 'react';
import { HeaderContainer, Logo, Nav, MenuButton } from './Header.styled';


interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <HeaderContainer>
      <Logo>MyLogo</Logo>
      <Nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
      <MenuButton onClick={onMenuToggle}>Menu</MenuButton>
    </HeaderContainer>
  );
};

export default Header;
