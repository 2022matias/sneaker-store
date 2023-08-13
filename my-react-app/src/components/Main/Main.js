import Publicity from '../Publicity/Publicity';
import Card from '../Card/Card';
import './main.scss';

function Main(props) {
    return (
        <>
            <div className='main'>
                {props.shoes?.map((shoe) =>
                    <Card shoes={shoe} key={shoe.id} />
                )}
            </div>
            <Publicity />
        </>
    )
}

export default Main;
