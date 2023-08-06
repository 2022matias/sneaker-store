import logoZapatillas from '../images/logoZapatillas.png';
import carritoDeCompras from '../images/carritoDeCompras.png';

function Header() {
    return (
        <header className="header">
            <img src={logoZapatillas} alt="logo" className="logo" />
            <h1 className="titulo">Sport shoes</h1>
            <div className="separador">
                <div className="separador-linea">
                    <p>Crear cuenta</p>
                    <p>Iniciar sesión</p>
                </div>
                <img src={carritoDeCompras} alt="carrito" className="carrito" />
            </div>
        </header>
    );
}

export default Header;