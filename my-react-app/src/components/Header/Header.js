import logoZapatillas from '../../images/logoZapatillas.png';
import carritoDeCompras from '../../images/carritoDeCompras.png';
import './header.scss';
import { CardContext } from '../../contexts/cardProvider';
import { useContext } from 'react';

function Header() {
    const valorContexto = useContext(CardContext);
    const { cantidadEnElCarrito } = valorContexto;
    return (
        <header className="header">
            <img src={logoZapatillas} alt="logo" className="header__logo" />
            <h1 className="header__title">Sport shoes</h1>
            <div className="header__separator">
                {/* <div className="header__separator-line">
                    <p>Crear cuenta</p>
                    <p>Iniciar sesión</p>
                </div> */}
                <div className="header__separator-line">
                    <img src={carritoDeCompras} alt="carrito de compras" className="header__separator-cart" />
                    <p className="header__separator-counter">{cantidadEnElCarrito}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;