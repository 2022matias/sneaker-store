import { useContext, useState } from "react";
import "./card.scss";
import { CardContext } from "../../contexts/cardProvider";

function Card(props) {
    const { sumarAlCarrito } = useContext(CardContext);
    const [cantidadDeZapatillas, setCantidadDeZapatillas] = useState(0);

    const handleClick = (stock) => {
        if (cantidadDeZapatillas < stock) {
            setCantidadDeZapatillas(cantidadDeZapatillas + 1);
        } else {
            alert("No hay mas stock");
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleSumarAlCarrito = () => {
        sumarAlCarrito(cantidadDeZapatillas);
        scrollToTop();
    }
    return (
        <>
            <div className="card">
                <article className="card__container">
                    <img className="card__img" src={props.shoes.image} alt="sneakers" />
                    <div className="card__info">
                        <h3 className="card__title">{props.shoes.name}</h3>
                        <p className="card__description">{props.shoes.description}</p>
                        <p className="card__price">u$s {props.shoes.price}</p>
                        <p className="card__stock">Stock: {props.shoes.stock}</p>
                        <p className="card__buy">{cantidadDeZapatillas}</p>
                        <button className="card__button" onClick={() => handleClick(props.shoes.stock)}>+</button>
                        <button className="card__button2" onClick={handleSumarAlCarrito}>Comprar</button>"
                    </div>
                </article>
            </div >

        </>
    )
}

export default Card;
