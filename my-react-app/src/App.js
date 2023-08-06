import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from './contexts/currentUserContext';
import Main from './components/Main';
import Header from './components/Header/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <CurrentUserContext.Provider>
        <Header />
        <NavBar />
        {/* <NavLink to="/man">Hombre</NavLink>
          <NavLink to="/girl">Mujer</NavLink>
          <NavLink to="/company">Empresa</NavLink>
          <NavLink to="/contact">contacto</NavLink> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>

  );

}
export default App;