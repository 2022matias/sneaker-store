import Publicity from '../Publicity/Publicity';
import Card from '../Card/Card';
import './main.scss';

function Main(props) {
    return (
        <>
            <Card shoes={props.shoes} />
            <Publicity />
        </>
    )

}

export default Main;


// function Main(props) {
//     return (
//         <>
//             <div className='main'>
//                 {props.shoes?.map((shoe) =>
//                     <article className="main__container">
//                         <img className="main__img" src={shoe.image} alt="sneakers" />
//                         <div className="main__info">
//                             <h3 className="main__title">{shoe.name}</h3>
//                             <p className="main__description">{shoe.description}</p>
//                             <p className="main__price">u$s {shoe.price}</p>
//                             <button className="main__button">Comprar</button>
//                         </div>
//                     </article>
//                 )}
//             </div>

//         </>
//     )
// }

// export default Main;
