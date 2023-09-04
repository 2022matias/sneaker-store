import './App.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import array from './components/data';
import CardProvider from './contexts/cardProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import Locales from './components/Locales/Locales';
import Contactos from './components/Contactos/Contactos';
import PublicityPopup from './components/PublicityPopup/PublicityPopup';
import ContactPopup from './components/ContactPopup/ContactPopup';

function App() {

  const [shoes, setShoes] = useState([]);
  const [popupVisible, setPopupVisible] = useState(true);

  React.useEffect(() => {
    setShoes(array.map(item => item));
  }, []);

  function togglePopup() {
    setPopupVisible(!popupVisible);
  }

  return (
    <div className="page">
      <CardProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Main shoes={shoes} />} />
          <Route path='/locales' element={<Locales />} />
          <Route path='/contacto' element={<Contactos popupVisible={popupVisible} togglePopup={togglePopup} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <PublicityPopup popupVisible={popupVisible} togglePopup={togglePopup} /> */}
        <ContactPopup popupVisible={popupVisible} togglePopup={togglePopup} />
        <Footer />
      </CardProvider>
    </div>

  );

}
export default App;