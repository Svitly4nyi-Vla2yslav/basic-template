import React, { useState } from 'react';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import GoogleMap from './components/GoogleMap/GoogleMap';
import ModalMenu from './components/ModalMenu/ModalMenu';


const App: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header onMenuToggle={toggleMenu} />
      <main>
        {/* Контент сторінки */}
        <ContactForm />
        <GoogleMap />
      </main>
      <Footer />
      {isMenuOpen && <ModalMenu onClose={toggleMenu} />}
    </div>
  );
};

export default App;
