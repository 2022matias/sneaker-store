import Card from '../Card/Card';
import './main.scss';
import { useState } from 'react';

function Main(props) {
    const [totalParaMostrar, setTotalPAraMostrar] = useState(3);

    const handleLoadMore = () => {
        setTotalPAraMostrar(totalParaMostrar + 3);
    };

    let copiaDelArray = props.shoes?.slice(0, totalParaMostrar);
    return (
        <>
            <div className='main'>
                {copiaDelArray.map((shoe) =>
                    <Card shoes={shoe} key={shoe.id} />
                )}
            </div>
            <button onClick={handleLoadMore}>Mostrar mas</button>
        </>
    )
}

export default Main;
