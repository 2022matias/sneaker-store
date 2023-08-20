import './popup.scss';
import { useState, useEffect } from 'react';
import { getInfo } from '../../utils/api';

function Popup(props) {

    const [imagenes, setImagenes] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [autoChange, setAutoChange] = useState(true);

    useEffect(() => {
        getInfo()
            .then(data => {
                setImagenes(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (imagenes.length !== 0) {
            setSelectedImage(imagenes[selectedIndex].image)
        }
    }, [imagenes, selectedIndex]);

    useEffect(() => {
        let timeoutId;
        const changeImageAutomatically = () => {
            if (autoChange) {
                next();
            }
        };
        if (autoChange) {
            timeoutId = setTimeout(changeImageAutomatically, 1500);
        }
        return () => clearTimeout(timeoutId);
    }, [imagenes, autoChange, selectedIndex])

    function previous() {
        if (selectedIndex === 0) {
            setSelectedIndex(imagenes.length - 1);
            setSelectedImage(imagenes[selectedIndex].image);
        } else {
            setSelectedIndex(selectedIndex - 1);
            setSelectedImage(imagenes[selectedIndex].image);
        }
    }

    function next() {
        if (imagenes.length === 0) {
            return;
        }
        if (selectedIndex === imagenes.length - 1) {
            setSelectedIndex(0);
            setSelectedImage(imagenes[selectedIndex].image);
        } else {
            setSelectedIndex(selectedIndex + 1);
            setSelectedImage(imagenes[selectedIndex].image);
        }
    }

    return (
        props.popupVisible ? (
            <div className='popup-opacity'>
                <div className="popup-container">
                    <h2>Haga click en la imagen para visitar nuestras otras tiendas</h2>
                    <div>
                        <button className='popup-button' onClick={previous}>{"<"}</button>
                        <img className='popup-img' src={selectedImage} alt="publicity" />
                        <button className='popup-button' onClick={next}>{">"}</button>
                    </div>
                    <button onClick={props.togglePopup}>Cerrar</button>
                    <button onClick={() => { setAutoChange(!autoChange) }}>Autoplay On/Off</button>
                </div>
            </div>
        ) : (
            <div className="popup-container-hidden"></div>
        )

    )

}

export default Popup;
