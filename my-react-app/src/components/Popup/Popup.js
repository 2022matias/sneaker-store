import './popup.scss';

function Popup(props) {
    let propertyName = props.propertyName === undefined ? 'publicity' : String(props.propertyName);
    return (
        props.popupVisible ? (
            <>
                <div className='opacity' onClick={() => props.togglePopup(propertyName)}></div>
                <div className={`popup ${propertyName === 'image' ? 'popup__image' : (propertyName === 'contact' ? 'popup__contact' : '')}`}>
                    {props.children}
                </div >
            </>
        ) : (
            <div className="popup__hidden"></div>
        )
    )
}

export default Popup;
