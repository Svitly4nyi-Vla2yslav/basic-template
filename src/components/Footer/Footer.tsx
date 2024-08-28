import React from 'react';
import { FooterContainer, SocialIcons } from './Footer.styled';


const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2024 MySite. All rights reserved.</p>
      <SocialIcons>
        <a href="/#">FB</a>
        <a href="/#">TW</a>
        <a href="/#">IG</a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
