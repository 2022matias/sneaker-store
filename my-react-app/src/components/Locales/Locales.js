import local1 from '../../images/local1.webp';
import local2 from '../../images/local2.jpg';
import local3 from '../../images/local3.jpg';
import local4 from '../../images/local4.jpg';
import './locales.scss';

function Locales() {
    return (
        <>
            <h2 className='locales__title'> Aquí encontrarás información sobre los locales de la tienda.</h2>
            <section className='locales'>
                <div className="locales__texto">
                    <ul>
                        <li>
                            <h3>Barrio Norte</h3>
                            <p> Av. Callao 863 Esq. Av. Córdoba // Tel. 4816-6469 / 📲 11-2580-4834  – Lu a Vie de 9.00 a 20 hs. Sab de 10.00 a 17.00 hs.
                                <br />Av. Santa Fe 1613 Esq. Montevideo // Tel. 4811-4992 / 📲 11-2580-4813 – Lu a Vie de 9.00 a 20.00 hs. Sab. de 10 A 19.00 hs.
                                <br />Av. Santa Fe 2914/18 Esq. Aguero // Tel. 4823-5978 / 📲 11-2580-4828 – Lu a Vie de 9.00 a 20.00 hs, Sab de 10.00 a 19.00 hs.</p>
                        </li>
                        <li>
                            <h3>Palermo</h3>
                            <p>Av. Santa Fe 3371 Esq. Vidt // Tel. 4821-3912 / 📲 11-2580-4825 – Lu a Vie de 9.30 a 20.00 hs. Sab 10:00 a 20.00 hs</p>
                        </li>
                        <li>
                            <h3>Recoleta</h3>
                            <p>Av. Las Heras 2302/06 Esq. Pueyrredón // Tel. 4803-5146 / 📲 11-2580-4835  – Lu a Vie de 9.00 a 20.00 hs, Sab de 10.00 a 18.00 hs.</p>
                        </li>
                        <li>
                            <h3>Belgrano</h3>
                            <p>Av. Cabildo 1600 Esq. Virrey del Pino // Tel. 47815409 / 📲 11-3303-6923 – Lu a Sab de 10.00 a 20.00 hs.</p>
                        </li>
                        <li>
                            <h3>Villa Urquiza</h3>
                            <p>Av. Monroe 4955 // 📲 4767-5216  – Lu a Sáb de 10.00 a 20.30 hs. Feriados ABIERTO de 10.00 a 20.30hs </p>
                        </li>
                        <li>
                            <h3>Microcentro</h3>
                            <p>Lavalle 529 // Tel. 4328-6852 /📲 11-2580-4830 – Lu a Vie de 9.00 a 19.00 hs. OUTLET
                                <br />Reconquista 594 // Tel. 4328-6475/ 📲 11-2465-1373  – Lu a Vie de 9.30 a 19.00 hs.
                                <br />Carlos Pellegrini 699  // Tel.📲 11-2580-4810 – Lu a Vie de 9.00 a 19:30 hs. Sab 9:30 a 15:00 hs</p>
                        </li>
                        <li>
                            <h3>Tribunales</h3>
                            <p>Uruguay 538 // Tel. 📲 11-2580-4816 – Lu a Vie de 9 a 18.30 hs. PREMIUM OUTLET en Subsuelo</p>
                        </li>
                        <li>
                            <h3>Martinez</h3>
                            <p>Alvear 70 // Tel. 4733-4043 /📲 11-2580-4817 – Lu a Sáb de 09.00 a 20.00 hs.</p>
                        </li>
                        <li>
                            <h3>Pilar</h3>
                            <p>Ruta 9 Ramal Pilar Km44// Shopping Paseo Pilar //Local 10//02320-366133// Lu a Lu de 10.00 a 20.00 hs</p>
                        </li>
                        <li>
                            <h3>Rosario</h3>
                            <p>Shopping Palace // Loc. 2/4 // Corrientes 755 // Tel. 0341 421-6948 – Lu a Lu de 10.00 a 22.00 hs.​</p>
                        </li>
                    </ul>
                </div>
                <div className="locales__img">
                    <img className="locales__img" src={local1} alt="locales" />
                    <img className='locales__img' src={local2} alt="locales" />
                    <img className='locales__img' src={local3} alt="locales" />
                    <img className='locales__img' src={local4} alt="locales" />
                </div>
            </section>
        </>
    );
}

export default Locales;