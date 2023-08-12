import { NavLink } from 'react-router-dom'
import './navbar.scss';
function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavLink to="/man" className="navbar-link">
                    Hombre
                </NavLink>
                <NavLink to="/girl" className="navbar-link">
                    Mujer
                </NavLink>
                <NavLink to="/company" className="navbar-link">
                    Empresa
                </NavLink>
                <NavLink to="/contact" className="navbar-link">
                    Contacto
                </NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;