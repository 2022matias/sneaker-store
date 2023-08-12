import "./card.scss";
// import { useState } from "react";

// const [cantidadEnElCarrito, setCantidadEnElCarrito] = useState(0);

// function handleClick() {
//     if (cantidadEnElCarrito < stock) {
//         setCantidadEnElCarrito(cantidadEnElCarrito++);
//     } else {
//         alert("No hay mas stock");
//     }
// }


function Card(props) {
    return (
        <>
            <div className="card">
                {props.shoes.map((shoe) =>
                    <article className="card__container" key={shoe.id}>
                        <img className="card__img" src={shoe.image} alt="sneakers" />
                        <div className="card__info">
                            <h3 className="card__title">{shoe.name}</h3>
                            <p className="card__description">{shoe.description}</p>
                            <p className="card__price">u$s {shoe.price}</p>
                            {/* <p className="card__stock">Stock: {shoe.stock}</p> */}
                            {<button className="card__button" /*onClick={handleClick}*/> Agregar al carrito</button>}
                        </div>
                    </article>
                )}
            </div >

        </>
    )
}

export default Card;
