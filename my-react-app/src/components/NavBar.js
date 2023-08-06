import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink to="/man" className="navbar-link">
                        Hombre
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/girl" className="navbar-link">
                        Mujer
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/company" className="navbar-link">
                        Empresa
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/contact" className="navbar-link">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;