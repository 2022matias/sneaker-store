import './App.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import array from './components/data';
import CardProvider from './contexts/cardProvider';
import Popup from './components/Popup/Popup';

function App() {

  const [shoes, setShoes] = useState([]);
  const [popupVisible, setPopupVisible] = useState(true);

  React.useEffect(() => {
    setShoes(array.map(item => item));
  }, []);

  function togglePopup() {
    setPopupVisible(false);
  }

  return (
    <div className="page">
      <CardProvider>
        <Header />
        <NavBar />
        <Main shoes={shoes} />
        <Popup popupVisible={popupVisible} togglePopup={togglePopup} />
        <Footer />
      </CardProvider>
    </div>

  );

}
export default App;