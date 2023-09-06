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
import Inicio from './components/Inicio/Inicio';
import ImagePopup from './components/ImagePopup/ImagePopup';



function App() {

  const [shoes, setShoes] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState([]);

  React.useEffect(() => {
    setShoes(array.map(item => item));
  }, []);

  function togglePopup() {
    setPopupVisible(!popupVisible);
  }

  function onShoeClick(shoe) {
    setSelectedShoe(shoe);
    togglePopup();
  }

  return (
    <div className="page">
      <CardProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path="/zapatillas" element={<Main shoes={shoes} onShoeClick={onShoeClick} />} />
          <Route path='/locales' element={<Locales />} />
          <Route path='/contacto' element={<Contactos popupVisible={popupVisible} togglePopup={togglePopup} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <PublicityPopup popupVisible={popupVisible} togglePopup={togglePopup} /> */}
        {/* <ContactPopup popupVisible={popupVisible} togglePopup={togglePopup} /> */}
        <ImagePopup popupVisible={popupVisible} togglePopup={togglePopup} shoe={selectedShoe} />
        <Footer />
      </CardProvider>
    </div>

  );

}
export default App;