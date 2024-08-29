import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:  fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  
  @media ${(props) => props.theme.device.mobile} {
    padding: 0.5rem;
  } 

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