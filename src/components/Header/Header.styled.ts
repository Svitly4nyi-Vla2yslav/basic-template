import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media ${(props) => props.theme.device.mobile} {
    display: block;
  }
`;