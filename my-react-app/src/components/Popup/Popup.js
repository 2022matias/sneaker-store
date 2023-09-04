import './popup.scss';

function Popup(props) {
    return (
        props.popupVisible ? (
            <>
                <div className='opacity' onClick={props.togglePopup}></div>
                <div className="popup">
                    {props.children}
                </div>
            </>
        ) : (
            <div className="popup__hidden"></div>
        )
    )
}

export default Popup;
