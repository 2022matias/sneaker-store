import './popup.scss';

function Popup(props) {
    return (
        props.popupVisible ? (
            <>
                <div className='opacity' onClick={props.togglePopup}
                // onClick={() => {
                //     props.togglePopup("image");
                //     props.togglePopup("contact");
                //     props.togglePopup("publicity");
                // }}
                ></div>
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
