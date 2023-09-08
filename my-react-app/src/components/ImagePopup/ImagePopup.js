import Popup from '../Popup/Popup';
import closeIcon from '../../images/closeIcon.png';
import './imagePopup.scss';

function ImagePopup(props) {
    return (
        < Popup popupVisible={props.popupVisible} togglePopup={props.togglePopup} propertyName={props.propertyName}>
            <img className="imagePopup" src={props.shoe.image} alt="image" />
            <img className='popup__button_close-icon' src={closeIcon} alt="close" onClick={() => props.togglePopup("image")} />
        </Popup >
    )
}

export default ImagePopup;

