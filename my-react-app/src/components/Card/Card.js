import { useContext, useState } from "react";
import "./card.scss";
import { CardContext } from "../../contexts/cardProvider";

function Card(props) {
    const { sumarAlCarrito } = useContext(CardContext);
    const [cantidadDeZapatillas, setCantidadDeZapatillas] = useState(0);
    const [stockDisponible, setStockDisponible] = useState(props.shoes.stock);

    const handleClickAdd = () => {
        if (cantidadDeZapatillas < stockDisponible) {
            setCantidadDeZapatillas(cantidadDeZapatillas + 1);
        } else {
            alert("No hay mas stock");
        }
    }

    const handleClickSubtract = () => {
        if (cantidadDeZapatillas > 0) {
            setCantidadDeZapatillas(cantidadDeZapatillas - 1);
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
        setStockDisponible(stockDisponible - cantidadDeZapatillas);
        scrollToTop();
        setCantidadDeZapatillas(0);
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
                        <p className="card__stock">Stock: {stockDisponible}</p>
                        <div className="card__buy-container">
                            <button className="card__button-subtract" onClick={handleClickSubtract}>-</button>
                            <p className="card__buy">{cantidadDeZapatillas}</p>
                            <button className="card__button-add" onClick={handleClickAdd}>+</button>
                        </div>
                        <button className="card__button-kart" onClick={handleSumarAlCarrito}>Comprar</button>
                    </div>
                </article>
            </div >

        </>
    )
}

export default Card;
