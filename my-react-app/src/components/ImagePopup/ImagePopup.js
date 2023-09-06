import Popup from '../Popup/Popup';
import closeIcon from '../../images/closeIcon.png';
import './imagePopup.scss';

function ImagePopup(props) {
    console.log(props);
    return (
        < Popup popupVisible={props.popupVisible} togglePopup={props.togglePopup} >
            <img className="imagePopup" src={props.shoe.image} alt="image" />
            <img className='popup__button_close-icon' src={closeIcon} alt="close" onClick={props.togglePopup} />
        </Popup >
    )
}

export default ImagePopup;

