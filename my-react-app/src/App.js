import './App.scss';
// import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from './contexts/currentUserContext';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
// import * as api from "./utils/api";
import React, { useState } from 'react';
import array from './components/data';

function App() {

  const [shoes, setShoes] = useState([]);

  React.useEffect(() => {
    // api.getInfo()
    //   .then((data) => {
    //     setshoes(data);
    //   })
    setShoes(array.map(item => item));
  }, []);

  // const shoes = array.map((item) => item
  // );

  return (
    <div className="page">
      <CurrentUserContext.Provider value={shoes}>
        <div className="page__content">
        </div>
        <div className="page__content">
        </div>
        <div className="page__content">
        </div>
        <div className="page__content">
        </div>
        <Header />
        <NavBar />
        <Main shoes={shoes} />
        {/* <Routes>
          <Route path="/" element={<Main />} />
        </Routes> */}
        <Footer />
      </CurrentUserContext.Provider>
    </div>

  );

}
export default App;