import '../Popup/Popup';
import Popup from '../Popup/Popup';
import closeIcon from '../../images/closeIcon.png';
import espera from '../../images/espera.jpg';
import './contactPopup.scss';

function ContactPopup(props) {

    return (
        <Popup popupVisible={props.popupVisible} togglePopup={props.togglePopup} >
            <img className='popup__image' src={espera} alt="espera" />
            <h2 className='popup__info'>Gracias por su consulta. <br></br>Le responderemos a la brevedad.</h2>
            <img className='popup__button_close-icon' src={closeIcon} alt="close" onClick={props.togglePopup} />
        </Popup>
    )
}

export default ContactPopup;