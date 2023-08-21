import './popup.scss';
import { useState, useEffect } from 'react';
import { getInfo } from '../../utils/api';
import closeIcon from '../../images/closeIcon.png'

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
    }, [imagenes, autoChange, selectedIndex, next])

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
            <div className='opacity'>
                <div className="popup">
                    <h2>Haga click en la imagen para visitar nuestras otras tiendas</h2>
                    <div className='popup__container'>
                        <button className='popup__button' onClick={previous}>{"<"}</button>
                        <a href='https://avellanedaropa.com/' target='_blank' rel='noreferrer'>
                            <img className='popup__img' src={selectedImage} alt="publicity" />
                        </a>
                        <button className='popup__button' onClick={next}>{">"}</button>
                    </div>
                    <img className='popup__button_close-icon' src={closeIcon} alt="close" onClick={props.togglePopup} />
                    <button onClick={() => { setAutoChange(!autoChange) }}>Autoplay On/Off</button>
                </div>
            </div>
        ) : (
            <div className="popup__hidden"></div>
        )

    )

}

export default Popup;
