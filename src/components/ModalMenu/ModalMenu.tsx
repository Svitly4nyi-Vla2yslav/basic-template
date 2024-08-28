import React from 'react';
import { ModalBackground, ModalContainer } from './ModalMenu.styled';


interface ModalMenuProps {
  onClose: () => void;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Menu</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button onClick={onClose}>Close</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalMenu;
