import { NavLink } from 'react-router-dom'
import './navbar.scss';
function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavLink to="/" className="navbar-link">
                    Zapatillas
                </NavLink>
                <NavLink to="/locales" className="navbar-link">
                    Locales
                </NavLink>
                <NavLink to="/contacto" className="navbar-link">
                    Contacto
                </NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;